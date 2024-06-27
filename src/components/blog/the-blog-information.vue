<template>
  <div class="blog-info-modal">
    <div class="modal-content">
      <img :src="post.ImageUrl" alt="Blog Image" class="blog-image">
      <p class="info-text">Title: {{ post.Title }}</p>
      <p class="info-text">Subtitle: {{ post.Subtitle }}</p>
      <p class="info-text">Content: {{ post.Content }}</p>
      <p class="info-text">Summary: {{ post.Summary }}</p>
      <p class="info-text">Category: {{ post.CategoryBlog }}</p>
      <p class="info-text">Author Role: {{ post.RoleBlog }}</p>
      <p class="info-text">Read Time: {{ post.ReadTimeMinutes }} minutes</p>
      <p class="info-text">Comments Count: {{ post.CommentsCount }}</p>
      <button @click="$emit('close')">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogInfoModal',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
}
</script>


<style scoped>
.blog-info-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 16px;
  border-radius: 15px;
  text-align: left;
  width: 50%;
  max-width: 80%;
}


.blog-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}

.info-text {
  margin: 8px 0;
  font-size: 16px;
}

button {
  margin-top: 16px;
  background-color: #75aa9c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #5c887b;
}
</style>
