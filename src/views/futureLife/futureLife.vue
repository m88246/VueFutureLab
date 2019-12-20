<template src="./futureLife.html"></template>
<script>
import scrollTop from "@/components/scrollTop/scrollTop.vue";
export default {
  name: 'futureLife',
  props: {
    // msg: String
  },
  components: {
    scrollTop
  },
  data() {
    return {
      techProduct: [
        { productName: "標題", description: "【Future】UrbanDumbbell 城市啞鈴組", price: "價格", src: require("@/assets/img/porduct005.gif") },
        { productName: "標題", description: "【Future】X-Knee 原動力強化器(1對)", price: "價格", src: require("@/assets/img/porduct006.gif") },
        { productName: "標題", description: "【FUTURE】FreeZone Plus 零負重變型包", price: "價格", src: require("@/assets/img/porduct007.gif") },
        { productName: "標題", description: "【Future】FreeZone 零負重背帶", price: "價格", src: require("@/assets/img/porduct008.gif") }
      ]
    };
  }
}
</script>
<style src="./futureLife.css" scoped></style>