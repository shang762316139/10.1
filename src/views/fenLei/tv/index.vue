<template>
  <div>
       <div class="store">
      <div class="store-wrap">
        <div class="wrap-item">
          <ul class="item-ul">
            <li class="item-li">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>
            <li class="item-li item-lir">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>
            <li class="item-li">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>
            <li class="item-li item-lir">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>

            <li class="item-li">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>
            <li class="item-li item-lir">
              <div class="img">
                <img src="/images/tv4c-55.webp" alt="" />
              </div>
              <div class="info">
                <div class="name">红米5</div>
                <div class="title">12MP旗舰相机，骁龙处理器</div>
                <div class="price">￥799</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.store {
  overflow: hidden;
  position: relative;
}
.store-wrap {
  display: flex;
}
.wrap-item {
  flex-shrink: 0;
  width: 100%;
}
.item-ul {
  width: 100%;
  margin-top: 0.15rem;
  list-style: none;
}
.item-ul .item-li {
  width: 7.95rem;
  float: left;
}
.img {
  width: 100%;
}
.img img {
  width: 7.95rem;
  height: 7.95rem;
}
.info {
  width: 100%;
  box-sizing: border-box;
  padding: 0.45rem 0.6rem;
  text-align: left;
}
.info .name {
  font-size: 0.7rem;
  color: #3c3c3c;
}
.info .title {
  margin-top: 0.15rem;
  font-size: 0.65rem;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info .price {
  font-size: 0.6rem;
  color: #ea625b;
}
.item-lir {
  margin-left: 0.1rem;
}
</style>