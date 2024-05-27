<template>
  <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
</style>
