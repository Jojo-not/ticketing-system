import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Laravel API URL

const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPost = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getPosts, getPost };
