import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../page.css/AdminHome.css';
import axios from 'axios';

const BookCard = ({ book }) => {
  // console.log(book.book_id);
const onDelet = async () => {
  console.log(book.book_id);
  try {
    const response = await axios.delete(`http://localhost:5000/api/books`, {id: book.book_id});
    console.log(response);
    return alert('Book Deleted Succsefully');
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
}

  return (
    <Card className="my-3 frgr">
      <Card.Body className='mmm m-3'>
        <Card.Title>Title: {book.title}</Card.Title>
        <Card.Text>Author: {book.author}</Card.Text>
        <Card.Text>Catagorey: {book.category}</Card.Text>
        <Card.Text>Description: {book.description}</Card.Text>
        <Card.Text>File Path: <a href={book.filepath} target='_blank'>{book.filepath}</a></Card.Text>
      </Card.Body>
      <Button  variant="danger" onClick={onDelet}>
          Delete
        </Button>
    </Card>
  );
};

export default BookCard;
