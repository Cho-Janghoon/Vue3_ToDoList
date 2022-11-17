<script lang="ts" setup>
const router = useRouter();
const openModal = ref<boolean>(false);

const handleModal = (): void => {
    openModal.value = !openModal.value;
};
const goHome = () => {
    router.push({ path: "/" });
};

provide("open-modal", { openModal, handleModal });
</script>

<template>
    <modal />
    <div class="header-container">
        <div class="header-logo-box">
            <div @click="goHome" class="header-logo">
                <img
                    class="header-logo-img"
                    src="../assets/images/vue_logo.png"
                />
            </div>
        </div>
        <div class="header-tab-box">
            <NuxtLink to="/current-todolist" class="nuxt-link"
                >현재 할 일</NuxtLink
            >
            <NuxtLink to="/done-todolist" class="nuxt-link">완료된 일</NuxtLink>
            <div class="header-search-box-mobile" @click="handleModal">
                <Icon
                    style="width: 20px; height: 20px"
                    name="ep:circle-plus-filled"
                />
                <div>할 일 추가</div>
            </div>
        </div>
        <button class="header-search-box" @click="handleModal">
            <Icon
                style="width: 20px; height: 20px"
                name="ep:circle-plus-filled"
            />
            <div>할 일 추가</div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/mixin.scss";
@font-face {
    font-family: "NanumBarunGothic";
    src: url("~/assets/fonts/NanumBarunGothic.ttf") format("truetype");
    font-weight: 400;
}

.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 54px;
    position: relative;
    background-color: rgb(105, 121, 248);
}
.header-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 100%;
}

.header-logo {
    display: flex;
    justify-content: center;
    align-items: center;
}
.header-logo-img {
    width: 64px;
    height: 36px;
}
.header-tab-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 18%;
    height: 100%;
    font-family: "NanumBarunGothic";
    font-weight: 600;
}
.nuxt-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36%;
    height: 80%;
    color: black;
    text-decoration: none;
}
.header-search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 80%;
    position: absolute;
    right: 8%;
    border: 0;
    background-color: transparent;
}
.header-search-box > div {
    font-family: "NanumBarunGothic";
    font-weight: 600;
    margin-left: 12px;
}

.header-search-box:hover,
.nuxt-link:hover {
    cursor: pointer;
    background-color: white;
    transition: all ease-in-out 0.1s;
    border-radius: 24px;
}
.header-search-img {
    width: 18px;
    height: 18px;
}

.header-search-box-mobile {
    display: none;
}

@include mobile {
    .header-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 48px;
        background-color: rgb(105, 121, 248);
    }
    .header-container:hover {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 148px;
        background-color: rgb(105, 121, 248);
        transition: all ease-in 0.1s;
    }
    .header-logo-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 36px;
        margin-top: 4px;
    }
    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-logo-img {
        width: 64px;
        height: 36px;
    }

    .header-tab-box {
        display: none;
    }
    .header-tab-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 84px;
        margin-top: 4px;
        font-family: "NanumBarunGothic";
        font-weight: 600;
    }
    .nuxt-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 32px;
        color: black;
        text-decoration: none;
    }
    .header-search-box-mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 32px;
        border: 0;
        background-color: transparent;
    }
    .header-search-box-mobile > div {
        font-family: "NanumBarunGothic";
        font-weight: 600;
        margin-left: 12px;
    }
    .header-search-box {
        display: none;
    }
}
</style>
