<template>
    <div style="display : none"> {{ isLogin }} </div>
    <div class="reply" v-show="replyto">
        <div class="header">
            <p>reply to :</p>
            <div class="cancel" @click="cancel"><img src="@/assets/img/svg-modal/linear/add.svg" /></div>
        </div>
        <div class="name">{{ replyto?.fname }} {{ replyto?.lname }}</div>
        <div class="text-comment">
            <p>{{ replyto?.commenttext }}</p> 
        </div>
    </div>
    <form action="" class="form-comment">
        <div class="fname form-item" v-show="show">
            <label for="fname" class="label">نام*</label>
            <input class="input" type="text" v-model="comment.fname" id="fname" name="fname">
        </div>
        <div class="lname form-item" v-show="show">
            <label for="lname" class="label">نام خانوادگی*</label>
            <input class="input" type="text" id="lname" v-model="comment.lname" name="lname">
        </div>
        <div class="email form-item" v-show="show">
            <label for="email" class="label">ایمیل*</label>
            <input class="input" type="email" id="email" v-model="comment.email" name='email'>
        </div>
        <div class='user-comment form-item'>
            <label for="user-comment" class="label">نظر دادن*</label>
            <textarea class="input" id="user-comment" v-model="comment.text"  name='user-comment'></textarea>
        </div>
        <!-- <div>{{ replyto }}</div> -->
        <div class="submit" @click.prevent="newComment()">
            <p>ثبت نظر</p>
        </div>
    </form>
</template>

<script>
export default {
    name: '',
    props: {
        postid: {
            type: Number,
        },
        replyto: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            show: true,
            comment: {
                fname: '',
                lname: '',
                email: '',
                userId: '',
                text: "",
                articleId: this.postid,
                replyto: null,
                date: '',
            },
            month : [
              'فروردین',
              'اردیبهشت',
              'خرداد',
              'تیر',
              'مرداد',
              'شهریور',
              'مهر',
              'آبان',
              'آذر',
              'دی',
              'بهمن',
              'اسفند',
            ],
            number: [
              '۱',
              '۲',
              '۳',
              '۴',
              '۵',
              '۶',
              '۷',
              '۸',
              '۹',
              '۱۰',
              '۱۱',
              '۱۲',
            ]
        }
    },
    computed: {
        isLogin(){
            if(this.$store.state.login){
                this.show = false;
                return '';
            }
            else{
                this.show = true;
            }
            return '';
        }
    },
    mounted(){
        console.log(this.postid)
    },
    methods: {
        newComment() {
            let now = new Date().toLocaleDateString('fa-IR');
            now = now.split('/');
            let month;
            this.number.forEach((value, index) => {
                if(value == now[1]){
                month = index - 1;
                }
            })
            let date = `${now[2]}
                        ${this.month[month]}
                        ${now[0]}`;
            const data = {
                operation: "newComment",
                csrfToken: this.$store.state.user.csrfToken,
                text: this.comment.text,
                articleId: this.postid,
                replyto: this.replyto?.commentid || null,
                date: '',
                status: 1
            };
            data.date = date;
            this.testtt(JSON.stringify(data))

        },
        cancel(){
            this.$emit('cancel');
            // this.replyto = null
        },
        async testtt(data){
            try {
                let test = await this.$store.dispatch('article/requestPostComment', data);
                this.$emit('add_comment', data);
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.reply{
    opacity: 0.7;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 10px 20px;
    // height: fit-content;
    p{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
        justify-content:space-between;
        height: fit-content;
        .cancel{
            cursor: pointer;
        }
    }
} 
</style>