<template>
  <div class="content-wrap">
    content
    <router-link :to="{name:'index'}">index</router-link>
    <router-link :to="{name:'test'}">test</router-link>
    <router-link :to="{name:'test1'}">test1</router-link>
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
.content-wrap{
  height: 100%;
}
</style>
