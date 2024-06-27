import axios from 'axios';

const API_URL = 'http://localhost:3000/blog';

class BlogApiService {
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
        return await http.post('blog',body)
    }
}

export default new BlogApiService();
