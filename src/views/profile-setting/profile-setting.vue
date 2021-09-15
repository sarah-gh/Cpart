<template>
    <main class="setting">
        <div class="setting-header container">
            <img src="@/assets/img/svg-profile-setting/linear/candle-2.svg" alt="">
            <h2>تنظیمات حساب کاربری</h2>
        </div>
        
        <section class="container">
            <div class='about'>
                    <span>درباره شما</span>
            </div>
            <div class="headerLine">
                <div class="line"></div>
            </div>
            <div class="part" v-if="!edit[0]">
                <img class="avatar_img" src="@/assets/img/svg-profile-setting/340558.jpeg"/>
                <div class="content part_about">
                    <div class="fname texts">
                        <p class="lable">نام</p>
                        <p class="text">{{ user.fname }}</p>
                    </div>
                    <div class="lname texts">
                        <p class="lable">نام خانوادگی</p>
                        <p class="text">{{ user.lname }}</p>
                    </div>
                    <div class="short-description texts">
                        <p class="lable">شرح کوتاه</p>
                        <p class="text">{{ user.shortdescreption }}</p>
                    </div>
                </div>
                <button class="edit" @click="editField(0)" :class="{ notShow: !show }" >
                    <img src="@/assets/img/svg-profile-setting/linear/edit_3.svg"/>
                </button>
            </div>
            <Form @submit="onSubmit" :validation-schema="schema" class="part" v-if="edit[0]" >
                <div class="avatar upload">
                    <!-- <img class="avatar_img" src="@/assets/img/svg-profile-setting/340558.jpeg"/> -->
                    <img :style="style" class="avatar_img" :src="imageUrl" v-if="imageUrl">
                    <div class="control-file-upload">
                        <label class="button is-danger">
                            <img src="@/assets/img/svg-profile-setting/bold/gallery.svg" />
                            <input type="file"  @click="onFileChange" accept="image/*">
                        </label>
                    </div>
                </div>
                <div class="content part_about">
                    <div class="fname texts">
                        <p class="lable">نام</p>
                        <Field
                        name="fname"
                        type="text"
                        :value="user.fname"
                        placeholder="Your Name"
                        />
                        <ErrorMessage name="fname"><span class="span_error">باید حداقل ۳ حرف باشد </span></ErrorMessage>
                    </div>
                    <div class="lname texts">
                        <p class="lable">نام خانوادگی</p>
                        <Field
                        name="lname"
                        type="text"
                        :value="user.lname"
                        placeholder="Your Name"
                        />
                        <ErrorMessage name="lname"><span class="span_error"> باید حداقل ۳ حرف باشد </span></ErrorMessage>
                    </div>
                    <div class="short-description texts">
                        <p class="lable">شرح کوتاه</p>
                        <Field
                        name="shortdescreption"
                        type="text"
                        :value="user.shortdescreption"
                        placeholder="Your email address"
                        />
                        <ErrorMessage name="shortdescreption"><span class="span_error"> باید حداقل ۳ و حداکثر ۵۰ کاراکتر باشد </span></ErrorMessage>
                    </div>
                </div>
                <button class="edit" type="submit" >
                    <img src="@/assets/img/svg-profile-setting/linear/edit_3.svg"/>
                </button>
            </Form>
            <div class="headerLine">
                <div class="line"></div>
            </div>
            <div class="part" v-if="!edit[1]">
                <div class="content">
                    <div class="part_description">
                        <h3>شرح <span class="number">حداکثر ۱۶۰ کاراکتر</span></h3>
                        <p class="description"> {{ user.description }} </p>
                    </div>
                </div>
                <button class="edit" :class="{ notShow: !show }" @click="editField(1)">
                    <img src="@/assets/img/svg-profile-setting/linear/edit_3.svg"/>
                </button>
            </div>
            <form class="part" v-if="edit[1]" >
                <div class="content">
                    <div class="part_description">
                        <h3>شرح <span class="counter number">{{ user.description.length }} / 160</span></h3>
                        <textarea 
                            class="form-control" 
                            name="textarea" 
                            id="textarea" 
                            required="" 
                            v-model="user.description" 
                            :maxlength="160">
                        </textarea>
                    </div>
                </div>
                <button class="edit" type="submit" @click.prevent="subField(1)" >
                    <img src="@/assets/img/svg-profile-setting/linear/edit_3.svg"/>
                </button>
            </form>
            <div class="headerLine">
                <div class="line"></div>
            </div>
            <div class="part part_links">
                    <div class="links">
                        <p class="lable">نام کاربری و لینک</p>
                        <ul class="text">
                            <li class="link">
                                <a>{{ user.username }}@</a>
                            </li>
                            <li class="link">
                                <a>http://helium.ir/@{{ user.username }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="links">
                        <p class="lable">لینک های شما</p>
                        <ul class="text">
                            <li class="link">
                                <img src="@/assets/img/svg-profile-setting/outline/sms.svg"/>
                                <a>{{ user.email }}</a>
                            </li>
                            <li class="link">
                                <img src="@/assets/img/svg-profile-setting/outline/whatsapp_2.svg"/>
                                <a>whatsapp.com/{{ user.whatsapp }}</a>
                            </li>
                            <li class="link">
                                <img src="@/assets/img/svg-profile-setting/outline/instagram.svg"/>
                                <a>instagram.com/{{ user.instagram }}</a>
                            </li>
                        </ul>
                    </div>
                <button class="edit" :class="{ notShow: !show }">
                    <img src="@/assets/img/svg-profile-setting/linear/edit_3.svg"/>
                </button>
            </div>
            <div class='about'>
                    <span>دنبال کنندگان</span>
            </div>
            <div class="headerLine">
                <div class="line"></div>
            </div>
            <div class="part">
                    <div class="security">
                        <p class="lable">حریم شخصی</p>
                        <div class="text">
                            <p>افراد برای دنبال کردن شما نیاز به تایید شما دارند</p>
                            <div>
                                <img />
                            </div>
                        </div>
                    </div>
               
                    <div class="security">
                        <p class="lable">استخراج دنبال کنندگان</p>
                        <div class="text">
                            <p>از افراد دنبال کننده خود یک لیست تهیه کنید</p>
                            <img />
                        </div>
                    </div>
            </div>
            <div class='about'>
                    <span>شخصی سازی</span>
            </div>
            <div class="headerLine">
                <div class="line"></div>
            </div>
            <div class="part">
                    <div class="security">
                        <p class="lable">فونت</p>
                        <div class="text">
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                    </div>
                    <div class="security">
                        <p class="lable">رنگ فونت</p>
                        <div class="text">
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                    </div>
                    <div class="security">
                        <p class="lable">سایز فونت</p>
                        <div class="text">
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </main> 
</template>

<script src="./profile-setting.js"></script>
<style lang="scss" scoped src="./profile-setting.scss"></style>