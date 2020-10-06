<!--  -->
<template>
  <div class="">
    <div class="mainHeard">
      <div class="mainImg" @click="goLogin">
        <img src="http://qiniu.verydog.cn/show.liluo.cc/normal-face.png" alt="" />
      </div>
      <p class="lr" @click="goLogin">登录/注册</p>
    </div>
    <div class="mineWrap">
      <div class="indet">
        <p>我的订单</p>
        <i class="iconfont icon-youjiantou" @click="viewOrder"></i>
      </div>
      <div class="mineBox1">
          <div class="box2">
              <i class="iconfont icon-daifukuan"></i>
              <p>待付款</p>
          </div>
          <div class="box2">
              <i class="iconfont icon-daishouhuo"></i>
              <p>待收货</p>
          </div>
          <div class="box2">
              <i class="iconfont icon-shezhi"></i>
              <p>退换修</p>
          </div>
      </div>
    </div>
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon icon-huiyuan" style="color: #FDBF2D;"></span>
        <span>会员福利</span>
        <i class="iconfont icon-youjiantou" @click="goAbout"></i>
      </div>
      </div>
      <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon icon-youhuiquan" style="color: #51BBE0;"></span>
        <span>我的优惠</span>
        <i class="iconfont icon-youjiantou" @click="goAbout"></i>
      </div>
    </div>
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon icon-fuwuzhongxin" style="color: #F96C5E;"></span>
        <span>服务中心</span>
        <i class="iconfont icon-youjiantou" @click="goAbout"></i>
      </div>
    </div>
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon icon-shop" style="color: #FF8B43;"></span>
        <span>小米之家</span>
        <i class="iconfont icon-youjiantou" @click="goAbout"></i>
      </div>
    </div>
    
    <div class="new-wrap">
      <div class="dingdan public-padding p-item">
        <span class="iconfont icon icon-shezhi" style="color: #818C99;"></span>
        <span>设置</span>
        <i class="iconfont icon-youjiantou" @click="goAbout"></i>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import { MessageBox } from 'mint-ui'
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
    viewOrder(){
          if(this.userName == ''){
              MessageBox.alert('请先登录再进行此操作');
          }else{
              // todo
              this.$router.push({path: 'myOrder'});
          }
      },
      init(){
          var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
          if(userId == '0001'){
              this.userName = 'admin';
              this.userLogo = 'user.jpg'
          }
      },
      goLogin(){
          this.$router.push({
              path: 'login'
          });
      },
      goAbout(){
          this.$router.push({
              path: 'about'
          });
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
  components: {
    Footer,
  },
};
</script>
<style  scoped>
.mainHeard {
  height: 5rem;
  background: #f37d0f url(http://qiniu.verydog.cn/show.liluo.cc/bg.63c8e19.png)
    repeat top center;
  background-size: 18.75rem;
  line-height: 5rem;
  color: #fff;
  font-size: 1rem;
}

.mainImg {
  border-radius: 100%;
  width: 3.125rem;
  height: 3.125rem;
  float: left;
  border: 0.1875rem solid hsla(0, 0%, 100%, 0.4);
  overflow: hidden;
  margin: 0.625rem;
}
img {
  width: 100%;
  height: 100%;
}
.indet {
  height: 3.125rem;
  line-height: 3.125rem;
  border-bottom: 0.0625rem solid #ccc;
  position: relative;
}
.indet p {
  margin-left: 0.625rem;
}

.mineBox1{
  height: 80px;
  border-bottom: 5px solid #eee;
  color: #aaa;
}
.box2{
float: left;
width: 33%;
text-align: center;
margin-top: 15px;
}
.iconfont{
  font-size: 24px;
}
.new-wrap{
  line-height: 40px;
  border-bottom: 5px solid #eee;
  padding-left: 15px;
  position: relative;
}
.icon{
  font-size: 20px;
  margin-right: 15px;
}
.dingdan{
  height: 40px ;
  line-height: 40px;
}
.icon-youjiantou{
  display: block;
  position: absolute;
  right: 0.625rem;
  top: 0;
  font-size: 16px;
  color: #999;
}
</style>