<template>
  <div>
    <div class="w-screen h-10 bg-purple-700">
      <div class="w-7/12 h-full mx-auto items-center flex justify-around text-white">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Create'}">Create New Post</router-link>
        <router-link :to="{name: 'GetAll'}">Contents</router-link>
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>
