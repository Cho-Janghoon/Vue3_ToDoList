<script lang="ts" setup>
import { useStore } from "~/stores/store";
const store = useStore();
const toDoList = store.toDoList;
const searchTodoList = store.searchTodoList;
const searchKewordState = ref<boolean>(false);
const addToDoListDataState = ref<boolean>(false);
const deleteToDoListDataState = ref<boolean>(false);

const changeTodoListCheck = (idx: number) => {
    toDoList[idx].check = !toDoList[idx].check;
    switch (toDoList[idx].check) {
        case true:
            store.addDoneToDoList(idx);
            break;
        case false:
            store.deleteDoneToDoList(idx);
            break;
    }
};

const searchToDo = (e) => {
    store.searchKeyword(e);
    if (searchTodoList.length === 0) {
        searchKewordState.value = true;
        setTimeout(() => {
            (document.getElementById("searchId") as HTMLInputElement).value =
                null;
            searchKewordState.value = false;
        }, 3000);
    }
};

watchEffect(() => {
    if (store.addToDoListDataState) {
        addToDoListDataState.value = true;
        store.addToDoListDataState = false;
        setTimeout(() => {
            addToDoListDataState.value = false;
        }, 3000);
    }
    if (store.deleteToDoListDataState) {
        deleteToDoListDataState.value = true;
        store.deleteToDoListDataState = false;
        setTimeout(() => {
            deleteToDoListDataState.value = false;
        }, 2000);
    }
});

const deleteToDo = (idx) => {
    store.deleteToDoList(idx);
};

// onUnmounted(() => {
//     console.log("unmounted");
// });

// onBeforeMount(() => {
//     console.log("berforemount");
// });

// onMounted(() => {
//     console.log("mounted");
//     console.log(addToDoListDataState);
// });

// onUpdated(() => {
//     console.log("updated");
// });
</script>

<template>
    <div class="home-container-box">
        <div
            v-if="addToDoListDataState"
            class="header-alert"
            :class="{ modalAniStart: addToDoListDataState }"
        >
            <v-alert type="success">TODOLIST가 추가 되었습니다.</v-alert>
        </div>
        <div
            v-if="deleteToDoListDataState"
            class="header-alert"
            :class="{ modalAniStart: deleteToDoListDataState }"
        >
            <v-alert type="error">TODOLIST가 삭제 되었습니다.</v-alert>
        </div>
        <div
            v-if="searchKewordState"
            class="header-alert"
            :class="{ modalAniStart: searchKewordState }"
        >
            <v-alert type="warning">키워드가 존재하지 않습니다.</v-alert>
        </div>
        <div class="home-container-title">
            <p>To Do List</p>
            <div class="home-container-search">
                <Icon name="quill:search" style="width: 24px; height: 24px" />
                <input
                    type="text"
                    onfocus="this.placeholder = ''"
                    @keyup.enter="searchToDo"
                    placeholder="키워드를 입력해주세요:)"
                    id="searchId"
                />
            </div>
        </div>
        <ul class="home-container">
            <template v-if="toDoList.length === 0">
                <skeleton />
                <skeleton />
                <skeleton />
                <skeleton />
                <skeleton />
            </template>
            <template v-if="searchTodoList.length === 0">
                <li v-for="(el, idx) in toDoList" class="home-content-box">
                    <div class="home-content-title">
                        <div
                            style="color: rgb(105, 121, 248); margin-right: 8px"
                        >
                            {{ idx + 1 }}.
                        </div>

                        <div style="margin-right: 8px">{{ el.do }}</div>
                        <div style="font-size: 8px">{{ el.date }}</div>
                    </div>
                    <div class="home-content-button-box">
                        <button
                            class="home-content-check"
                            @click="changeTodoListCheck(idx)"
                        >
                            <img
                                v-if="toDoList[idx].check"
                                class="home-content-check-img"
                                src="~/assets/images/check.png"
                            />
                            <div style="cursor: pointer" v-else>
                                <Icon name="quill:checkmark" />
                            </div>
                        </button>
                        <div style="cursor: pointer" @click="deleteToDo(idx)">
                            <Icon name="ep:delete" />
                        </div>
                    </div>
                </li>
            </template>
            <template v-else-if="searchTodoList.length > 0">
                <li
                    v-for="(el, idx) in searchTodoList"
                    class="home-content-box"
                >
                    <div class="home-content-title">
                        <div
                            style="color: rgb(105, 121, 248); margin-right: 8px"
                        >
                            {{ idx }}.
                        </div>
                        <div>{{ el.do }}</div>
                    </div>
                    <button
                        class="home-content-check"
                        @click="changeTodoListCheck(idx)"
                    >
                        <img
                            v-if="toDoList[idx].check"
                            class="home-content-check-img"
                            src="~/assets/images/check.png"
                        />
                        <div style="cursor: pointer" v-else>
                            <Icon name="quill:checkmark" />
                        </div>
                    </button>
                </li>
            </template>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.header-alert {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 312px;
    font-size: 14px;
    position: absolute;
    top: 4%;
    left: -312px;
}

.modalAniStart {
    animation: translateX 0.6s forwards;
}

@keyframes translateX {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(101%);
    }
}

.home-container-box {
    width: 100%;
    height: 100%;
    padding-bottom: 4%;
}
.home-container-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 148px;
    font-size: 48px;
    font-weight: 600;
    color: rgb(105, 121, 248);
    padding-top: 2%;
}
.home-container-search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    height: 100%;
}

.home-container-search > input {
    text-align: center;
    outline: none;
    border-radius: 24px;
    border: 0;
    margin-left: 8px;
    height: 24px;
    background-color: rgb(226, 226, 226);
}

.home-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 4%;
    padding-left: 0;
    margin: 0;
}
.home-content-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 24px;
    padding: 12px;
    font-family: "NanumBarunGothic";
    font-weight: 600;
}
.home-content-box:hover {
    background-color: rgb(165, 165, 165, 0.2);
    border: 0px;
    border-radius: 18px;
}
.home-content-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.home-content-check {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 24px;
}

.home-content-button-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6%;
}
.home-content-check-img {
    width: 20px;
    height: 20px;
}
</style>
