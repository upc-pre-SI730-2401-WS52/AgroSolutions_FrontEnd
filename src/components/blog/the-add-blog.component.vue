<template>
  <div>
    <header>
      <the-header-session-component />
    </header>
    <main class="add-blog-form-container" role="form" aria-label="Formulario para agregar un nuevo blog">
      <div class="centered-content">
        <div class="add-blog-form">
          <h2>Agregar Nuevo Blog</h2>

          <div class="form-group">
            <div class="input-label">
              <label for="Title">Título:</label>
            </div>
            <div class="input-field">
              <input type="text" id="Title" v-model="newBlog.Title" required aria-label="Ingrese el título del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="Subtitle">Subtítulo:</label>
            </div>
            <div class="input-field">
              <input type="text" id="Subtitle" v-model="newBlog.subtitle" required aria-label="Ingrese el subtítulo del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="content">Contenido:</label>
            </div>
            <div class="input-field">
              <textarea id="Content" v-model="newBlog.content" rows="6" required aria-label="Ingrese el contenido del blog"></textarea>
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="sxummary">Resumen:</label>
            </div>
            <div class="input-field">
              <input type="text" id="Summary" v-model="newBlog.summary" required aria-label="Ingrese el resumen del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="category">Categoría:</label>
            </div>
            <div class="input-field">
              <input type="text" id="Category" v-model="newBlog.category" required aria-label="Ingrese la categoría del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="role">Rol:</label>
            </div>
            <div class="input-field">
              <input type="text" id="Role" v-model="newBlog.role" required aria-label="Ingrese el rol del autor del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="typeAuthor">Tipo de Autor:</label>
            </div>
            <div class="input-field">
              <input type="text" id="TypeAuthor" v-model="newBlog.typeAuthor" required aria-label="Ingrese el tipo de autor del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="imageUrl">URL de la Imagen:</label>
            </div>
            <div class="input-field">
              <input type="text" id="ImageUrl" v-model="newBlog.imageUrl" required aria-label="Ingrese la URL de la imagen del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="CommentsCount">Cantidad de Comentarios:</label>
            </div>
            <div class="input-field">
              <input type="number" id="CommentsCount" v-model.number="newBlog.commentsCount" required aria-label="Ingrese la cantidad de comentarios del blog" />
            </div>
          </div>

          <div class="form-group">
            <div class="input-label">
              <label for="readTimeMinutes">Tiempo de Lectura (Minutos):</label>
            </div>
            <div class="input-field">
              <input type="number" id="ReadTimeMinutes" v-model.number="newBlog.readTimeMinutes" required aria-label="Ingrese el tiempo de lectura en minutos del blog" />
            </div>
          </div>

          <button @click="addNewBlog" aria-label="Agregar Blog">Agregar Blog</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BlogApiService from "@/shared/services/blog-api.service.js";
import TheHeaderSessionComponent from "@/components/elements/the-header-session.component.vue";
import TheFooter from "@/components/elements/the-footer.component.vue";

export default {
  name: "TheAddBlogComponent",
  components: { TheHeaderSessionComponent, TheFooter },
  data() {
    return {
      newBlog: {
        Title: "",
        Subtitle: "",
        Content: "",
        Summary: "",
        Category: "",
        Role: "",
        TypeAuthor: "",
        ImageUrl: "",
        CommentsCount: 0,
        ReadTimeMinutes: 0,
      },
    };
  },
  methods: {
    async addNewBlog() {
      try {
        await BlogApiService.addPost(this.newBlog);
        alert("Blog agregado correctamente");
        this.clearForm();
      } catch (error) {
        console.error("Error al agregar el blog:", error);
        alert("Error al agregar el blog. Por favor, inténtelo de nuevo.");
      }
    },
    clearForm() {
      this.newBlog = {
        Title: "",
        Subtitle: "",
        Content: "",
        Summary: "",
        Category: "",
        Role: "",
        TypeAuthor: "",
        ImageUrl: "",
        CommentsCount: 0,
        ReadTimeMinutes: 0,
      };
    },
  },
};
</script>

<style scoped>
.add-blog-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.centered-content {
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.add-blog-form {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-label {
  flex: 1;
}

.input-field {
  flex: 3;
}

label {
  margin-bottom: 5px;
  display: block;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

select {
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 15px;
  background-color: #75aa9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5c8677;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #ffffff;
  padding: 10px 0;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #4f4d4d;
  padding: 10px 0;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
</style>
