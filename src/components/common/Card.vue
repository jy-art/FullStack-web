<template>
  <div class="bg-white p-3 mt-3" :class="{card:!plain}">
    <div class="d-flex ai-center cred-header pb-3" :class="{'card-header':!plain}">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="flex-1 fs-xl px-2">{{title}}</div>
      <i class="iconfont icon-gedian" v-if="!plain" ></i>
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    plain: {
      type: Boolean,
     
    }
  }
};
</script>

<style lang="scss">
@import '~assets/css/variables.scss';
</style>