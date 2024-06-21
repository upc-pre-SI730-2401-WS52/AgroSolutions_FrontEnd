<template>
  <header>
    <the-header-session-component/>
  </header>
  <br/>
  <br/>
  <br/>

  <main>
    <div>
      <h1>Blog Posts</h1>
      <div class="blog-list">
        <CardBlog v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>  </main>
  <footer>
    <TheFooter/>
  </footer>
</template>

<script>
import TheHeaderSessionComponent from "@/components/elements/the-header-session.component.vue";

import CardBlog from '@/components/blog/card-blog.vue';
import BlogApiService from '@/services/blog-api.service.js';
import TheHomeTable from "@/components/peding-task/the-peding-table.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";


export default {
  name: 'TheBlog',
  components: {
    TheFooter, TheHomeTable,
    TheHeaderSessionComponent,
    CardBlog
  },
  data() {
    return {
      posts: []
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
        console.error('Error fetching posts:', error);
      }
    }
  }
}
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

main {
  padding-top: 0px; /* Ajuste para subir el main */
  padding-bottom: 150px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(248, 249, 250, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

footer {
  background-color: #4f4d4d;
  padding: 10px 0 10px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>