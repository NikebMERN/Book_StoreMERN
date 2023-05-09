import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../page.css/AdminUpload.css';
import { Button } from 'react-bootstrap';

function AdminUploadBook() {
  const [book, setBook] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!book || !title || !author || !category || !desc) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/books', {
        title,
        author,
        category,
        description: desc,
        pdfUrl: book
      });
        console.log(response?.data)
      alert('Book uploaded successfully!');
      navigate('/');
    } catch (err) {
      console.log(err.message);
      alert('Error uploading book. Please try again later.');
    }
  };

  return (
    <div className='happy'>
      <h1>Upload a new book</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="book">Book (PDF file):</label>
        <input type="text" id="book" value={book} onChange={(e) => setBook(e.target.value)} />
        <br />
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <br />
        <label htmlFor="category">Description:</label>
        <textarea type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} style={{
                  marginTop: "15px",
                  height: "200px",
                  width: "100%",
                  borderRadius: "10px",
                  padding: "10px 15px",
                }} />
        <br />
        <Button type="submit" className='ml-4 p-3'>Upload</Button>
      </form>
    </div>
  );
}

export default AdminUploadBook;
