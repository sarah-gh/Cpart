<template>
    <main class="modal-vue">
        <div class="main-container">
            <div class="new-post">
                <img src="@/assets/img/svg-new-post/vuesax/linear/edit-2.svg" alt="">
                <h2>ایجاد مطلب جدید</h2>
            </div>
            <section class="new-post-container">
                <post-upload @addImage="add_image" v-if="publish" :location="'header'"></post-upload>
                <div class="post-content">

                    <textarea
                        class="form-control textarea-header"
                        name="textarea"
                        id="textarea"
                        required=""
                        v-model="article.header"
                        :maxlength="140"
                        placeholder="عنوان مطلب خود را وارد کنید*">
                    </textarea>
                    <div class="upload-file">
                        <label for="inputFilePDF">
                            {{ fileName || 'فایل مقاله خود را وارد کنید*' }}
                        </label>
                        <input type="file"
                            v-on:change="convertToBase64" accept=".pdf"
                            id="inputFilePDF" name="inputFilePDF"
                            >
                    </div>
                    <div class="input-price">
                        <label>
                            مبلغ مورد نظر برای مقاله را وارد کنید (تومان)*
                        </label>
                        <input type="text" v-model="article.price" @keydown="checkSpan" @input="validatePrice" placeholder="لطفاً فقط از اعداد استفاده کنید">
                    </div>
                    <div class="select-tag modal-vue">
                        <transition  name="enterTag" v-for="(item, index) in tags" :key="index">
                            <span class="tags" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                                <transition  name="deleteTag">
                                    <img v-if="item[1]" class="delete" src="@/assets/img/svg-header/add_2.svg" @click="deleteTag(index)" />
                                </transition>
                                {{ item[0] }}
                            </span>
                        </transition>
                        <div class="tag plus">
                            <img src="@/assets/img/svg-new-post/vuesax/linear/tag-2.svg/"
                            @click="showModal = true" >
                        </div>
                        <span v-show="error_tag">بیشتر از ۳ تگ نمیتوانید اضافه کنید</span>

                    </div>

                    <span
                        class="textarea"
                        role="textbox"
                        id="span_id"
                        @blur="checkSpan"
                        @keydown="checkSpan"
                        contenteditable>
                    </span>

                    <div class="tag" @click="imgfooter = true" v-if="!imgfooter">
                        <img src="@/assets/img/svg-new-post/vuesax/linear/gallery-add.svg" />
                    </div>
                    <!-- -------footer img-------- -->
                    <post-upload v-if="imgfooter" @addImage="add_image" :location="'footer'"></post-upload>
                </div>
                <button class="add allowed" :class="{notallowed : !allowed}" @click="PublishContent()">
                    <span v-show="!published">
                        انتشار مطلب
                    </span>
                    <div class="load_btn" v-show="published"></div>
                </button>
            </section>
            <div class="overlay" v-if="showModal" @click="showModal = false"></div>
            <!-- modal -->
            <div class="modal" v-if="showModal">
                <modal-new-post @Modalfalse="showModal = false" @on_enter="onEnterModal" :showModal="showModal"></modal-new-post>
            </div>
        </div>
    </main>

</template>

<script src="./new-post.js"></script>
<style src="./new-post.scss" lang="scss" scope></style>

<!--///////////////////////////////////////////////////////////// -->
<style lang="scss">
@import "@/assets/sass/_variables";

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
    top: 60%;
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
            font-family: $font-roman;
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
        opacity: 1;
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

input[type="file"] {
  display: none;
}

.content {
  display: flex;
  justify-content: space-between;
}

.cropper-area {
  width: 100%;
}

.actions {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  .crop{
      background-color: #dfe9ec;
      border-radius: 15px;
      padding: 3px 10px;
      opacity: 0.7;
  }
}

.actions a {
  display: inline-block;
  background: transparent;
  color: $tealish;
  opacity: 0.6;
  font-size:15px;
  text-decoration: none;
  border-radius: 3px;
  margin-bottom: 1rem;
  &:hover{
      opacity: 1;
  }
}

textarea {
  width: 100%;
  height: 100px;
}

.preview-area {
  width: 307px;
}

.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}

.preview-area p:last-of-type {
  margin-top: 1rem;
}

.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}

.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}

.cropped-image{
    width: 100%;
}
.cropped-image img {
  width: 100%;
}
</style>
