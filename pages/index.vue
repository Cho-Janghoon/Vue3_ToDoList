<script lang="ts" setup>
import { useStore } from "~/stores/store";
const store = useStore();
const toDoList = store.toDoList;
const searchTodoList = store.searchTodoList;

const addToDoListDataState = ref<boolean>(false);
const deleteToDoListDataState = ref<boolean>(false);
const searchKewordState = ref<boolean>(false);

const changeTodoListCheck = (idx: number) => {
    toDoList[idx].check = !toDoList[idx].check;
    store.addDoneToDoList(idx);
};

const searchToDo = (e) => {
    store.searchKeyword(e);
    if (searchTodoList.length === 0) {
        searchKewordState.value = true;
        setTimeout(() => {
            searchKewordState.value = false;
        }, 2000);
    } else searchKewordState.value = false;
};

const deleteToDo = (idx) => {
    store.deleteToDoList(idx);
};

watch(toDoList, async (newQuestion, oldQuestion) => {
    if (toDoList.length > 10) {
        addToDoListDataState.value = true;
        setTimeout(() => {
            addToDoListDataState.value = false;
        }, 2000);
    } else if (toDoList.length < 10) {
        console.log("바뀜");
        deleteToDoListDataState.value = true;
        setTimeout(() => {
            deleteToDoListDataState.value = false;
        }, 2000);
    }
});

onUpdated(() => {
    console.log("updated");
});

onUnmounted(() => {
    console.log("unmounted");
});

onMounted(() => {
    console.log("mounted");
});
</script>

<template>
    <div class="home-container-box">
        <div class="header-alert" v-if="addToDoListDataState">
            <v-alert type="success">TODOLIST가 추가 되었습니다.</v-alert>
        </div>
        <div class="header-alert" v-if="deleteToDoListDataState">
            <v-alert type="error">TODOLIST가 삭제 되었습니다.</v-alert>
        </div>
        <div class="header-alert" v-if="searchKewordState">
            <v-alert type="warning">키워드가 존재하지 않습니다.</v-alert>
        </div>
        <div class="home-container-title">
            <p>To Do List</p>
            <div class="home-container-search">
                <Icon name="quill:search" style="width: 24px; height: 24px" />
                <input
                    type="text"
                    @keyup.enter="searchToDo"
                    placeholder="키워드를 입력하세요"
                />
            </div>
        </div>
        <div class="home-container">
            <template v-if="searchTodoList.length === 0">
                <div v-for="(el, idx) in toDoList" class="home-content-box">
                    <div class="home-content-title">
                        <div
                            style="color: rgb(105, 121, 248); margin-right: 8px"
                        >
                            {{ idx }}.
                        </div>
                        <div style="margin-right: 8px">{{ el.do }}</div>
                        <div style="font-size: 8px">{{ el.date }}</div>
                        <div
                            style="cursor: pointer; margin-left: 12px"
                            @click="deleteToDo(idx)"
                        >
                            <Icon name="ep:delete" />
                        </div>
                    </div>
                    <div
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
                    </div>
                </div>
            </template>
            <template v-else-if="searchTodoList.length > 0">
                <div
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
                    <div
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
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-alert {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    font-family: "NanumBarunGothic";
    font-weight: 600;
    font-size: 14px;
    position: absolute;
    top: 4%;
    left: 2px;
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
    font-family: "NanumBarunGothic";
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
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(165, 165, 165);
    margin-left: 8px;
    height: 20px;
}

.home-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 4%;
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
    width: 24px;
    height: 24px;
    text-align: center;
}
.home-content-check-img {
    width: 20px;
    height: 20px;
}
</style>
