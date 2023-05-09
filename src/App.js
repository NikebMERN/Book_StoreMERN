import React, { useContext, useEffect } from 'react'
import AdminLogin from './pages/AdminLogin';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserContext } from './config/UserConfigeration';
import AdminHome from './pages/AdminHome';
import AdminUploadBook from './pages/AdminUploadBook';

const App = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(!userData?.token) {
      navigate('/login');
    }
  }, [])

  return (
    <>
    <Routes>
       <Route path='/login' element={<AdminLogin /> } />
       <Route index element={<AdminHome /> } /> 
       <Route path='/upload' element={<AdminUploadBook /> } /> 
    </Routes>
    </>
  )
}

export default App;