<template>
  <div id="app">
    <div id="nav">
      <div>
        页面级：
        <a href="/">community</a> |
        <a href="/user.html">user</a>
      </div>
      user页面子路由级：
      <router-link to="/">index</router-link> |
      <router-link to="/demo">Demo</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  background-color: @bg_color;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
