<template>
    <button class="close" @click="showModalfalse()">
        <img src="@/assets/img/svg-modal/linear/add.svg" />
    </button>
    <h3>لطفا دسته بندی موضوعی خود را انتخاب کنید</h3>
    <div class="select">
        <select v-model="tag">
            <option v-for="(item, index) in availableTags" :key="index">
                {{item}}
            </option>
            <!-- <option >Pure CSS Select</option>
            <option >No JS</option>
            <option >Nice!</option> -->
        </select>
    </div>
    <button class="confirmation" @click="onEnter(), showModal = false">تایید</button>
</template>

<script>
export default {
    name: 'modal-new-post',
    props: {
        showModal: {
            type: Boolean,
        }
    },
    data() {
        return {
            tag: '',
            availableTags: [
              'تکنولوژی',
              'کامپیوتر',
              'ادبیات',
              'تاریخی',
              'سیاست',
              'سرگرمی',
              'داستان',
              'برنمه نویسی',
              'هنر',
              'بازاریابی',
              'اقتصاد',
              'روانشناسی',
              'فلسفه',
            ],
        }
    },
    methods:{
        onEnter(){
            this.$emit('on_enter', [this.tag, false]);
            this.tag = '';
        },
        showModalfalse(){
            this.$emit('Modalfalse');
        }
    }
    
}
</script>