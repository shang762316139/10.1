<!--  -->
<template>
  <div>
    <!-- 头部 -->
    <header class="nav-header">
      <div class="nav_left">
        <i class="iconfont icon-xiaomi"></i>
      </div>
      <div class="nav_mid">
        <p>
          <i class="iconfont icon-sousuo"></i>
        </p>
        <input type="text" placeholder="搜索商品名称" />
      </div>
      <div class="nav_right">
        <i class="iconfont icon-wode"></i>
      </div>
    </header>
    <!-- 总导航 -->
        <!-- <Nav></Nav> -->
    <main>
      <section>
        
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
        <!-- 小导航 -->
        <div class="xiao_nav">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <a href>
                <img :src="item.imgurl" />
              </a>
            </li>
          </ul>
        </div>
        <!-- 小导航结束 -->
        <!-- 每日精选和超值推荐 -->
        <ul class="tuijian_ul">
          <li v-for="(item2,index) in tuijianList" :key="index">
            <img :src="item2.imgurl" />
          </li>
        </ul>
        <!-- 每日精选和超值推荐结束 -->
        <!-- 下面的列表 -->
        <ul class="list_ul">
          <li v-for="(item3,index) in list_ulList" :key="index">
            <div class="one1">
              <img :src="item3.imgurl" alt />
            </div>
            <div class="two2">
              <div class="title">{{item3.title}}</div>
              <div class="brief">{{item3.brief}}</div>
              <div class="price">{{item3.price}}</div>
            </div>
          </li>
        </ul>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../../components/Footer";
// import Nav from "../../components/Zongnav";
export default {
  data() {
    //这里存放数据
    return {
      list: [
        { imgurl: require("../../../assets/小米闪购.jpg") },
        { imgurl: require("../../../assets/手机卡.jpg") },
        { imgurl: require("../../../assets/新品发布.jpg") },
        { imgurl: require("../../../assets/活动频道.jpg") },

        { imgurl: require("../../../assets/以旧换新.jpg") },
      ],
      // big_navList:[
      //   {title:"小米手机"},
      //   {title:"Redmin红米手机"},
      //   {title:"电视"},
      //   {title:"笔记本"},
      //   {title:"家电"},
      //   {title:"路由器"},
      //   {title:"只能硬件"},
      //   {title:"服务"},
      // ],
      tuijianList: [
        { imgurl: require("../../../assets/meirijingxuan.jpg") },
        { imgurl: require("../../../assets/chaozhituijian.jpg") },
      ],
      list_ulList: [
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
    // Nav,
  },
};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  overflow: auto;
}
// 头部样式

.nav-header {
  position: fixed;
  top: 0;
  z-index: 999;
  height: 60px;
  background: rgb(221, 219, 219);
  display: flex;
  align-items: center;
  .nav_left {
    width: 52px;
    height: 60px;

    text-align: center;
    line-height: 60px;
    .icon-xiaomi {
      font-size: 30px;
      color: rgb(250, 121, 29);
    }
  }
  .nav_mid {
    width: 257px;
    height: 33px;
    background: #fff;

    margin: 0 10px;
    display: flex;
    align-items: center;
    input {
      height: 33px;
      font-size: 16px;
      color: #666;
      border: none;
      margin-left: 5px;
    }
    p {
      width: 31px;

      text-align: center;

      .icon-sousuo {
        font-size: 25px;
        color: #999;
      }
    }
  }
}
.nav_right {
  width: 52px;
  height: 60px;

  text-align: center;

  line-height: 60px;
  .icon-wode {
    font-size: 24px;
    color: #555;
  }
}
//总导航
// .big_nav {
//   width:100%; 
//   margin-top:60px;
//   height: 60px;
  
//   ul {
//     width:100%; 
//     display: flex;
//     height: 60px;
//     white-space: nowrap;
//      overflow-x:scroll;
//     li{
  
//   height: 60px;
 
//   line-height: 60px;
//   text-align: center;
//   margin:0 10px;
//   line-height:68px;
//   text-align: center;
//   font-size:16px;
//     }
//   }
// }
 
.swipe_img {
  width: 375px;
  height: 188px;
}
// .swipe-magin {
//   margin-top: 60px;
// }

// 小导航
.xiao_nav {
  height: 75px;
  margin-top: 10px;
  display: flex;
  ul {
    display: flex;
  }
  li a {
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.tuijian_ul {
  li {
    margin-top: 10px;
    height: 230px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

// 下面的列表
.list_ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    margin-top: 5px;
    .one1 {
      width: 184px;
      height: 184px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.list_ul li .two2 {
  padding: 15px 0 0 10px;
  width: 143px;
  height: 85px;
  .brief {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
  .title {
    font-size: 16px;
    color: #333;
    margin-top: 3px;
  }
  .price {
    color: hsl(2, 97%, 55%);
  }
}
</style>