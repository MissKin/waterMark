

<template>
  <div id="app">
    <Applink @handleJump="handleJump"></Applink>
  </div>
</template>

<script>
import Applink from "./components/Applink.vue";

export default {
  name: "App",
  components: {
    Applink
  },
  data() {
    return {
      src: require("./assets/avatar.jpeg")
    };
  },
  mounted() {},
  methods:{
    handleJump(code){
      console.log(code,'code');
    }
  }
};
</script>

<style>
#app > div {
  vertical-align: top;
}
</style>
