<template>
  <div class="page-artcle" v-if="artcleList">
    <div class="d-flex py-3 px-2 mb-3 text-info-1 fs-xl border-bottom ai-center">
      <div class="iconfont icon-fanhui"></div>
      <strong class="flex-1 pl-2">{{artcleList.title}}</strong>
      <div class="text-grey fs-ms">{{artcleList.updatedAt | date}}</div>
    </div>
    <div v-html="artcleList.body" class="px-3 body"></div>
    <div class="d-flex p-3 fs-lg ai-center border-top">
      <i class="iconfont icon-Menu"></i>
      <strong class="ml-2 text-info-1">相关资讯</strong>
    </div>
    <div class="px-3 fs-lg">
      <router-link class="text-ellipsis"
        :to="`/artcles/${item._id}`"
        tag="div"
        v-for="item in artcleList.related"
        :key="item._id"
      >{{item.title}}</router-link>
     
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY/MM/DD");
    }
  },
  props: {
    id: {}
  },
  data() {
    return {
      artcleList: null
    };
  },
  watch:{
    id:'fech'
  },
  methods: {
    async fech() {
      const res = await this.$http.get(`artcles/${this.id}`);
      this.artcleList = res.data;
    }
  },
  created() {
    this.fech();
  }
};
</script>

<style lang="scss">
.page-artcle {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>