<template>
    <div class="router-nav">
        <div class="link">
            <a v-for="(item, x) in navigator" :key="x" :class="[ item[1] ? 'active' : '']" @click="navActive(x)">
                <p>
                    {{ item[0] }}
                </p>
            </a>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "profile-nav",
    data() {
        return {
            navigator: [
                [
                    'درباره',
                    false,
                ],
                [
                    'مقالات',
                    true,
                ],
                [
                    'دنبال کننده ها',
                    false
                ],
                [
                    'شبکه های اجتماعی',
                    false
                ]
            ]
        }
    },
    methods: {
        navActive(x){
            console.log(x);
            for(let i = 0; i < this.navigator.length; i++){
                if(i === x){
                    this.navigator[x][1] = true;
                }
                else {
                    this.navigator[x][1] = false;
                }
                console.log(this.navigator[x][1]);
            }
            this.$emit('clicked', this.navigator[x][0])
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../../../../assets/sass/_variable";

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
                font-family: 'bahij-helvetica-bold';
                border-bottom:1px solid $water-blue;
                transition: .5s all ease-out;
            }
        }
        .line{
            width:100%;
            height: 1px;
            background-color: rgba(19, 158, 202, 0.3);
        }
    }
</style>