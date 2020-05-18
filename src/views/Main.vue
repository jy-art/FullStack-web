<template>
  <div>
    <div class="topbr bg-black py-2 px-3 d-flex ai-center" >
      <img src="~assets/img/logo.png" height="30">
      <div class="px-2 flex-1">
        <p class="text-white">王者荣耀</p>
        <p class="text-grey-1 fs-xxs">团队成就更多</p>
      </div>
      <a type="botton" class="btn bg-primary mr-3 text-black">立即下载</a>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around" >
        <div class="nav-item active ">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
.topbr{
  position: sticky;
  top:0;
  z-index: 99;
}

</style>