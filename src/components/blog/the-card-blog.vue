<template>
  <div class="card">
    <div class="card-content">
      <img :src="post.ImageUrl" alt="Image" class="card-image">
      <div class="card-text">
        <h2>{{ post.CategoryBlog }}</h2>
        <p>{{ post.Title }}</p>
        <p>{{ post.SubTitle }}</p>
        <p>Role: {{ post.RoleBlog }}</p>
        <p>Read Time: {{ post.ReadTimeMinutes }} minutes</p>
        <button class="info-button" @click="showModal">Read More</button>
      </div>
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
  },
  methods: {
    showModal() {
      this.$emit('view-more', this.post); // Emitir evento con el post completo
    }
  }
}
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  margin: 10px;
  width: 300px;
}

.card-content {
  display: flex;
}

.card-image {
  width: 50%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.card-text {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info-button {
  display: inline-block;
  margin-top: auto; /* Alinea el botón al final del contenedor de texto */
  padding: 10px 15px;
  color: #fff;
  background-color: #75aa9c;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.info-button:hover {
  background-color: #5c887b;
}
</style>
