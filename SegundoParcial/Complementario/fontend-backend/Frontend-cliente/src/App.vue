<template>
  <nav  class="nav bg-primary d-flex align-items-center justify-content-end ">
    <router-link to="/" class="text-decoration-none text-white fs-3 mx-5">Complementario-3</router-link> |
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav{
  height: 75px;
}

</style>
