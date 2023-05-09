import axios from "axios";

const API_URL = "http://localhost:5000/api";




export const deleteBook = async (bookId) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBookById = async (bookId) => {
  try {
    const response = await axios.get(`${API_URL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
