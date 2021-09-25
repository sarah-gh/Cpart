<template>
    <header class="header">
        <div class="header-container">
            <!-- {{ $store.state.user.profileUser['0'] }} -->
            <!-- لاگین شده -->
            <div class="buttons" v-if="showheader && local_login">
                <div>
                    <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                        <button type="button" class="inline-flex items-center justify-between py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                            <img :src="ppp" class='flex-shrink-0 avatar nav-top' alt="user-photo">
                        </button>
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


<script>
const ppl = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'John Cena'
    },
    {
        id: 3,
        name: 'Sylvester Stallone'
    }
]
import headerSearch from '../header-search/header-search.vue'

export default {
    name: 'header-page',
    props: {
        showheader: {
            type: Boolean,
            default: false,
        },
        login: {
            type: Boolean,
            default: false,
        },
        photo: {
            type: String,
        }
    },
    data(){
        return {
            isVisible : false,
            ppl: ppl,
            firstExample: 0,
            secondExample: 0,
            thirdExample: 0,
            fourthExample: 0,
            isVisibleSearch : false,
            local_login: false,
            show_header: false,
            userLogin: {},
            ppp: '',
        }
    },
    beforeMount(){
        this.local_login = this.login;
        this.ppp = this.$store.state.user.profileUser.about["0"].userphoto
    },
    mounted () {
        this.ppp = this.$store.state.user.profileUser.about["0"].userphoto
      },
    methods: {
        thirdExampleSelected() {
            alert('Result: ' + this.thirdExample)
        },
        clickIsVisibleSearch(){
            this.isVisibleSearch = !this.isVisibleSearch;
        },
        log_in(){
            this.local_login = true;
            // console.log('local_login');
            // console.log(this.$emit)
            this.$emit('loginprofile');
        }
    },
    computed: {
        
    },
    components:{
        headerSearch
    },
    watch: { 
        login: function(newVal, oldVal) { // watch it
            this.local_login = newVal;
            // console.log('Prop login changed: ', newVal, ' | was: ', oldVal)
        },
        showheader: function(newVal, oldVal) { // watch it
            this.show_header = newVal;
            // console.log('Prop showheader changed: ', newVal, ' | was: ', oldVal)
        },
    }
}

</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variable";
@import '../../../../assets/sass/_dropdown';


.fade-leave-active {
    transition: opacity .3s ease-in !important;
}
.fade-enter-active{
    transition: opacity .2s ease-out !important;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.sm\:focus\:shadow-outline:focus {
    box-shadow: 0 0 0 3px #1a202c00 !important;
}

.search-container{
    display: flex;
}
.origin-center {
    transform-origin: center;
    //background-color: black;
    margin-top: -8px;
}
.dropdown{
    margin-left: -90px;
    width: 250px;
    text-align: end;
    z-index: 10000;
    //line-height:2;
}

.vector-3 {
    width: 100%;
    height: 1px;
    flex-grow: 0;
    background-color: $black-15;
}

.pt-2 {
    padding-top: .7rem;
}
.transform {
    
    --transform-translate-x: 114px;
    --transform-translate-y: 0;
    //--transform-rotate: 0;
    --transform-skew-x: 0;
    --transform-skew-y: 0;
    --transform-scale-x: 1;
    --transform-scale-y: 1;
    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
}

.dropdown_name{
    //height: 60px;
    padding: 20px 30px;
    font-family: 'bahij-helvetica-roman';
    font-size: 16px;
    font-weight: normal;
    text-align: end;
    opacity: 0.7;
    p{
        color: $dark-grey-blue !important;
    }
    color: $dark-grey-blue !important;
    .full_name{
        padding-bottom: 10px;
        font-family: 'bahij-helvetica-roman';
    }
}

.relative{
    >a{
        padding: 14px 30px;
        display:flex;
        align-items: center;
        justify-content:flex-end;
        img{
            margin-left: 20px;
        }
    }
}

.hover\:text-gray-900:hover {
    color: #1a202c;
}
.hover\:bg-gray-100:hover {
    background-color: $pale-grey;
}

.header{
    height: 65px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
}
.header-container{
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    .buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        .avatar{
            border-radius: 50%;
        }
        .icon{
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: 500px) {
    .header-container{
        width:90%;
        height: 100%;
    }
    .header-container{
        .logo-img{
            img{
                width: 80px;
            }
        }
        .buttons{
            .nav-top{
                margin: auto 7px;
            }
            .avatar{
                width: 30px;
                height: 30px;
            }
            .icon{
                width: 17px;
            }
        }
    }
}

@media only screen and (min-width: 500px) {
    .header-container{
        width:90%;
        height: 100%;
    }
    .header-container{
        .logo-img{
            img{
                width: 100px;
            }
        }
        .buttons{
            .nav-top{
                margin: auto 12.5px;
            }
            .avatar{
                width: 40px;
                height: 40px;
            }
            .icon{
                width: 20px;
            }
        }
    }
}

@media only screen and (min-width: 798px) {
    .header-container{
      width:90%;
      height: 100%;
    }
    .header-container{
      .logo-img{
          img{
              width: 120px;
          }
      }
      .buttons{
          .nav-top{
              margin: auto 12.5px;
          }
          .avatar{
              width: 35px;
              height: 35px;
          }
          .icon{
              width: 24px;
          }
      }
  }
}

@media only screen and (min-width: 992px) {
    .header-container{
      width:90%;
      height: 100%;
    }
    
    .header-container{
      .buttons{
          .nav-top{
              margin: auto 12.5px;
          }
          .avatar{
              width: 40px;
              height: 40px;
          }
      }
  }
}

@media only screen and (min-width: 1200px) {
    .header-container{
      width:1140px;
      height: 100%;
    }
}

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