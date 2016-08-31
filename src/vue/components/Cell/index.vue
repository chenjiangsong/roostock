<template>
  <div class="ui-cell">
    <slot></slot>
  </div>
</template>
<script>
// export default {
//   props: {
//       title: String,
//       desc: String
//     }
//   }
</script>
<style lang="less">
/* @import "../../styles/weui/widget/weui_cell/weui_cell_global"; */
@import "../../styles/mixin";
.ui-cell{
  display: block;
  padding: 10px 15px;
  position: relative;
  background-color: #fff;
  &:before{
    .setBorderTop;
  }
  &:first-child{
    &:before{
      display: none;
    }
  }
}
</style>
