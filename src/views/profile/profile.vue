<template>
    <!-- <div style="display : none"> {{ changedRoute }} </div> -->
    <section class="container" v-if="!load">
        <section class="load">
            <div class="load2">
                <hr/><hr/><hr/><hr/>
            </div>
        </section>
    </section>
    <section class="post-container container load connection" v-if="!connection">
        <p>
            ارتباط با سرور قطع شده است. لطفا اتصال اینترنت خود را بررسی کنید
        </p>
    </section>
    <section class="container" v-if="load && connection">
        <profile-header :user="userProfile" @ModalTrue="ModalTrue" ></profile-header>
        <profile-nav @clicked="onClickNav"></profile-nav>
    </section>
    <main v-if="load && connection">
        <section class="post-container container" v-if="navigate[0]">
            <article class="about" >
                <profile-about :about="about"></profile-about>
            </article>
        </section>
        <section class="post-container container" v-if="navigate[1]">
            <article class="card" v-for="(item,index) in userposts" :key="index">
              <profile-post :post="item"></profile-post>
            </article>
        </section>
        <section class="follow-container container" v-if="navigate[2]">
            <article class="followers" v-for="(item,index) in follows" :key="index">
                <profile-follower :follow="item" @click_profile="clickProfile"></profile-follower>
            </article>
        </section>
    </main>
    <div id="wrapper" class="main main-modal">
        <div class="overlay" v-if="showModal" @click="showModal = false"></div>
        <div class="modal" v-if="showModal">
            <modal-dialog @Modalfalse="showModal = false">
                <header>
                    <slot name="modal-header">
                        <h3>افزایش موجودی</h3>
                    </slot>
                </header>
                <div class="main">
                    <slot name="modal-main">
                        <div class="input-form flex justify-center flex-col">
                            <label>میزان افزایش موجودی مورد نظر را وارد کنید</label>
                            <input type="text" v-model="credit"  placeholder="لطفاً فقط از اعداد استفاده کنید" @input="validatePrice">
                        </div>
                    </slot>
                </div>
                <footer>
                    <slot name="modal-footer">
                        <button class="confirmation" @click="increaseCredit">افزایش</button>
                    </slot>
                </footer>
            </modal-dialog>
        </div>
    </div>
</template>

<script src="./profile.js"></script>

<style src="./profile.scss" scope lang="scss"></style>
