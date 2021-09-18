<template>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <router-link to="/" class="logo-img">
                    <img src="../../../../assets/img/Group249.svg" class='logo'  alt="logo" /> 
                </router-link>
            </div>
            <div class="buttons" v-if="showheader">
                <div>
                    <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
                        <button type="button" class="inline-flex items-center justify-between py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
                            <img src="../../../../assets/img/svg-profile-setting/340558.jpeg" class='flex-shrink-0 avatar nav-top' alt="user-photo">
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
                                    <router-link to="/new-post" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
                                        ایجاد مقاله
                                        <img src="../../../../assets/img/svg-header/document-download.svg" />
                                    </router-link>
                                    <div class="vector-3"></div>
                                    <router-link to="/setting" class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out">
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
                    <router-link to="/bookmark">
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