<template>
  <div class="w-screen h-screen">
    <div v-if="result">
      <div class="flex justify-center">
        <table class="mt-20">
          <tr class="text-xl text-gray-600">
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
          </tr>
          <tr class="text-gray-600">
            <td> {{result.title}} </td>
            <td> {{result.author}} </td>
            <td> {{result.content}} </td>
            <td @click="EditToggle" class="bg-yellow-300 border-separate text-center text-gray-700 font-medium hover:bg-yellow-200">
              <span v-if="edit">Hide Edit Form</span>
              <span v-else>Edit</span>
            </td>
            <td @click="deleteContent" class="bg-red-400 border-separate text-center text-gray-700  font-medium hover:bg-red-500"> Delete </td>
          </tr>
        </table>
      </div>
      <div v-if="edit">
          <Edit @changeContents="updateContents"/>
      </div>
    </div>
    <div v-else class="text-2xl text-gray-600 mt-52">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>

import Edit from './partials/Edit.vue'

export default {

  components: { Edit },
  data() {
    return {
      id: this.$route.params.id,
      result: null,
      edit: false,
      editedTitle: '',
      editedAuthor: '',
      editedContent: '',
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

    EditToggle() {
      this.edit = !this.edit
    },

    hideBack() {
      this.edit = !this.edit
    },

    updateContents(title, author, content) {
      //assign each ppty to sended data
      this.editedTitle = title
      this.editedAuthor = author
      this.editedContent = content

      const editedData = { title: this.editedTitle, author: this.editedAuthor, content: this.editedContent };

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
            
      this.editedTitle = ''
      this.editedAuthor = ''
      this.editedContent = ''
      
    },

    deleteContent() {
     
      const confirmDeletion = confirm('Are you sure you want to delete this content?')

      if (confirmDeletion) {
      
        fetch(`http://localhost:4000/api/delete/post/${this.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })

          .then( res => res.json() )

          .then(data => {
            console.log(`${data} was successfully deleted`)
          })

          .catch((error) => {
            console.error(`Error while deleting: ${error}` )
          }); 

        //redirect to /get/post route
        this.$router.push({ name: 'Create' });
      }
    
      
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