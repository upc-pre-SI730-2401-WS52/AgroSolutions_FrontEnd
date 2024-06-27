<template>
  <div class="card">
    <img :src="post.urlImagen" alt="Image" class="card-image">
    <div class="card-content">
      <h2>{{ post.sector }}</h2>
      <p>{{ post.texto }}</p>
      <a :href="post.link" target="_blank" class="card-button">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlog',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  width: 300px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
}
</style>