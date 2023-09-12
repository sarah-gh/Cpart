<template>
    <div class="profile-header">
        <img class="profile-header_img" src="@/assets/img/profile-background.png" alt="background">
        <div class="user-profile">
            <div class="user-info">
                <img class="user-profile_img" :src="userphoto" alt="user-photo">
                <button class="block-user" v-if="this.$store.state.user.profileUser.about['0'].role == 'admin' && not_user && !userBlocked"
                    @click="blockUser(user.userid)">
                    مسدودسازی کاربر
                </button>
                <button class="block-user" v-if="this.$store.state.user.profileUser.about['0'].role == 'admin' && not_user && userBlocked"
                    @click="unblockUser(user.userid)">
                    رفع مسدودی کاربر
                </button>
                <div class="user-info-text">
                    <div class="user-name">
                        <h2 class="name">{{ user.name }}</h2>
                        <span class="circle"></span>
                        <p>{{ user.followers }} دنبال کننده</p>
                        <span v-if="!not_user" class="circle"></span>
                        <p v-if="!not_user">موجودی: {{ user.credit }} تومان</p>
                    </div>
                    <p class="user-skill">{{ user.shortdescription }}</p>
                </div>
            </div>
            <div class="buttons">
                <button class="visit-wbesite">
                    <p>مشاهده وبسایت</p>
                    <img src="@/assets/img/export.svg" alt="">
                </button>
                <button class="visit-wbesite" @click="ModalTrue" v-show="!not_user">
                    <p>افزایش موجودی</p>
                </button>
                <!-- <button class="follow-user" v-show="not_user">
                    دنبال کردن
                    <img src="@/assets/img/svg-profile/add.svg" alt="">
                </button> -->
                <button class="follow-user" v-show="not_user && (!user.isFollowing)" @click="followUser">
                    دنبال کردن
                    <img src="@/assets/img/svg-profile/add.svg" alt="">
                </button>
                <button class="follow-user followed" v-show="not_user && (user.isFollowing)" @click="followUser">دنبال
                    شده</button>
            </div>
        </div>
    </div>
</template>

<script src="./profile-header.js"></script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variables";

.profile-header {
    position: relative;

    &_img {
        width: 100%;
    }
}

.block-user {
    position: absolute;
    left: 10px;
    top: 10px;
    width: fit-content;
    padding: 0 10px;
    height: 40px;
    text-align: center;
    border: 0;
    background-color: #903838;
    color: white;
    cursor: pointer;
    transition: 0.5s ease all;
    font-family: $font-bold;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 20px;

    &:hover {
        background-color: #7e2727;
    }

}

.user-profile {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.buttons {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;

    button {
        width: 165px;
        height: 40px;
        text-align: center;
        border: 0;
        background-color: $tealish;
        color: white;
        cursor: pointer;
        transition: 0.5s ease all;
        font-family: $font-bold;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-right: 20px;

        &:hover {
            background-color: #25918b;
        }

    }

    .visit-wbesite {
        background-color: #fff;
        border: solid 2px $tealish;
        color: $tealish;

        &:hover {
            color: #25918b;
            background-color: #fff;
            border: solid 2px #25918b;
        }

        img {
            margin: 0 10px 0 0;
        }
    }
}

.user-info {
    display: flex;
    flex-direction: row-reverse;

    .user-info-text {
        padding: 20px 30px 0 0;
        direction: rtl;
        color: $dark-grey-blue;
        font-size: 16px;
        font-family: 'bahij-helvetica-roman';

        .user-name {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;

            .name {
                font-family: $font-bold;
                font-size: 16px;
            }

            .circle {
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: $dark-grey-blue;
                margin: 0 15px;
            }
        }

        .user-skill {
            margin-top: 25px;
        }
    }
}

.user-profile_img {
    width: 165px;
    margin-top: -82px;
    height: 165px;
    border-radius: 30px;
    margin-right: 28px;
}</style>
