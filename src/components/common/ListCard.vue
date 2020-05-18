<template>
   <Card :title="title" :icon="icon">
      <div class="nav jc-between">
        <div class="nav-item"  v-for="(categor,index) in categories" :key="index" 
        :class="{active:active===index}"
         @click="$refs.List.$swiper.slideTo(index)">
            <div class="nav-link">{{categor.name}}</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper ref="List" :options="{autoHeight:true}"
        @slide-change="()=> active = $refs.List.$swiper.realIndex">
          <swiper-slide v-for="(category,index) in categories" :key="index">
            <slot name="items" :category="category"></slot>
          </swiper-slide>
        </swiper>
      </div>
    </Card>
</template>

<script>
import Card from "components/common/Card";
export default {
    props:{
        title:{
            type:String
        },
        icon:{
             type:String
        },
        categories:{
            type:Array
        }
    },
    data(){
        return{
            active:0
        }
    },
    components:{
        Card
    }
}
</script>

<style>

</style>