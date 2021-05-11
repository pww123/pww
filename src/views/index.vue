<template>
    <div class="home">
        首页内容
    </div>
</template>
<script>
import {getOne,getPoint} from "../api";
import {getQueryString} from "../js/common"

export default {
    name: "index",
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style scoped>


</style>
<style scoped lang="stylus">
    .home{
        min-height 100vh
        background #ffffff
        position relative
        .banner-container{
            position relative
            min-height 3rem
            img{
                display block
                width 100%
            }
            .rules_btn{
                position absolute
                right 0
                top 0.6rem
                width 1.6rem
                line-height 0.64rem
                background-color #fff
                text-align center
                color #F5B431
                font-size .28rem
                border-radius 0.5rem 0 0 0.5rem
            }
            .van-button{
                width 5.3rem
                height 0.94rem
                font-size 0.36rem
                font-weight bold
                position absolute
                bottom -0.5rem
                left 0
                right 0
                margin 0 auto
            }
        }
        .content-box{
            padding 0.8rem 0.4rem 0.4rem
            .personal-info-box{
                border-radius 0.16rem
                box-shadow: 0px 8px 32px 0px rgba(15,93,244,0.2)
                padding 0.36rem 0.32rem
                div{
                    display flex
                    justify-content space-between
                    align-items center
                    font-size 0.32rem
                    margin-top 0.36rem
                    color #595959
                    &:first-child{
                        margin-top 0
                    }
                    span{
                        font-size 0.36rem
                        font-weight bold
                        color #F5B431
                    }
                }

            }
        }
        .activity-btn-box{
            margin-top 0.6rem
            .activity-btn-item{
                min-height 1.5rem
                margin-bottom 0.3rem
                border-radius 0.16rem
                position relative
                img{
                    display block
                    width 100%
                }
                .van-button{
                    position absolute
                    right 0.3rem
                    top 0
                    bottom 0
                    margin auto
                    width 3.2rem
                    height 0.88rem
                    font-size .36rem
                    font-weight bold
                }
            }
        }
    }

</style>
