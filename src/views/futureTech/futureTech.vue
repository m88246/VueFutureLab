<template src="./futureTech.html"></template>
<script>
import scrollTop from "@/components/scrollTop/scrollTop.vue";
export default {
  name: "futureTech",
  props: {
    // msg: String
  },
  components: {
    scrollTop
  },
  data() {
    return {
      techProduct: [
        { productName: "標題", description: "【Future】UniversalPot 滿漢電火鍋", price: "價格", src: require("@/assets/img/porduct001.gif") },
        { productName: "標題", description: "【Future】Pressure Pump 蓄能充氣機", price: "價格", src: require("@/assets/img/porduct002.gif") },
        { productName: "標題", description: "【Future】Nion 負離子燙髮梳", price: "價格", src: require("@/assets/img/porduct003.gif") },
        { productName: "標題", description: "【FUTURE】PlasmaClock 等離子數位時鐘", price: "價格", src: require("@/assets/img/porduct004.gif") }
      ]
    };
  }
};
</script>
<style src="./futureTech.css" scoped></style>