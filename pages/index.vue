<script lang="ts" setup>
const toDoList = reactive([
    { do: "read vue docs", date: "2022-10-28" },
    { do: "fanding web tour", date: "2022-10-29" },
    { do: "ready holloween costume", date: "2022-10-30" },
    { do: "read welcome docs", date: "2022-10-31" },
    { do: "weekly quest", date: "2022-11-01" },
    { do: "first project", date: "2022-11-02" },
    { do: "second project", date: "2022-11-03" },
    { do: "third project", date: "2022-11-04" },
    { do: "go trip", date: "2022-11-05" },
    { do: "study vue", date: "2022-11-06" },
]);

const checkList = ref(true);
const changeCheckRef = () => {
    checkList.value = !checkList.value;
};

// const { data, pending, error } = useAsyncData(() => {
//   return getData();
// });

// onUnmounted(() => {
//   console.log("unmounted");
// });

// onMounted(() => {
//   console.log("mounted");
// });
</script>

<template>
    <div class="home-container">
        <div class="home-content-box" v-for="(el, idx) in toDoList">
            <div class="home-content-title">
                <div>{{ idx }}.</div>
                <div>{{ el.do }}</div>
            </div>
            <div class="home-content-check" @click="changeCheckRef">
                <img
                    v-if="checkList"
                    class="home-content-check-img"
                    src="~/assets/images/check.png"
                />
                <img
                    v-else
                    class="home-content-check-img"
                    src="~/assets/images/vue_logo.png"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 8%;
}
.home-content-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 24px;
    border-bottom: solid 1px rgb(105, 121, 248);
    padding: 12px;
}
.home-content-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.home-content-check {
    width: 24px;
    height: 24px;
    text-align: center;
}
.home-content-check-img {
    width: 20px;
    height: 20px;
}
</style>
