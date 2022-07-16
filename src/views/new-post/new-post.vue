<template>
    <main class="modal-vue">
        <div class="main-container">
            <div class="new-post">
                <img src="@/assets/img/svg-new-post/vuesax/linear/edit-2.svg" alt="">
                <h2>ایجاد مطلب جدید</h2>
            </div>
            <section class="post-container">
                <div class="post-img">
                    <div class="post-img_upload">
                        <img src="" />
                        <div class="post-img_btn">
                            <img src="@/assets/img/svg-new-post/vuesax/linear/maximize-circle.svg" />
                            <img src="@/assets/img/svg-new-post/vuesax/linear/gallery-add.svg" />
                        </div>
                    </div>
                </div>
                <div class="post-content">

                    <textarea 
                        class="form-control" 
                        name="textarea" 
                        id="textarea" 
                        required="" 
                        v-model="article.header" 
                        :maxlength="140"
                        placeholder="عنوان مطلب خود را وارد کنید">
                    </textarea>

                    <div class="select-tag modal-vue">
                        <transition  name="enterTag" v-for="(item, index) in tags" :key="index">
                            <span class="tags" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                                <transition  name="deleteTag">
                                    <img v-if="item[1]" class="delete" src="@/assets/img/svg-header/add_2.svg" @click="deleteTag(index)" />
                                </transition>
                                {{ item[0] }}
                            </span>
                        </transition>
                        <!-- <transition  name="fadee">
                            <input type="text" v-if="add_tag" v-model="tag" placeholder="تگ مورد نظر را با زدن اینتر انتخاب کنید " v-on:keyup.enter="onEnter">
                        </transition> -->
                        <div class="tag plus">
                            <img src="@/assets/img/svg-new-post/vuesax/linear/tag-2.svg/" 
                            @click="addTag() , showModal = true" >
                        </div>

                        
                    </div>

                    <span 
                        class="textarea" 
                        role="textbox" 
                        id="span_id"
                        @blur="checkSpan" 
                        contenteditable>
                    </span>

                    <div class="tag">
                        <img src="@/assets/img/svg-new-post/vuesax/linear/gallery-add.svg" />
                    </div>
                </div>
                <button class="add allowed" v-if="allowe" @click="PublishContent()">انتشار مطلب</button>
            </section>
            <div class="overlay" v-if="showModal" @click="showModal = false"></div>
            <!-- modal -->
            <div class="modal" v-if="showModal">
                <button class="close" @click="showModal = false">
                    <img src="@/assets/img/svg-modal/linear/add.svg" />
                </button>
                <h3>لطفا دسته بندی موضوعی خود را انتخاب کنید</h3>
                <div class="select">
                    <select>
                        <option value="1">Pure CSS Select</option>
                        <option value="2">No JS</option>
                        <option value="3">Nice!</option>
                    </select>
                </div>
                <button class="confirmation" @click="showModal = false">تایید</button>
            </div>
        </div>
        
    </main> 
    
</template>

<script src="./new-post.js"></script>
<style src="./new-post.scss" lang="scss" scope></style>

<style lang="scss">
@import "@/assets/sass/_variable";

.modal-vue{
    position: relative;
}
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-vue .modal {
    position: absolute;
    width: 555px;
    z-index: 9999;
    margin: 0 auto;
    padding: 30px 30px 50px 30px ;
    background-color: #fff;
    top: 40%;
    left: 30%;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(40, 57, 79, 0.1);
    border: solid 1px #bae3ef;
    background-color: $white;
    display: flex;
    flex-direction: column;
    h3{
        font-size:18px;
        font-weight: normal;
    }
    .select{
        position: relative;
        select {
            appearance: none;
            outline: 0;
            border: 0;
            box-shadow: none;
            background-image: none;
            cursor: pointer;
        }
        select::-ms-expand {
            display: none;
        }
        select{
            width: 100%;
            height: 50px;
            padding: 10px 16px 11px 13px;
            border-radius: 10px;
            border: solid 1px $water-blue-30;
            background-color: $white-three;
            margin-bottom: 30px;
        }
        &::after {
            content: url("../../assets/img/svg-modal/linear/arrow-down.svg");
            position: absolute;
            top: 11px;
            left: 15px;
            background-color: transparent;
            transition: .25s all ease;
            pointer-events: none;
        }

    }
    .confirmation{
        width: 165px;
        height: 50px;
        flex-grow: 0;
        text-align: center;
        border-radius: 10px;
        background-color: $tealish;
        border: 0px;
        align-self: end;
        color: #fff;
        font-family: $font-bold;
        font-size:18px;
        cursor: pointer;
    }
}


.modal-vue .close{
    background-color:transparent;
    border: 0px;
    font-size:20px;
    align-self: end;
    cursor: pointer;
}

</style>