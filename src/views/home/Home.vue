<template src="./Home.html"></template>
<script>
export default {
    name:'Home',
    data() {
        return {
            active:0,
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
    }
    
}
</script>
<style src="./Home.css" scoped></style>
