<template>
  <div class="ui-cell">
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .ui-cell{
    padding:10px 15px;/*px*/
    /*background-color: #fff*/
    &:before{
      content:' ';
      border-top: 1px solid #ccc;
      position: absolute;
      width: 100%;
      height: 1px;
    }
  }
</style>
