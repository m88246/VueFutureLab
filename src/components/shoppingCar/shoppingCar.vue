<template src="./shoppingCar.html"></template>
<script>
export default {
  name: "shoppingCar",
  data() {
    return {
      product: [
        {
          productName: "城市啞鈴組",
          description: "【Future】UrbanDumbbell 城市啞鈴組",
          price: "價格",
          src: require("@/assets/img/porduct005.gif")
        },
        {
          productName: "原動力強化器",
          description: "【Future】X-Knee 原動力強化器(1對)",
          price: "價格",
          src: require("@/assets/img/porduct006.gif")
        },
        {
          productName: "零負重變型包",
          description: "【FUTURE】FreeZone Plus 零負重變型包",
          price: "價格",
          src: require("@/assets/img/porduct007.gif")
        },
        {
          productName: "零負重背帶",
          description: "【Future】FreeZone 零負重背帶",
          price: "價格",
          src: require("@/assets/img/porduct008.gif")
        }
      ]
    };
  }
};
</script>
<style src="./shoppingCar.css"></style>
