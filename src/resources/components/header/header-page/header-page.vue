<template>
    <header class="header">
        <div class="header-container">
            <!-- دکمه ورود -->
            <section class="flexContainer row" v-show="!$store.state.login">
                <router-link to="/authentication/login" class="userLogin">
                    <button class="btn btn-login"> ورود / ثبت نام</button>
                </router-link>
                <div class="logo">

                    <router-link to="/" href="#" class="logo-img">
                        <img src="../../../../assets/img/Group249.svg" alt="logo" />
                    </router-link>
                </div>
            </section>
            <div style="display : none"> {{ isLogin }} </div>
            <!-- لاگین شده -->
            <div class="logo" v-show="$store.state.login">
                <router-link to="/" class="logo-img">
                    <img src="../../../../assets/img/Group249.svg" class='logo'  alt="logo" />
                </router-link>
            </div>

            <div class="buttons" v-show="$store.state.login">
                <div>
                    <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                        <!-- <router-link :to="'panel/profile/0'" class="profile_user"> -->
                        <div class="avatar_img">
                          <div @click="profileuser()" type="button" class=" inline-flex items-center justify-between py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                              <img :src="userLogin.userphoto" class='flex-shrink-0 avatar nav-top' alt="user-photo">
                          </div>
                        </div>
                        <!-- </router-link> -->
                        <transition  name="fade" >
                        <div v-show="isVisible" class="absolute pt-2 dropdown">
                            <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                                <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"></div>
                                <div class="relative">
                                    <div class="dropdown_name">
                                        <p class="full_name">{{ userLogin.fname }} {{ userLogin.lname }}</p>
                                        <p class="user_name">@{{ userLogin.username }}</p>
                                    </div>
                                    <div class="vector-3"></div>
                                    <router-link to="/panel/new-post" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        ایجاد مقاله
                                        <img src="../../../../assets/img/svg-header/document-download.svg" />
                                    </router-link>
                                    <div class="vector-3"></div>
                                    <router-link to="/panel/setting" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        تنظیمات حساب کاربری
                                        <img src="../../../../assets/img/svg-header/candle-2.svg" />
                                    </router-link>
                                    <div class="vector-3"></div>
                                    <a href="#" @click="exit" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
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
                        <header-search v-if="isVisibleSearch" v-model='thirdExample' :items='ppp' :shows='"name"' :add-btn='true' @selected='thirdExampleSelected'></header-search>
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
