<template>
  <div class="page-hero">
    <div class="topbr bg-black py-2 px-3 d-flex ai-center sprite-1">
      <img src="~assets/img/logo.png" height="30" />
      <div class="px-2 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="text-white pl-3">攻略站</span>
      </div>
      <router-link tag="div" to="/">
        <span class="btn mr-3 text-white">更多英雄</span>
        <i class="iconfont icon-dayuhao text-white"></i>
      </router-link>
    </div>
    <div v-if="heroList">
      <div class="top" :style="{'background-image':`url(${heroList.banner})`}">
        <div class="text-white info p-3 h-100 d-flex flex-column jc-end">
          <div>{{heroList.title}}</div>
          <h2 class="my-2">{{heroList.name}}</h2>
          <div>{{heroList.categories.map(v=>v.name).join('/')}}</div>
          <div class="d-flex">
            <div class="flex-1 ai-center">
              <span>难度</span>
              <span class="badge bg-primary-1">{{heroList.scores.difficult}}</span>
              <span>技能</span>
              <span class="badge bg-blue">{{heroList.scores.skills}}</span>
              <span>攻击</span>
              <span class="badge bg-danger">{{heroList.scores.attack}}</span>
              <span>生存</span>
              <span class="badge bg-dark">{{heroList.scores.survive}}</span>
            </div>
            <router-link to="/" tag="span" class="text-grey fs-sm">皮肤：2 &gt;</router-link>
          </div>
        </div>
      </div>
      <!-- end of top -->
      <div>
        <div class="bg-white px-3">
          <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
            <div class="nav-item active">
              <div class="nav-link">英雄初始</div>
            </div>
            <div class="nav-item">
              <div class="nav-link">英雄初始</div>
            </div>
          </div>
        </div>
        <swiper>
          <swiper-slide>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-Menu"></i>
                  英雄视频介绍
                </router-link>
                <router-link tag="button" to="/" class="btn btn-lg flex-1 ml-2">
                  <i class="iconfont icon-Menu"></i>
                  一图识英雄
                </router-link>
              </div>
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img
                    :src="items.icon"
                    width="65"
                    height="65"
                    class="icon"
                    :class="{active:heroIndex===i}"
                    @click="(heroIndex=i)"
                    v-for="(items,i) in heroList.skills"
                    :key="i"
                  />
                </div>
              </div>
              <div v-if="cueentSkill">
                <div class="d-flex pt-4 pb-3 ai-center">
                  <h3 class="m-0">{{cueentSkill.name}}</h3>
                  <span class="text-grey-1 ml-4">(冷却值：{{cueentSkill.delay}} 消耗：{{cueentSkill.cost}})</span>
                </div>
                <p class="border-bottom pb-3">{{cueentSkill.description}}</p>
                <p class="text-grey-1 p-2">小提示：{{cueentSkill.tips}}</p>
              </div>
              <card plain icon="Menu" title="出装推荐">
                <div class="hero-items">
                  <div class="fs-xl py-2">顺风出装</div>
                  <div class="d-flex jc-around text-center">
                    <div v-for="item in heroList.items1" :key="item.name">
                      <img class="icon" :src="item.icon" alt />
                      <div class="fs-xs">{{item.name}}</div>
                    </div>
                  </div>
                </div>
                <div class="hero-items">
                  <div class="fs-xl py-2">逆风出装</div>
                  <div class="d-flex jc-around text-center">
                    <div v-for="item in heroList.items2" :key="item.name">
                      <img class="icon" :src="item.icon" alt />
                      <div class="fs-xs">{{item.name}}</div>
                    </div>
                  </div>
                </div>
              </card>
            </div>
            <card plain icon="Menu" title="使用技巧">
              <p class="m-0">{{heroList.usageTips}}</p>
            </card>
            <card plain icon="Menu" title="对抗技巧">
              <p class="m-0">{{heroList.battleTips}}</p>
            </card>
            <card plain icon="Menu" title="团战思路">
              <p class="m-0">{{heroList.teamTips}}</p>
            </card>
            <card plain icon="Menu" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in heroList.partners" :key="item.name" class="d-flex pt-3">
                <img height="50" :src="item.hero.avatar" alt />
                <div class="flex-1 m-0 ml-3">{{item.description}}</div>
              </div>
            </card>
          </swiper-slide>
          <swiper-slide></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "components/common/Card";
export default {
  data() {
    return {
      heroList: null,
      heroIndex: 0
    };
  },
  components: {
    Card
  },
  computed: {
    cueentSkill() {
      return this.heroList.skills[this.heroIndex];
    }
  },
  props: {
    id: { required: true }
  },
  methods: {
    async fach() {
      const res = await this.$http.get(`/heroes/${this.id}`);
      this.heroList = res.data;
    }
  },
  created() {
    this.fach();
  }
};
</script>

<style lang="scss">
@import "~assets/css/style.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .badge {
      margin: 0 0.25rem;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      line-height: 0.9rem;
      text-align: center;
      border-radius: 50%;
      font-size: 0.6rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin: 0 0.5rem;
    }
  }
}
.skills {
  img.active {
    border: 3px solid map-get($color, "primary");
    border-radius: 45%;
  }
}
.hero-items {
  img.icon {
    widows: 46px;
    height: 46px;
    border-radius: 50%;
  }
}
</style>