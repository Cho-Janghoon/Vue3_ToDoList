<script lang="ts" setup>
import { useStore } from "~/stores/store";
const store = useStore();

// const props = defineProps({
//     openModal: {
//         type: Boolean,
//         default: true,
//     },
// });

// const emit = defineEmits<{
//     (e: "openModal-setState", openModal: boolean): void;
// }>();

// const handleModal = () => {
//     emit("openModal-setState", false);
// };

const inputValue = ref("");

const {
    openModal,
    handleModal,
}: { openModal: boolean; handleModal: () => void } = inject("open-modal");

const addToDo = () => {
    if (inputValue.value.length > 0) {
        store.addToDoList(inputValue.value);
        handleModal();
    }
    inputValue.value = "";
};
</script>
<template>
    <div class="modal-container" v-if="openModal">
        <div class="modal-overlay" @click="handleModal"></div>
        <div class="modal-content">
            <div>ADD TO DO</div>
            <div class="modal-content-add">
                <div class="modal-content-contents">
                    <input
                        type="text"
                        onfocus="this.placeholder = ''"
                        v-model="inputValue"
                        placeholder="할 일을 입력해주세요:)"
                        @keyup.enter="addToDo"
                    />
                </div>
            </div>
            <button class="modal-add-btn" @click="addToDo">추가하기</button>
        </div>
    </div>
</template>
<style scoped>
.modal-container,
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-overlay {
    background-color: #ffffff;
    opacity: 0.8;
}
.modal-content {
    position: relative;
    top: 24%;
    left: 38%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0px;
    width: 424px;
    height: 312px;
    background-color: #ffffff;
    border-radius: 24px;
    border: 3px solid rgb(105, 121, 248);
    z-index: 1;
    opacity: 1;
    font-family: "NanumBarunGothic";
    font-weight: 800;
    font-size: 28px;
    color: rgb(105, 121, 248);
}
.modal-content-add {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: "NanumBarunGothic";
    font-weight: 600;
    font-size: 16px;
    color: rgb(105, 121, 248);
}
.modal-content-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 28px;
}
.modal-content-contents {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.modal-content-contents > input {
    text-align: center;
    outline: none;
    border: 0;
    background-color: rgb(226, 226, 226);
    border-radius: 32px;
    width: 58%;
    height: 32px;
}

.modal-add-btn {
    border: 0;
    background-color: transparent;
    font-family: "NanumBarunGothic";
    font-weight: 800;
    font-size: 28px;
    color: rgb(105, 121, 248);
    font-size: 28px;
    cursor: pointer;
}
</style>
