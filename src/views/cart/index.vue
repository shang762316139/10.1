<!--  -->
<template>
  <div class="main">
    <!--头部开始-->
    <div class="header">
      <i class="iconfont icon-ico_leftarrow" @click="back"></i>
      <span class="header-title">购物车</span>
      <i></i>
    </div>
    <!-- 列表详情开始-->
    <div class="list">
      <ul>
        <li>
          <div class="list-box1">
            <input type="checkbox" name id />
          </div>
          <div class="list-box2"></div>
          <div class="list-box3">
            <div class="list-div1">
              <p>红米 5</p>
            </div>
            <div class="list-div2">
              <p>售价：</p>
              <p>799元</p>
            </div>
            <div class="list-div4">
              <div class="list-div3">
                <span  @click="jianshao">-</span>
                <span class="shuliang">1</span>
                <span @click="zhengjia">+</span>
                <input type="button" name id value="删除" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="totalPrice">
      <div class="total-wrap">
        <span>件数：2</span>
        <span>总金额：</span>
        <span>4098元</span>
        <input type="button" value="结算" />
      </div>
    </div>
    <div class="guess-img">
      <img
        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
        alt
      />
    </div>
    <div class="guess">
      <div class="guess-wrap">
        <ul>
          <li>
            <div class="guess-box1">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
            <div class="guess-box2">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
          </li>
          <li>
            <div class="guess-box1">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
            <div class="guess-box2">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
          </li>
          <li>
            <div class="guess-box1">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
            <div class="guess-box2">
              <img src="../../../public/images/2.jpg" alt />
              <p>小米电视机</p>
              <p>描述描述</p>
              <p>2020元</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--底部开始-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
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
    jianshao(){
      // alert(111)
      this.$store.state.count--
    },
    zhengjia(){
      this.$store.state.count++
    }, back(){
      // 返回上一页
      this.$router.go(-1);
    },
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
<style scoped>
.header {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #f2f2f2;

  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
}
.header .header-title {
  width: 11.558rem;
  height: 0.8rem;
  text-align: center;
  font-size: 0.85rem;
  color: #666;

  line-height: 0.85rem;
}
.icon-leftarrow:before {
  content: "\e602";
}

.list {
  width: 100%;
  height: 160px;
  border-bottom: border 5px red;
}
.list ul li {
  border: solid 1px #f2f2f2;
}
.list-box1 {
  width: 6%;
  height: 10rem;
  margin-top: 20px;
  text-align: center;
  line-height: 10rem;
  cursor: pointer;
  float: left;
}
.list-box1 input {
  font-size: 2rem;
}
.list-box2 {
  width: 28%;
  height: 100px;
  float: left;
  /* display: inline-block; */

  margin-top: 50px;
  background: url("../../../public/images/1.jpg");
}

.list-box3 {
  float: left;
  width: 64%;
  height: 10rem;
  margin-left: 2%;
}

.list-div1 {
  margin-top: 3.2rem;
  height: 1.7rem;
}

.list-div2 {
  margin: 0.1rem 0;
  height: 1.7rem;
}

.list-div2 p {
  float: left;
}

.list-div3 {
  height: 1.6rem;
  /* background: slateblue; */
  line-height: 1.6rem;
}

.list-div3 span:nth-child(1) {
  display: inline-block;
  width: 1.4rem;
  height: 1.6rem;
  background: #f2f2f2;
  text-align: center;
}

.list-div3 span:nth-child(2) {
  margin: 0 0.6rem;
  display: inline-block;
}

.list-div3 span:nth-child(3) {
  display: inline-block;
  width: 1.4rem;
  height: 1.6rem;
  background: #f2f2f2;
  text-align: center;
}

.list-div3 > input {
  width: 2.6rem;
  height: 1.6rem;
  background: #ff6700;
  color: wheat;
  float: right;
  border: none;
  margin-right: 40px;
}
.totalPrice {
  width: 100%;
  height: 60px;
}
.total-wrap {
  width: 100%;
  height: 55px;
  float: left;
  line-height: 55px;
  border-top:solid 15px #f2f2f2;
 
}
.total-wrap span:nth-child(1) {
  margin-left:10px;
  font-size:18px
}
.total-wrap span:nth-child(2) {
  margin: 0 7px;
  font-size:18px
}
.total-wrap span:nth-child(3) {
  color: #ff6700;
  font-size:18px;
  
}
.total-wrap input {
  width: 100px;
  height: 55px;
  background: #ff6700;
  color: white;
  border: none;
  font-size:18px;
  margin-left:35px
}
.guess-img {
  width: 100%;
}
.guess-img img {
  width: 100%;
}
.guess-wrap {
  width: 100%;
  height: 210px;
  border-bottom: solid 1px #f2f2f2;
}
.guess-box1 {
  width: 49%;
  height: 210px;
  display: inline-block;
}
.guess-box1 p {
  margin-left: 10px;
}
.guess-box1 p:nth-child(3) {
  color: rgba(0, 0, 0, 0.54);
  margin-left: 10px;
  margin: 5px 10px;
}
.guess-box1 p:nth-child(4) {
  color: #ea625b;
}
.guess-box1 img {
  width: 100%;
  height: 130px;
  background: red;
}
.guess-box2 {
  width: 49%;
  height: 200px;
  float: right;
}
.guess-box2 p {
  margin-left: 10px;
}

.guess-box2 p:nth-child(3) {
  color: rgba(0, 0, 0, 0.54);
  margin-left: 10px;
  margin: 5px 10px;
}
.guess-box2 p:nth-child(4) {
  color: #ea625b;
}
.guess-box2 img {
  width: 100%;
  height: 130px;
  background: red;
}
</style>