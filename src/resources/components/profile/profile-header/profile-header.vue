<template>
  <div class="profile-header">
        <img class="profile-header_img" src="@/assets/img/profile-background.png" alt="background">
        <div class="user-profile">
            <div class="user-info">
                <img class="user-profile_img" src="@/assets/img/svg-profile/Rectangle21.png" alt="user-photo">
                <div class="user-info-text">
                    <div class="user-name">
                        <h2 class="name">مجتبی محمدی پناه</h2>
                        <span class="circle"></span>
                        <p>۲/۵ هزار دنبال کننده</p>
                    </div>
                    <p class="user-skill">طراح اپلیکیشن و مدرس برنامه نویسی کامپیوتر</p>
                </div>
            </div>
            <div class="buttons">
                <button class="visit-wbesite">
                    <p>مشاهده وبسایت</p>
                    <img src="@/assets/img/export.svg" alt="">    
                </button>
                <button class="follow-user">
                    دنبال کردن 
                    <img src="@/assets/img/svg-profile/add.svg" alt=""> 
                </button>
            </div>
        </div>
  </div>
</template>

<script src="./profile-header.js"></script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variable";

.profile-header{
    &_img{
        width:100%;
    }
}

.user-profile{
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
}
.buttons{
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    button{
        width: 165px;
        height: 40px;
        text-align: center;
        border : 0;
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
        &:hover{
            background-color: #25918b;
        }
        
    }
    .visit-wbesite{
        background-color: #fff;
        border: solid 2px $tealish;
        color: $tealish;
        &:hover{
            color: #25918b;
            background-color: #fff;
            border: solid 2px #25918b;
        }
        img{
            margin: 0 10px 0 0;
        }
    }
}
.user-info{
    display: flex;
    flex-direction: row-reverse;
    .user-info-text{
        padding: 20px 30px 0 0;
        direction: rtl;
        color: $dark-grey-blue;
        font-size: 16px;
        font-family: 'bahij-helvetica-roman';
        .user-name{
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            .name{
                font-family: $font-bold;
                font-size: 16px;
            }
            .circle{
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: $dark-grey-blue;
                margin: 0 15px;
            }
        }
        .user-skill{
            margin-top: 25px;
        }
    }
}

.user-profile_img{
    width: 165px;
    margin-top: -82px;
}

</style>