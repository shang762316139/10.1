<template>
  <div>
    <div>
      <header>
        <div class="h1">
          <a href="javascript:;" class="h1a">
            <span @click="mtoken" class="iconfont icon-ico_leftarrow"></span>
          </a>
        </div>
        <div class="h2title">商品详情</div>
      </header>
      <router-view></router-view>
    </div>
    
    <main>
      <mt-swipe :auto="4000" class="liph">
        <mt-swipe-item class="iph">
          <img src="../../assets/1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item class="iph">
          <img src="../../assets/2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item class="iph">
          <img src="../../assets/1.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>

      <!-- <div class="overview">
        <div class="goods-name">红米5</div>
        <div class="goods-brief">搭载了玩游戏超给力的高通骁龙处理器，后置12MP旗舰相机，前置柔光自拍，配备5.7英寸全面屏。</div>
        <div class="goods-price">￥799</div>
       </div> -->
         <div class="overview" >
        <!-- <div>{{xianglist.imgurl}}</div>  -->
        <div class="goods-name">{{xianglist.title}}</div>
        <div class="goods-brief">{{xianglist.brief}}</div>
        <div class="goods-price">{{xianglist.price}}</div>
        </div>

      <div class="buy-count">
        <div class="buy-count-text">购买数量：</div>
        <div class="buy-count-btn">
          <!-- <a href="javascript:;" class="btn-minus" @click="$store.commit('reduce')">-</a> -->
          <button @click="$store.commit('reduce')" class="btn-minus">-</button>
           <span class="buy-count-num">{{$store.state.num}}</span> 
          <!-- <p>{{$store.state.num}}</p> -->
          <!-- <a href="javascript:;" class="btn-add" @click="$store.commit('add')">+</a> -->
          <button @click="$store.commit('add')"  class="btn-add">+</button>
        </div>
      </div>

      <div class="mint">
        <div class="mint-nav">
          <router-link tag="a" to="/datails/gaishu" href="javascript:;" class="mint-tab">概述</router-link>
          <router-link tag="a" to="/datails/canshu" href="javascript:;" class="mint-tab">参数</router-link>
          <router-link tag="a" to="/datails/yiwaixian" href="javascript:;" class="mint-tab">意外险</router-link>
        </div>
        <router-view></router-view>
        <div class="mint-cont">
          <div class="mint-cont-wrap">
            <div class="mint-cont-w1">
              <ul>
                <li>
                  <img src="../../assets/logo.png" alt />
                </li>
                <li>
                  <img src="../../assets/logo.png" alt />
                </li>
                <li>
                  <img src="../../assets/logo.png" alt />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>




<script>
import Vue from "vue";
import axios from "axios"
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import Footer from "../../components/footer-xq";

import store from "../../store";

export default {
  data(){
    
    return{
      xianglist:{},
      
    }
  },
  methods: {
    mtoken() {
      history.back();
    },
  },
  components: {
    Footer,

  },
  name: "shortcut",
  store,
  mounted(){
     let newid=this.$route.query.id
     console.log(newid)
      axios.get("/api/proList",{
        params:{
          id:newid
        }
      }).then((res)=>{
        // console.log(res)
        console.log(res)
        for(let i=0;i<res.data.proList.length;i++){
          if(newid==res.data.proList[i].id){
            console.log(newid)
            this.xianglist=res.data.proList[i]
            console.log(this.xianglist)
          }
        }
        // this.xianglist=res.data.proList

      })
   
  },
};
</script>

<style scoped>
/* 概述参数大图部分 */
.mint-cont {
  overflow: hidden;
  position: relative;
}
.mint-cont-wrap {
  display: flex;
}
.mint-cont-w1 {
  flex-shrink: 0;
  width: 100%;
}
.mint-cont-w1 ul {
  width: 100%;
}
.mint-cont-w1 ul li {
  width: 100%;
}
.mint-cont-w1 ul li img {
  width: 100%;
  display: block;
}

/* 概括参数导航 */
.mint {
  width: 100%;
  border-top: 7px solid #f1f1f1;
}
.mint-nav {
  background: #fff;
  display: flex;
  text-align: center;
}
.mint-tab {
  display: block;
  padding: 17px 0;
  font-size: 12px;
  flex: 1;
  text-decoration: none;
  color: #999;
}
.mint-nav .active {
  color: #ff6700;
}
/* 购买数量部分 */
.buy-count {
  width: 100%;
  margin-top: 4.6px;
  height: 58px;
  background-color: #fff;
  font-size: 16px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}
.buy-count .buy-count-text {
  font-size: 16px;
}
.buy-count-btn {
  margin-left: 6px;
}
.btn-minus {
  display: block;
  width: 40px;
  height: 37px;
  line-height: 35px;
  float: left;
  border: 1px solid #b2b2b2;
  border-right: none;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  color: #999;
}

.btn-add {
  display: block;
  width: 40px;
  height: 37px;
  line-height: 35px;
  float: right;
  border: 1px solid #b2b2b2;
  border-left: none;

  text-align: center;
  text-decoration: none;
  font-size: 24px;
  color: #999;
}
.buy-count-num {
  display: block;
  float: left;
  width: 40px;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
  text-align: center;
  border: 1px solid #b2b2b2;
}
/* 价格部分 */
.overview {
  width: 100%;
  text-align: left;
  padding: 0.45rem 0.7rem 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
}
.overview .goods-name {
  font-size: 18px;
  line-height: 28px;
  color: #3c3c3c;
}
.overview .goods-brief {
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.54);
}
.overview .goods-price {
  font-size: 23px;
  font-weight: 700;
  color: #ff6700;
  padding: 0.45rem 0;
}

.iph img {
  width: 375px;
  height: 412px;
}
.liph {
  display: block;
  width: 100%;
  height: 412px;
}

* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: 23.4375px;
}
body {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #2c3e50;
}
/* 头部 */
header {
  width: 100%;
  height: 59px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #f2f2f2;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.h1 {
  float: left;
  width: 52px;
  height: 28px;
}
.h1 .h1a {
  display: block;
  width: 1.333rem;
  margin: 0 auto;
  text-decoration: none;
  color: #999;
}

.h2title {
  width: 271px;
  height: 19px;
  text-align: center;
  font-size: 15px;
  color: #666;
}
.icon-ico_leftarrow {
  widows: 23px;
  height: 24px;
}
</style>