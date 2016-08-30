<template>
  <div id="app" class="app-wrap">
    <!-- header -->
    <router-link :to="{name:'index'}">
      <header>
        demo
      </header>
    </router-link>

    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>
<style lang="scss">
body{
  background-color: #ebeff0;
}
.app-wrap{
  font-size: 32px;/*px*/
  header{
    height: 100px;
    background-color: #34352c;
    color:#fff;
    line-height: 100px;
    text-align: center;
    font-size: 36px;/*px*/
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
