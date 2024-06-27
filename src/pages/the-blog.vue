<template>
  <div>
    <header v-if="!selectedPost">
      <the-header-session-component />
    </header>
    <main class="main-content">
      <div>
        <h1 class="blog-title">Blog Posts</h1>
        <button class="add-post-button" @click="addNewPost">
          <i class="fas fa-plus-circle"></i> Add New Post
        </button>
        <div class="blog-list">
          <CardBlog v-for="post in posts" :key="post.id" :post="post" @view-more="showPostModal(post)" />
        </div>
      </div>
    </main>
    <footer v-if="!selectedPost">
      <TheFooter />
    </footer>
    <BlogInfoModal v-if="selectedPost" :post="selectedPost" @close="closePostModal" />
  </div>
</template>

<script>
import TheHeaderSessionComponent from "@/components/elements/the-header-session.component.vue";
import CardBlog from "@/components/blog/the-card-blog.vue";
import BlogInfoModal from "@/components/blog/the-blog-information.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";
import BlogApiService from "@/shared/services/blog-api.service.js";

export default {
  name: "TheBlog",
  components: {
    TheHeaderSessionComponent,
    CardBlog,
    BlogInfoModal,
    TheFooter,
  },
  data() {
    return {
      posts: [],
      selectedPost: null,
      isModalOpen: false, // Nuevo estado para controlar si el modal está abierto
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const data = await BlogApiService.getPosts();
        this.posts = data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    showPostModal(post) {
      this.selectedPost = post;
      this.isModalOpen = true; // Marca que el modal está abierto
      document.body.style.overflow = "hidden"; // Oculta el scroll del body
    },
    closePostModal() {
      this.selectedPost = null;
      this.isModalOpen = false; // Marca que el modal está cerrado
      document.body.style.overflow = "auto"; // Restaura el scroll del body
    },

    addNewPost() {
       this.$router.push('/new-post');
    },
  },
};
</script>

<style scoped>
.main-content {
  padding-top: 50px;
  padding-bottom: 150px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 105px;
  max-width: 1200px;
  margin: 0 auto;
}

header, footer {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #4f4d4d;
  padding: 10px 0;
  font-size: 15px;
  color: #737373;
}

header {
  top: 0;
}

footer {
  bottom: 0;
}

.blog-title {
  font-size: 48px;
  color: #75aa9c;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #75aa9c;
  padding-bottom: 10px;
  padding-top: 10px;
}

body.modal-open {
  overflow: hidden;
}

header.modal-open, footer.modal-open {
  display: none;
}
.add-post-button {
  margin-left: 20px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #34343a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.add-post-button:hover {
  background-color: #436359;
}

body.modal-open {
  overflow: hidden;
}

header.modal-open,
footer.modal-open {
  display: none;
}
</style>
