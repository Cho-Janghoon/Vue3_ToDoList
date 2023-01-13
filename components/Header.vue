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
    <teleport to="#ant">
        <modal />
    </teleport>
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

    @include mobile {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 48px;

        &:hover {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 148px;
            background-color: rgb(105, 121, 248);
            transition: all ease-in 0.1s;
        }

        &:hover > .header-tab-box {
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
    }
}
.header-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 100%;

    @include mobile {
        width: 100%;
        height: 36px;
        margin-top: 4px;
    }
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
    width: 24%;
    height: 100%;
    font-family: "NanumBarunGothic";
    font-weight: 600;

    @include mobile {
        display: none;
    }
}
.nuxt-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36%;
    height: 80%;
    color: black;
    text-decoration: none;

    @include mobile {
        width: 100%;
        // height: 24px;
    }
}
.header-search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14%;
    height: 80%;
    position: absolute;
    right: 8%;
    border: 0;
    background-color: transparent;

    @include mobile {
        display: none;
    }
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

    @include mobile {
        border-radius: 0;
        height: 100%;
    }
}
.header-search-img {
    width: 18px;
    height: 18px;
}

.header-search-box-mobile {
    display: none;

    @include mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 32px;
        border: 0;
        margin-top: 12px;
        cursor: pointer;

        .header-search-box-mobile > div {
            font-family: "NanumBarunGothic";
            font-weight: 600;
            margin-left: 12px;
        }
    }
}
</style>
