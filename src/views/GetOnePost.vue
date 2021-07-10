<template>
  <div class="w-screen h-screen bg-blue-400">
    <Header/>
    <div class="w-screen">
      <div class="text-center relative top-5 lg:top-0 font-bold text-2xl lg:m-10 text-white">
        Update Post
      </div>
      <div v-if="result" class="relative top-10 lg:top-0">
        <form @submit.prevent="update">
          <div class="editor lg:mt-10 mx-auto w-10/12 rounded-2xl flex flex-col text-gray-800 border border-gray-400 bg-white p-4 shadow-xl max-w-2xl">
            <div class="w-full flex justify-between items-center mb-4">
              <label>Title:</label>
              <input type="text" required class="title w-10/12 bg-gray-50 border border-gray-400 text-gray-800 p-2 outline-none" v-model="title"  :placeholder="result.title">
            </div>
            <div class="w-full flex justify-between items-center mb-4">
              <label>Author:</label>
              <input type="text" required class="title w-10/12 bg-gray-50 border border-gray-400 text-gray-800 p-2 outline-none" v-model="author"  :placeholder="result.author">
            </div>
            <div class="w-full flex justify-between items-start mb-4">
              <label class="mt-3">Comment:</label>
              <textarea required class="bg-gray-50 p-3 w-10/12 h-60 border border-gray-400 text-gray-800 outline-none" v-model="content" spellcheck="true" :placeholder="result.content"> </textarea>
            </div>
            <div class="flex justify-end mt-5">
              <input @click="cancel" type="button" value="Cancel" class="border border-gray-200 rounded-2xl py-2 px-4 font-thin cursor-pointer text-gray-700 ml-2 bg-gray-200 hover:bg-gray-300">
              <input type="submit" value="Save Update" class="border border-purple-700 rounded-2xl py-2 px-4 font-thin cursor-pointer text-white ml-2 bg-purple-700 hover:bg-purple-600">
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
      result: null,
      title: '',
      author: '',
      content: ''
      
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
    update() {

      const editedData = { title: this.title, author: this.author, content: this.content }

      fetch(`http://localhost:4000/api/edit/post/${this.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( editedData )
      })
        .then(res => res.json())

        .then(data => {
          console.log('Update was a Success ')
        })

        .catch((error) => {
          console.error('Error while updating', error);
        }); 
        
      //redirect to /get/post route
      this.$router.push({ name: 'Create' });
            
      this.title = ''
      this.author = ''
      this.content = ''
    },
    cancel() {
      this.$router.push({ name: 'Create' });
    }
  }
}
</script>
  
<style>
  table{
    width: 70%;
    border-collapse: collapse;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
