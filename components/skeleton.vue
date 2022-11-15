<script setup lang="ts"></script>

<template>
    <div class="container">
        <div class="post">
            <div class="avatar"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="btn"></div>
    </div>
</template>

<style lang="scss" scoped>
$base-color: #ddd;
$shine-color: #e8e8e8;
$animation-duration: 1.6s;
$avatar-offset: 52 + 16;

@mixin background-gradient {
    background-image: linear-gradient(
        90deg,
        $base-color 0px,
        $shine-color 40px,
        $base-color 80px
    );
    background-size: 600px;
}

.container {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.post {
    width: 220px;
    height: 80px;
}

.avatar {
    float: left;
    width: 52px;
    height: 52px;
    background-color: #ccc;
    border-radius: 25%;
    margin: 8px;

    @include background-gradient;
    animation: shine-avatar $animation-duration infinite linear;
}

.btn {
    float: left;
    width: 28px;
    height: 28px;
    background-color: #ccc;
    border-radius: 28px;
    margin: 8px;

    @include background-gradient;
    animation: shine-avatar $animation-duration infinite linear;
}

.line {
    float: left;
    width: 140px;
    height: 16px;
    margin-top: 12px;
    border-radius: 7px;

    @include background-gradient;
    animation: shine-lines $animation-duration infinite linear;
}

.avatar + .line {
    margin-top: 11px;
    width: 100px;
}

.line ~ .line {
    background-color: #ddd;
}

@keyframes shine-lines {
    0% {
        background-position: -100px;
    }

    40% {
        background-position: 140px;
    }

    100% {
        background-position: 140px;
    }
}

@keyframes shine-avatar {
    0% {
        background-position: -100px + $avatar-offset;
    }

    40% {
        background-position: 140px + $avatar-offset;
    }

    100% {
        background-position: 140px + $avatar-offset;
    }
}
</style>
