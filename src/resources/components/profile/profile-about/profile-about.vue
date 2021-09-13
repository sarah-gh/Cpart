<template>
    <h2>
        مجتبی محمدی پناه
    </h2>
    <p>
        کنترل کننده زیردریایی طراحی شده توسط دانشجویان دانشگاه صنعتی شریف برای ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار ارتش جمهوری اسلامی ایران در بین ۱۰ زیردریایی برتر جهان قرار گرفت.
    </p>
    <ul class="">
        <li>
            <img src="@/assets/img/svg-profile/sms.svg" />
            <a>a.h.motaleb@gmail.com</a>
        </li>
        <li>
            <img src="@/assets/img/svg-profile/whatsapp.svg" />
            <a>whatsapp.com/a.h.motalleb</a>
        </li>
        <li>
            <img src="@/assets/img/svg-profile/instagram.svg" />
            <a>instagram.com/a.h.motalleb</a>
        </li>
    </ul>
</template>

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