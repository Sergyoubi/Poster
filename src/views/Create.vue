<template>
  <div class="w-screen h-screen bg-purple-700">
    <Header/>
    <div class="text-center font-bold text-2xl m-10 text-white">Add New Post</div>
    <form @submit.prevent="createNewPost">
      <div class="mt-10 mx-auto w-10/12 rounded-2xl flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl bg-white">
        <input type="text" required class="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" v-model="title" spellcheck="false" placeholder="Title">
        <input type="text" required class="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" v-model="author" spellcheck="false" placeholder="Author">
        <textarea required class="bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" v-model="content" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
        <div class="flex justify-end mt-5">
          <input type="submit" value="Add Post" class="border border-gray-200 rounded-xl py-2 px-4 font-thin cursor-pointer text-sm text-white ml-2 bg-indigo-600">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {Header},
  data() {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  methods: {
    createNewPost() {
      const newPost = { title: this.title, author: this.author, content: this.content }

      fetch('http://localhost:4000/api/create/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( newPost )
      })
        .then(res => res.json())
        .then(data => {
          console.log('Success: New post added')
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 
        
      
      this.$router.push({ name: 'Create' });

      //convert data properties back into empty strings
      this.title = ''
      this.author = ''
      this.content = ''
    }  
     
  }
}      

</script>

<style></style>