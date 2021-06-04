<template>
  <form @submit.prevent="editData">
    <div class="w-full flex justify-center mx-auto mt-10">
      <label>Title :</label>
      <input type="text" required v-model="title" class="w-2/5 border ml-7 border-gray-600">
    </div>

    <div class="w-full flex justify-center mx-auto mt-10">
      <label>Author :</label>
      <input type="text" required v-model="author" class="w-2/5 border ml-5 border-gray-600">
    </div>

    <div class="w-full flex justify-center mx-auto mt-10">
      <label>Contents :</label>
      <textarea v-model="content" required  class="w-2/5 border border-gray-600"> </textarea>
    </div>

    <div class="mt-10">
      <input type="submit" value="Save Update" class="w-1/5 ml-24 p-2 rounded-lg bg-yellow-300">
    </div>
  </form>
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
    editData() {
      this.$emit('changeContents', this.title, this.author, this.content)
    }
  }
}
</script>

<style>

</style>