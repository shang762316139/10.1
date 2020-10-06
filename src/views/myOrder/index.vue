<!--  -->
<template>
<div class="" style="overflow-x: hidden !important;">
    <div class="header">
        <i class="iconfont icon-ico_leftarrow" @click="back"></i>
        <span class="header-title">我的订单</span>
    </div>
    <div class="order-wrap">
        <ul class="order-list">
            <li class="list-item">
                <div class="order-title">
                    <div class="shop">
                        <i class="icon iconfont icon-dianpu"></i>
                        <span class="shop-name">小米商城</span>
                    </div>
                    <div class="success">交易成功</div>
                </div>
                <div class="order-detail">
                    <div class="goods-img">
                        <img src="" alt="">
                    </div>
                    <div class="info">
                        <div class="name">产品名称</div>
                        <div class="price">价格</div>
                    </div>
                    <div class="count">数量</div>
                </div>
                <div class="total-price">
                    共<span class="num">1</span>件商品，总额：<strong class="total">1888</strong>元
                </div>
            </li>
        </ul>
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
.list-item{
border-bottom: 8px solid #eee;

}
.order-title{
    font-size: 14px;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    line-height: 40px;
    padding-left: 15px;
}
.success{
    float: right;
    padding: 0 30px;
    color: orange;
    margin-top: -40px;
}
.order-detail{
    width: 100%;
    height: 80px;
    padding: 15px;
    border-bottom: 1px solid #ccc;

}
.goods-img{
    width: 80px;
    height: 80px;
    border: 1px solid #eee;
}
img{
    width: 80px;
    height: 80px;
}
.info{
    float: left;;
    padding: 0  100px;
    margin-top: -80px;
}
.price{
    margin: 20px 0;
    color: orange;
}

.count{
margin-top: -55px;
float: right;
margin-right: 30px;
}
.total-price{
    height: 40px;
    line-height: 40px;
    padding-right: 15px;
    text-align: right;
}

.num,.total{
color: orange;

}
</style>