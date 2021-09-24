<template>
    <header class="header">
        <div class="header-container">
            <!-- دکمه ورود -->
            <section class="flexContainer row" v-show="!local_login">
                <router-link to="/authentication/login" class="userLogin">
                    <button class="btn btn-login"> ورود / ثبت نام</button>
                </router-link>
                <div class="logo">
                    <router-link to="/" href="#" class="logo-img">
                        <img src="../../../../assets/img/Group249.svg" alt="logo" /> 
                    </router-link>
                </div>
            </section>
            <div class="logo" v-show="local_login">
                <router-link to="/" class="logo-img">
                    <img src="../../../../assets/img/Group249.svg" class='logo'  alt="logo" /> 
                </router-link>
            </div>
        </div>
    </header>
</template>


<script src="./header-page.js"></script>
<style src="./header-page.scss" lang="scss" scoped></style>

<style lang="scss" scoped>

 @import "../../../../assets/sass/_variable";


    .userLogin{
        .btn-login{
            text-align: center;
            border : 0;
            background-color: $tealish;
            color: white;
            cursor: pointer;
            transition: 0.5s ease all;
            font-family: $font-bold;
            &:hover{
                background-color: #25918b;
            }
        }
    }
    .flexContainer{
        display: flex;
        width: 100%;
        justify-content: space-between;
        .logo{
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            img{
                height: auto;
            }
        }
  }


@media only screen and (max-width: 500px) {
    .userLogin{
      .btn-login{
        text-align: center;
        width: 90px;
        height: 30px;
        padding:0;
        border-radius: 10px;
        font-size: 12px;
        margin-left: 5px;
      }
    }
    .flexContainer .logo{
      margin-right: 5px;
      img{
        width: 90px;
        height: auto;
      }
    }
  }

@media only screen and (min-width: 500px) {
  
    .userLogin{
      .btn-login{
        text-align: center;
        width: 110px;
        height: 40px;
        padding:0;
        border-radius: 10px;
        font-size: 13px;
        margin-left: 0px;
      }
    }
    .flexContainer .logo{
      margin-right: 0px;
      img{
        width: 100px;
        height: auto;
      }
    }
  }

@media only screen and (min-width: 798px) {
 
    .userLogin{
      .btn-login{
        width: 150px;
        height: 40px;
        padding: 4px auto 6px auto;
        font-size: 15px;
      }
    }
    .flexContainer .logo{
      img{
        width: 124px;
      }
    }
  }

  
@media only screen and (min-width: 1200px) {
   
        .userLogin{
            .btn-login{
                width: 165px;
                padding: 4px 36px 6px;
                font-size: 18px;
            }
        }
    }



</style>