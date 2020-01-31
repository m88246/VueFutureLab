<template src="./Home.html"></template>
<script>
export default {
    name:'Home',
    data() {
        return {
            active:0,
            timer:0,
            imgList:[
                require("@/assets/img/banner1.webp"),
                require("@/assets/img/banner2.webp"),
                require("@/assets/img/banner3.webp"),
                require("@/assets/img/banner4.webp")
            ]
        }
    },
    computed: {
        total() {
            return this.imgList.length
        }
    },
    methods: {
        change(index) {
            this.active = (index + this.total) % this.total
        }
    },
    created() {
        this.timer = setInterval(()=>{
            this.active = (this.active+1)% this.total
        },5000)
  }
    
}
</script>
<style src="./Home.css" scoped></style>
