import axios from 'axios';

const API_URL = 'http://localhost:3000/blog';

export class BlogApiService {
    async getPosts() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    async addPost(blogData) {
        try {
            const response = await axios.post(API_URL, blogData);
            return response.data;
        } catch (error) {
            console.error('Error al agregar el post:', error);
            throw error; // Lanza el error para que el componente que llama maneje la excepción
        }
    }
}
export default new BlogApiService();