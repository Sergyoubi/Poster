<template>
  <div class="w-screen h-screen bg-green-300 flex justify-center items-center">
    <div class="w-8/12 h-4/6 bg-white">
      <p class="text-gray-700 text-4xl mt-5">All contents <span class="text-2xl text-gray-600">({{postsNumber}})</span>:</p>
      <div v-for="result in results" :key="result.id">
        <router-link :to="{ name:'GetOnePost', params: { id: result.id } }">
            <p class="bg-gray-200 w-11/12 rounded-xl text-xl p-2 mx-auto my-2"> {{ result.title }} </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [ ],
      postsNumber: null
    } 
  },
  mounted() {
    fetch('http://localhost:4000/api/post')
      .then(res => res.json())
      .then(data => {
        this.results = data.data
        this.postsNumber = data.data.length
      })
      .catch(err => console.log(err.message))
  },
  methods: {}
}
</script>

<style>

</style>