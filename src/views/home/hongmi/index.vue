<!--  -->
<template>
<div class=''>
  <!-- 轮播图 -->
        <mt-swipe :auto="4000" style="height:188px" class="swipe-magin">
          <mt-swipe-item style="height:188px">
            <img src="../../../assets/1.jpg" alt class="swipe_img" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../assets/2.jpg" alt class="swipe_img" />
          </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
</div>
</template>

<script>

export default {
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
components: {},
}
</script>
<style lang="scss" scoped>
.swipe_img {
  width: 375px;
  height: 188px;
}
</style>