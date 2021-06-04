<template>
  <div class="w-screen">
    <div class="w-9/12 h-full mx-auto">
      <form @submit.prevent="createNewPost">
        <div class="w-6/12 flex justify-around mx-auto mt-20">
          <label>Title</label>
          <input type="text" v-model="title" required class="w-3/4 border border-gray-600">
        </div>

        <div class="w-6/12 flex justify-around mx-auto mt-20">
          <label>Author</label>
          <input type="text" v-model="author" required class="w-3/4 border border-gray-600">
        </div>

        <div class="w-6/12 flex justify-around mx-auto mt-20">
          <label>Contents</label>
          <textarea required v-model="content" class="w-3/4 border border-gray-600"></textarea>
        </div>

        <div class="mt-10">
          <input type="submit" value="Add New Content" class="w-7/12 p-2 rounded-lg bg-green-400">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
        
      //redirect to create route
      this.$router.push({ name: 'Create' });

      //convert data properties back into empty strings
      this.title = ''
      this.author = ''
      this.content = ''
    }  
     
  }
}      

</script>

<style> </style>