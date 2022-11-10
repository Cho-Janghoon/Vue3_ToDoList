<script lang="ts" setup>
import { useStore } from "~/stores/store";
const store = useStore();
const toDoList = store.toDoList;
let currentToDOList = reactive([]);

watchEffect(() => {
    const filterCheckToDo = toDoList.filter((el) => {
        return el.check === false;
    });
    currentToDOList = [...filterCheckToDo];
});
</script>
<template>
    <div class="home-container-box">
        <div class="home-container-title">
            <p>Current To Do List</p>
        </div>
        <div class="home-container">
            <div v-for="(el, idx) in currentToDOList" class="home-content-box">
                <div class="home-content-title">
                    <div style="color: rgb(105, 121, 248); margin-right: 8px">
                        {{ idx + 1 }}.
                    </div>
                    <div style="margin-right: 8px">{{ el.do }}</div>
                    <div style="font-size: 8px">{{ el.date }}</div>
                </div>
                <button class="home-content-check">
                    <div style="cursor: pointer">
                        <Icon name="quill:checkmark" />
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 24px;
}
.home-content-check-img {
    width: 20px;
    height: 20px;
}
</style>
