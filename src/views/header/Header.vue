<template src="./Header.html"></template>

<script>
// 引用模組
import Nav from "@/components/nav/Nav.vue";
import shoppingCar from "@/components/shoppingCar/shoppingCar.vue";

export default {
  // 引用模組
  name: "Header",
  components: {
    Nav,
    shoppingCar
  },
  props: {
    msg: String
  },
  data() {
    return{
      imgclass:''
    }
  },
  methods:{
    childByValue(childValue){
      this.imgclass = childValue
      console.log(this.imgclass)
    }
  }
};
</script>

<style src="./Header.css" scoped></style>
