<!--  -->
<template>
<div class="" style="overflow-x: hidden !important;">
    <div class="header">
        <i class="iconfont icon-ico_leftarrow" @click="back"></i>
        <span class="header-title">关于</span>
    </div>
    <h5>因为时间有限，该功能未能完成，请谅解</h5>
    <div class="text">
        <p>商城，功能，布局由第五小组部分成员合力完成</p>
        <p>如有问题请联系项目经理：郭亚亚郭经理</p>
        <p>联系方式：直接叫她就可以了</p>
        <p>或添加QQ：676633541</p>
    </div>
</div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      back(){
      // 返回上一页
      this.$router.go(-1);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  components: {},
};
</script>
<style  scoped>
.header {
  width: 100%;
  height: 3.125rem;

  z-index: 999;
  background-color: #f2f2f2;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
}
.icon-ico_leftarrow{
margin-left: 15px;
}
.header .header-title {
  width: 12.558rem;
  height: 0.8rem;
  font-size: 0.95rem;
  color: #666;
  line-height: 0.85rem;
}
h5{
    margin-top: 30px;
    text-align: center;
}
.text{
    margin-top: 50px;
}
p{
    line-height: 30px;
    text-align: center;
}
</style>