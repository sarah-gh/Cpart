<template>
    <h2>
        {{ about.fname }} {{ about.lname }}
    </h2>
    <p> {{ about.description }} </p>
    <ul class="">
        <li>
            <img src="@/assets/img/svg-profile/sms.svg" />
            <a> {{ about.email }} </a>
        </li>
        <li>
            <img src="@/assets/img/svg-profile/whatsapp.svg" />
            <a> {{ about.whatsapp }} </a>
        </li>
        <li>
            <img src="@/assets/img/svg-profile/instagram.svg" />
            <a> {{ about.instagram }} </a>
        </li>
    </ul>
</template>
<script src="./profile-about.js"></script>

<style lang="scss" scoped>
@import "@/assets/sass/_variable";

h2{
    font-size: 16px;
    font-family: $font-bold;
    color: $dark-grey-blue;
}
p{
    width: 65%;
    font-size: 16px;
    margin-top: 15px;
    font-family: $font-roman;
    color: $dark-grey-blue;
}
ul{
    margin-top: 40px;
    color: $dark-grey-blue;
    li{
        display: flex;
        flex-direction:row;
        align-items: center;
        img{
            margin-left: 12px;
        }
    }
}
</style>