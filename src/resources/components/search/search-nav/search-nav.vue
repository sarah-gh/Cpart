<template>
    <div class="router-nav">
        <div class="link">
            <a v-for="(item, index) in navigator" :key="index" :class="[ item.active ? 'active' : '']" @click="navActive(index)">
                <p>
                    {{ item.text }}
                </p>
            </a>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "search-nav",
    data() {
        return {
            navigator: [
                {
                    text: 'مقالات',
                    active: true,
                },
                {
                    text: 'افراد',
                    active: false
                },
                {
                    text: 'موضوعات',
                    active: false
                }
            ]
        }
    },
    methods: {
        navActive(x){
            // console.log(x);
            this.navigator.forEach((value, index) => {
                if(index === x){
                    value.active = true;
                }
                else {
                    value.active = false;
                }
                //console.log(value.active);
            })
            //console.log(this.navigator);
            this.$emit('clicked', x);
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
                font-family: $font-bold;
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