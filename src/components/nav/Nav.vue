<template src="./Nav.html"></template>
<script>
export default {
  name: "Nav",
  props: {
    // msg: String
  },
  data() {
    return {
      navList: [
        { title: "未來科技", url: "/futureTech", imgClass: "futureTech" },
        { title: "未來生活", url: "/futureLife", imgClass: "futureLife" },
        { title: "未來實驗", url: "/", imgClass: "futureExperiments" }
      ]
    };
  },
  computed: {},
  watch: {
    $route() {
      switch (this.$route.name) {
        case "futureTech":
          this.$emit("childByValue", this.navList[0].imgClass);
          console.log(this.navList[0].imgClass);
          break;
        case "futureLife":
          this.$emit("childByValue", this.navList[1].imgClass);
          console.log(this.navList[1].imgClass);
          break;
      }
    }
  },
  methods: {
    click() {}
  }
};
</script>
<style src="./Nav.css" scoped></style>