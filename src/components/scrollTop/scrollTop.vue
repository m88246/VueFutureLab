<template src="./scrollTop.html"></template>

<script>
export default {
  name: "scrollTop",
  methods: {
    clickTop() {
        var timer  = null;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            timer = requestAnimationFrame(fn);
            }else{
                cancelAnimationFrame(timer);
            }
        }); 
    }
  }
};
</script>
<style src="./scrollTop.css" scoped></style>
//123456