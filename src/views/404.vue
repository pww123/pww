<template>
    <div class="nofund-container">
        <!--<van-empty :image="errorImg" description="404" />-->
    </div>
</template>

<script>
export default {
    data () {
        return {
            // errorImg: require('../assets/images/empty-image-error.png'),
        }
    },
    components: {
    },
    mounted () {
        document.title = '404'
    }
}
</script>

<style lang="stylus" scoped>
    .van-empty
        width 100%
        min-height 100vh
        background-color #fff
    .nofund-container
        display flex
        align-items center
        justify-content center
        width 100%
        height 100%
</style>
