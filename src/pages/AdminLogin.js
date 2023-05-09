import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../config/UserConfigeration';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../page.css/AdminLogin.css';

const AdminLogin = () => {
    const [userData, setUserData] = useContext(UserContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) =>{
        console.log(data);
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
              email: data.email,
              password: data.pass,
            });
            setUserData({
                token: response.data.token,
                user: data,
                config: {
                  headers: { "x-auth-token": response.data.token },
                },
              });
        
              //set localStorage with the token
              localStorage.setItem("auth-token", response.data.token);
              navigate('/');
          } catch (error) {
            console.error(error);
          }
        console.log(userData);
    }

    return (
        <div className='hollo'>
        <center>
        <h1 className='white'>Please Authenticate your admin account.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { require: true })} placeholder='Email' className='shape' />
                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                <br />
                <input type="password"  {...register("pass", { require: true })} placeholder='Password' className='shape' />
                {errors.pass?.type === 'required' && <p role="alert">Password is required</p>}
                <br />
                <Button type='submit' className='px-5'>Login</Button>
            </form>
        </center>
        </div>
    )
}

export default AdminLogin