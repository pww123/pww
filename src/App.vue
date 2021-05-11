<template>
  <div id="app">
    <template>
        <router-view />
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getQueryString } from "@/js/common";
import XLoading from "@/components/XLoading";

export default {
    components: {
        [XLoading.name]: XLoading
    },
    computed: {
        // ...mapState({
        //     user: state => state.user,
        //     app: state => state.app
        // })
    },
    watch: {},
    data() {
        return {
        };
    },
    mounted() {
      console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
    },
    beforeCreate() {
        let that = this;
        if (getQueryString("debug")) {
            const VConsole = require("vconsole");
            that.vConsole = new VConsole();
        }
    }
};
</script>

<style>
/* 通用样式 */
* {
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-size: 0.28rem;
  background: #f2f3f4;
}
.head-filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.head-filter .filter-item {
  margin-right: 10PX;
  margin-bottom: 10PX;
}
#app {
  position: relative;
  /* height: 100%; */
  overflow: hidden;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
img {
  vertical-align: top;
  /* pointer-events: none; */
}

.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
ul,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

.padding-both {
  padding: 0 24px;
}
.font-bold {
  font-weight: bold;
}
.font_20 {
  font-size: 20px;
}
.font_22 {
  font-size: 22px;
}
.font_24 {
  font-size: 24px;
}
.font_26 {
  font-size: 26px;
}
.font_28 {
  font-size: 28px;
}
.font_30 {
  font-size: 30px;
}
.font_32 {
  font-size: 32px;
}
.font_34 {
  font-size: 34px;
}
.font_36 {
  font-size: 36px;
}
.font_38 {
  font-size: 36px;
}
.font_40 {
  font-size: 40px;
}
.font3 {
  color: #333;
}
.font6 {
  color: #666;
}
.font9 {
  color: #999;
}
.bottom-border {
  border-bottom: 1px solid #e2e4ea;
}
.flexCenter {
  display: flex;
  align-items: center;
}
.viewCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
.one-row {
  white-space: nowrap; /*一行显示*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /*用...代替超出部分*/
}
.has-header {
  padding-top: 100px;
}
/* 设置页面rem布局 */
@media screen and (min-width: 320PX) {html{font-size:42.66PX;}}
@media screen and (min-width: 360PX) {html{font-size:48PX;}}
@media screen and (min-width: 375PX) {html{font-size:50PX;}}
@media screen and (min-width: 400PX) {html{font-size:53.33x;}}
@media screen and (min-width: 411PX) {html{font-size:54.8PX;}}
@media screen and (min-width: 414PX) {html{font-size:55.2PX;}}
@media screen and (min-width: 440PX) {html{font-size:58.67PX;}}
@media screen and (min-width: 480PX) {html{font-size:64PX;}}
@media screen and (min-width: 520PX) {html{font-size:69.33PX;}}
@media screen and (min-width: 560PX) {html{font-size:74.67PX;}}
@media screen and (min-width: 600PX) {html{font-size:80PX;}}
@media screen and (min-width: 640PX) {html{font-size:85.33PX;}}
@media screen and (min-width: 680PX) {html{font-size:90.67PX;}}
@media screen and (min-width: 720PX) {html{font-size:96PX;}}
@media screen and (min-width: 750PX) {html{font-size:100PX;}}

.public_page{
  min-height: 100vh;
  background: linear-gradient(0deg,#125cf4, #1a138f);
}


</style>
