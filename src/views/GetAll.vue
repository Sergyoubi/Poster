<template>
  <p class="relative top-12 text-center font-bold text-2xl m-5 text-gray-400">List of available Post</p>
  <div class="flex flex-col">
    
    <div class="w-full overflow-x-auto sm:-mx-6 lg:mx-auto lg:mt-12">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full">
            <thead class="bg-purple-700">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Comment
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">       
                <tr v-for="result in results" :key="result.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-500 uppercase">
                            {{ result.title }}         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-500">
                            {{ result.author }}         
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-500">
                            {{ result.content }}         
                          </div>
                        </div>
                      </div>
                    </td> 
                    <td class="px-4 py-2 hover:bg-gray-100 whitespace-nowrap text-center text-sm font-medium">
                      <router-link :to="{ name:'GetOnePost', params: { id: result.id } }">
                        <div class="lg:p-3 text-indigo-600">Edit</div>     
                      </router-link>                   
                    </td> 
                    <td class="px-4 py-2 whitespace-nowrap text-center text-sm font-medium hover:bg-red-50">
                      <router-link :to="{ name:'Delete', params: { id: result.id } }">
                        <div class="lg:p-3 text-indigo-600">Delete</div>     
                      </router-link>                   
                    </td>             
                </tr>                                
            </tbody>
          </table>
        </div>
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

<style> </style>



