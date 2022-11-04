<script lang="ts" setup>
const router = useRouter();
const toPagesRouter = (routerInput) => {
    router.push({ path: `${routerInput}` });
};
</script>
<template>
    <div class="footer-container">
        <div class="footer-container-info-box">
            <img
                class="footer-container-logo-img"
                src="~/assets/images/fanding_logo.png"
            />
            <div class="footer-container-info">
                <div>
                    <p>EMAIL: ant@fanding.kr</p>
                    <p>ADDRESS: 서울시 강남구 선릉로92길 36 3-4층</p>
                    <p>
                        3-4F, 36, Seolleung-ro 92-gil, Gangnam-gu, Seoul,
                        Republic of Korea
                    </p>
                </div>
                <div>
                    <p>(주)팬딩 / 대표이사: 앤트</p>
                    <p>사업자등록번호: 111-11-11111</p>
                </div>
            </div>
        </div>
        <div class="footer-container-info-box__page">
            <div>For Pages</div>
            <div
                style="
                    margin-top: 8%;
                    font-size: 14px;
                    color: rgb(105, 121, 248);
                "
                @click="toPagesRouter('/current-todolist')"
            >
                현재 할 일
            </div>
            <div
                style="
                    margin-top: 8%;
                    font-size: 14px;
                    color: rgb(105, 121, 248);
                "
                @click="toPagesRouter('/done-todolist')"
            >
                완료된 일
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 294px;
    background-color: rgb(245, 245, 245);
    position: absolute;
    bottom: 0;
    padding: 2%;
}
.footer-container-info-box {
    display: flex;
    flex-direction: column;
    width: 24%;
    height: 100%;
    font-size: 12px;
    font-family: "NanumBarunGothic";
    font-weight: 600;
    padding-top: 2%;

    &__page {
        display: flex;
        flex-direction: column;
        width: 24%;
        height: 100%;
        font-size: 18px;
        font-family: "NanumBarunGothic";
        font-weight: 600;
        padding-top: 2%;
    }
}
.footer-container-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4px;
}
.footer-container-logo-img {
    width: 48px;
    height: 48px;
}
</style>
