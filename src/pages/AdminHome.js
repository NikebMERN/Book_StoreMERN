import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../config/UserConfigeration';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../components/BookCard';
// import { Button } from 'react-bootstrap';
import '../page.css/AdminHome.css';

const AdminHome = () => {
    const [books, setbooks] = useState([]);
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData?.token) {
            navigate('/login');
        }
    })
    if (userData?.config) {
        loadbooks();
    }
    // const logout = () => {
    //     setUserData({
    //         user: undefined,
    //         token: undefined,
    //         config: undefined,
    //     })
    // }

    async function loadbooks() {
        try {
            const response = await axios.get(`http://localhost:5000/api/books`);
            setbooks(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <center><h2 className='sentence'>Books</h2></center>
            {/* <Button onClick={logout()}>Logout</Button> */}
            <Link to='/upload' className='update'>Add Book</Link>
            {books?.map((book, i) => (
                <BookCard book={book} key={i} />
            ))}
        </div>
    )
}

export default AdminHome