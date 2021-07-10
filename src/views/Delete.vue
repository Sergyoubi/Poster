<template>
  <div class="w-screen h-screen bg-blue-400">
    <Header/>
    <div class="w-screen">
      <div class="text-center invisible md:visible md:top-20 lg:visible font-bold text-2xl lg:m-10 text-white">
        Delete Post
      </div>
      <div v-if="result" class="md:relative md:top-12 lg:top-0">
        <form @submit.prevent="deletePost">
          <div class="editor lg:mt-10 mx-auto w-10/12 rounded-2xl flex flex-col text-gray-800 border border-gray-400 bg-white p-4 shadow-xl max-w-2xl">
            <div class="w-full flex justify-between items-center mb-4">
              <label>Title:</label>
              <input type="text" readonly class="title w-10/12 border border-gray-400 text-gray-800 p-2 outline-none" :value="result.title">
            </div>
            <div class="w-full flex justify-between items-center mb-4">
              <label>Author:</label>
              <input type="text" readonly class="title w-10/12  border border-gray-400 text-gray-800 p-2 outline-none" :value="result.author">
            </div>
            <div class="w-full flex justify-between items-start">
              <label class="mt-3">Comment:</label>
              <textarea readonly class="p-3 w-10/12 h-60 border border-gray-400 text-gray-800 outline-none"  spellcheck="true" :value="result.content"> </textarea>
            </div>
            <div class="flex justify-end mt-5">
              <input @click="cancel" type="button" value="Cancel" class="border border-gray-200 rounded-2xl py-2 px-4 font-thin cursor-pointer text-gray-700 ml-2 bg-gray-200 hover:bg-gray-300">
              <input type="submit" value="Delete" class="border border-purple-700 rounded-2xl py-2 px-4 font-thin cursor-pointer text-white ml-2 bg-purple-700 hover:bg-purple-600">
            </div>
          </div>
        </form>
      </div>
      <div v-else class="text-lg text-gray-600 mt-52">
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {Header},
  data() {
    return {
      id: this.$route.params.id,
      result: null
    }
  },
  mounted() {
    fetch(`http://localhost:4000/api/post/${this.id}`)
      .then(res => res.json())
      .then(data => {
        this.result = data.data
      })
      .catch(err => console.log(err.message))
  },

  methods: {

    deletePost() {

      const confirmDeletion = confirm('Are you sure you want to delete this content?')

      if (confirmDeletion) {
        fetch(`http://localhost:4000/api/delete/post/${this.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })

          .then( res => res.json() )

          .then(data => {
            console.log(`${data.data.id} was successfully deleted`)
          })

          .catch((error) => {
            console.error(`Error while deleting: ${error}` )
          }); 

        //redirect to /get/post route
        this.$router.push({ name: 'Create' });
      }  
    },
    cancel() {
      this.$router.push({ name: 'Create' });
    }
  }
}
</script>

<style>

</style>