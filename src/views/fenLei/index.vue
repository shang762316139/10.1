<!--  -->
<template>
  <div class="">
    <header>
      <div class="h1">
        <a href="javascript:;" class="h1a" > 
            <span @click="mtoken" class="iconfont icon-ico_leftarrow"></span>
        </a>
      </div>
      <div class="h2title">分类</div>
    </header>
    <!-- 内容 -->
    <section>
      <div class="navs">
        <router-link tag="a"  to="/fenLei/all" class="navs-a " href="javascript:;">
          <div>全部</div>
        </router-link>
        <router-link tag="a" to="/fenLei/iphone" class="navs-a" href="javascript:;">
          <div>手机</div>
        </router-link>
        <router-link tag="a" to="/fenLei/ai" class="navs-a" href="javascript:;">
          <div>智能</div>
        </router-link>
        <router-link tag="a" to="/fenLei/tv" class="navs-a" href="javascript:;">
          <div>电视</div>
        </router-link>
        
      </div>
         <router-view></router-view>

    </section>
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
      mtoken(){
          console.log(1);
          this.$router.push({
              path:'../home'
          })
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
<style >
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
  height: 2.5rem;
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
  width: 2.2205rem;
}
.h1 .h1a {
  display: block;
  width: 1.333rem;
  margin: 0 auto;
  text-decoration: none;
  color: #999;
}

.h2title {
  width: 11.558rem;
  height: 0.8rem;
  text-align: center;
  font-size: 0.65rem;
  color: #666;
}

/* 内容 */
section {
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 2.6rem;
}
.navs {
  background-color: #fff;
  display: flex;
  text-align: center;
}
.navs .navs-a {
  padding: 17px 0;
  font-size: 15px;
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-decoration: none;
  color: #999;
}
.navs .navs-a div {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}

.navs .active {
  border-bottom: 3px solid #ff6700 !important;
  color: #ff6700 !important;
  margin-bottom: -3px;
}

</style>