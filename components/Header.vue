<script lang="ts" setup></script>

<template>
    <div class="header-container">
        <div class="header-logo-box">
            <img class="header-logo-img" src="../assets/images/vue_logo.png" />
        </div>
        <div class="header-tab-box">
            <NuxtLink to="/current-todolist" class="nuxt-link"
                >현재 할 일</NuxtLink
            >
            <NuxtLink to="/done-todolist" class="nuxt-link">완료된 일</NuxtLink>
        </div>
        <div class="header-search-box">
            <img class="header-search-img" src="../assets/images/search.png" />
            <input type="text" />
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: "NanumBarunGothic";
    src: url("../assets/fonts/NanumBarunGothic.ttf") format("truetype");
    font-weight: 400;
}
.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 24px;
    padding: 8px;
    position: relative;
    background-color: rgb(105, 121, 248);
}
.header-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4%;
    height: 100%;
}
.header-logo-img {
    width: 64px;
    height: 36px;
}
.header-tab-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 12%;
    font-family: "NanumBarunGothic";
}
.header-search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    height: 100%;
    position: absolute;
    right: 0;
}
.header-search-box > input {
    outline: none;
    border-radius: 8px;
    border-width: 1px;
    margin-left: 8px;
}
.header-search-img {
    width: 18px;
    height: 18px;
}
.nuxt-link {
    color: black;
    text-decoration: none;
}
</style>
