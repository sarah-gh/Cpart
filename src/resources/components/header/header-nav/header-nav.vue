<template>
    <div class="header-nav" v-show="show">
        <div style="display : none"> {{ isLogin }} </div>
        <div class="select-tag">
            <h3>موضوع انتخابی</h3>
            <transition  name="enterTag" v-for="(item, index) in tags" :key="index">
                <span class="tags" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                    <transition  name="deleteTag">
                        <img v-if="item[1]" class="delete" src="@/assets/img/svg-header/add_2.svg" @click="deleteTag(index)" />
                    </transition>
                    {{ item[0] }}
                </span>
            </transition>
            <transition  name="fade">
                <input type="text" v-if="add_tag" v-model="tag" placeholder="تگ مورد نظر را با زدن اینتر انتخاب کنید " v-on:keyup.enter="onEnter">
            </transition>
            <div class="plus">
                <img src="@/assets/img/svg-header/add.svg" @click="addTag()" />
            </div>
        </div>
        <div class="router-nav">
            <div class="link">
                <a :class="{ active: !isActive }" @click="navActive2()">
                    <p>
                        دنبال کنندگان
                    </p>
                </a>
                <a :class="{ active: isActive }" @click="navActive1()">
                    <p>
                        پیشنهادی برای شما
                    </p>
                </a>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script src="./header-nav.js"></script>

<style lang="scss" scoped>
@import "../../../../assets/sass/_variables";

.header-nav{
    margin: 30px auto;
    .router-nav{
        margin-top: 50px;
        .link{
            display: flex;
            flex-direction: row-reverse;
            a{
                margin: 0 0 0 40px;
                color: $dark-grey-blue;
                font-size: 18px;
                cursor: pointer;
                padding:0 0 20px 0;
                transition: .5s all ease-out;
            }
            a.active{
                color: $water-blue;
                font-weight: bold;
                font-family: $font-bold;
                border-bottom:1px solid $water-blue;
                transition: .5s all ease-out;
            }
        }
        .line{
            width:100%;
            height: 1px;
            z-index: -1;
            margin-top: -1px;
            background-color: rgba(19, 158, 202, 0.3);
        }
    }
}
.select-tag{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .plus{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #30bfb7;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        cursor: pointer;
    }
    input{
        height: 35px;
        width: 170px;
        font-size:16px;
        border-radius: 10px;
        border: 1px solid #30bfb7;
        margin: 0 10px;
        direction: rtl;
        padding: 0 5px;
        font-family: 'bahij-helvetica-roman';
        &::placeholder {
            font-size:12px;
        }
    }
    .tags{
        margin: 0 7px;
        border-radius: 17px;
        background-color: $pale-grey;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        .delete{
            cursor: pointer;
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }
    }

}

.fade-enter-active, .fade-leave-active {
  animation: animation_input .5s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation: animation_input .5s reverse;

}

.deleteTag-enter-active, .deleteTag-leave-active {
  animation: animation_tag .2s;
  display: block;

}
.deleteTag-enter, .deleteTag-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation: animation_tag .2s reverse;
  display: none;

}

@keyframes animation_input {
  0% {
    transform: scaleX(0);
    width: 0px;
    margin: 0 0px;
    transition: width 1s;
  }
  100% {
    width: 170px;
    margin: 0 10px;
    transition: width 1s;
    transform: scaleX(1);
  }
}

@keyframes animation_tag {
  0% {
    transform: scaleX(0);
    width: 0px;
    margin: 0 ;
    transition: width 1s;
  }
  100% {
    width: 16px;
    margin-right: 5px;
    transition: width 1s;
    transform: scaleX(1);
  }
}
</style>
