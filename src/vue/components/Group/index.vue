<template>
  <div class="ui-group">
    <slot></slot>
  </div>
</template>
<style lang="less">
  @import "../../styles/mixin";
  .ui-group{
    position: relative;
    &:before{
      .setBorderTop;
    }
    &:after{
      .setBorderBottom;
    }
  }
</style>
