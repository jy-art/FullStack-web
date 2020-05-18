<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="~assets/img/1198799305d9d6adeb78b4f0794ff151.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="~assets/img/d6eefc87147f124af2724d80ac2c0032.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="~assets/img/36d3a7578c7f96052144081686b5a9ac.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 text-center" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow"></i>
        <span class="ml-2">收起</span>
      </div>
    </div>
    <!-- end of icons -->
    <list-card title="新闻资讯" icon="Menu" :categories="newsCates">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/artcles/${items._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(items,i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{items.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{items.title}}</span>
          <span class="text-grey-1 fs-sm">{{items.updatedAt|date}}</span>
        </router-link>
      </template>
    </list-card>
    <list-card title="英雄列表" icon="Hero" :categories="heroCates">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            class="p-2 text-center"
            style="width:20%"
            v-for="(hero,i) in category.heroList"
            :key="i"
          >
            <img :src="hero.avatar" class="w-100" alt />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </list-card>
  </div>
</template>

<script>
import ListCard from "components/common/ListCard";
import { log } from "util";
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: { el: ".pagination-home" },
        autoplay: { delay: 3000 }
      },
      newsCates: [],
      heroCates: []
    };
  },

  components: {
    ListCard
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCates = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      this.heroCates = res.data;
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  }
};
</script>

<style lang="scss">
@import "~assets/css/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background-color: #fff;

    &.swiper-pagination-bullet-active {
      background-color: map-get($color, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>