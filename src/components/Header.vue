<template>
  <div class="w-full lg:w-7/12 h-10 mx-auto items-center flex justify-around text-white">
    <router-link :to="{name: 'Home'}"><p class="text-white">Home</p></router-link>
    <router-link :to="{name: 'Create'}"><p class="text-white">Create New Post</p></router-link>
    <router-link :to="{name: 'GetAll'}"><p class="text-white">Contents</p></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>