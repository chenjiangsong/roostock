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

.app-wrap{
  font-size: 20px;/*px*/
  header{
    height: 64px;
    background-color: #4c9da0;
    color:#fff;
    line-height: 64px;
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
