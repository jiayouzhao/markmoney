<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/share.scss";

#app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
  line-height:1.5;
}
</style>
