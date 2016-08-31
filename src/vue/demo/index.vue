<template>
  <div class="demo-wrap">
    <group>
      <router-link :to="{name:'input'}" class="ui-cell">input</router-link>
      <router-link :to="{name:'input'}" class="ui-cell">input</router-link>
    </group>
  </div>
</template>
<script>
  import Cell from '../components/Cell'
  import Group from '../components/Group'
  export default {
    components: {
      Cell,
      Group
    }
  }
</script>
<style lang="scss">
  .demo-wrap{
    margin-top: 30px;/*px*/
  }
</style>
