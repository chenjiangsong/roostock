<template>
  <div class="demo-wrap">
    <router-link :to="{name:'input'}">
      <cell>input</cell>
    </router-link>
  </div>
</template>
<script>
  import Cell from '../components/Cell'
  export default {
    components: {
      Cell
    }
  }
</script>
<style lang="scss">
  .demo-wrap{
    margin-top: 30px;/*px*/
  }
</style>
