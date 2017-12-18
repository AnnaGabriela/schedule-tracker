<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login';

export default {
  components: {
    Login,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
</style>
