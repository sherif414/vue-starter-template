<template>
  <div v-if="false">
    <router-link to="/">index</router-link>/
    <router-link to="/explore/">explore</router-link>/
    <router-link to="/login/">login</router-link>
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html::-webkit-scrollbar {
  display: none;
}
</style>
