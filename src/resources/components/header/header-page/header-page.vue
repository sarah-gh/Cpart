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

            <!-- لاگین شده -->

            <div class="buttons" v-if="showheader && local_login">
                <div>
                    <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                        <!-- <router-link :to="'panel/profile/0'" class="profile_user"> -->
                          <div @click="profileuser()" type="button" class="inline-flex items-center justify-between py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                              <img src="data:image/png;base64,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" class='flex-shrink-0 avatar nav-top' alt="user-photo">
                          </div>
                        <!-- </router-link> -->
                        <transition  name="fade" >
                        <div v-show="isVisible" class="absolute pt-2 dropdown">
                            <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                                <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                                <div class="relative">
                                    <div class="dropdown_name">
                                        <p class="full_name">امیرحسین مطلب زاده</p>
                                        <p class="user_name">@amir.h.motalebzadeh</p>
                                    </div>
                                    <div class="vector-3"></div>
                                    <router-link to="/new-post" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        ایجاد مقاله
                                        <img src="../../../../assets/img/svg-header/document-download.svg" />
                                    </router-link>
                                    <div class="vector-3"></div>
                                    <router-link to="/panel/setting" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        تنظیمات حساب کاربری
                                        <img src="../../../../assets/img/svg-header/candle-2.svg" />
                                    </router-link>
                                    <div class="vector-3"></div>
                                    <a href="#" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        خروج از حساب کاربری
                                        <img src="../../../../assets/img/svg-header/logout.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        </transition>
                    </div>
                </div>
                <div>
                    <img src="../../../../assets/img/notification.svg" class='notification nav-top icon' alt="notification">
                </div>
                <div>
                    <router-link to="/panel/bookmark">
                        <img src="../../../../assets/img/save-2.svg" class='save-post nav-top icon' alt="save">
                    </router-link>
                </div>                
                <div class="search-container">
                    <img src="../../../../assets/img/search-normal.svg" class='search nav-top icon' @click="clickIsVisibleSearch()" alt="search">
                    <transition name="fade">
                        <header-search v-if="isVisibleSearch" v-model='thirdExample' :items='ppl' :shows='"name"' :add-btn='true' @selected='thirdExampleSelected'></header-search>
                    </transition>
                </div>   
            </div>
        </div>
    </header>
</template>


<script src="./header-page.js"></script>
<style src="./header-page.scss" lang="scss" scoped></style>

<style lang="scss" scoped>

 @import "../../../../assets/sass/_variable";

.profile_user{
  padding: 0 !important;
}
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