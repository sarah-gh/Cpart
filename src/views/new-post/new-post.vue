<template>
    <main>
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

                    <div class="select-tag">
                        <transition  name="enterTag" v-for="(item, index) in tags" :key="index">
                            <span class="tags" v-on:mouseover="mouseover(index)" v-on:mouseleave="mouseleave(index)">
                                <transition  name="deleteTag">
                                    <img v-if="item[1]" class="delete" src="@/assets/img/svg-header/add_2.svg" @click="deleteTag(index)" />
                                </transition>
                                {{ item[0] }}
                            </span>
                        </transition>
                        <transition  name="fadee">
                            <input type="text" v-if="add_tag" v-model="tag" placeholder="تگ مورد نظر را با زدن اینتر انتخاب کنید " v-on:keyup.enter="onEnter">
                        </transition>
                        <div class="tag plus">
                            <img src="@/assets/img/svg-new-post/vuesax/linear/tag-2.svg/" @click="addTag()">
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
        </div>
        
    </main> 
</template>

<script src="./new-post.js"></script>
<style src="./new-post.scss" lang="scss" scope></style>