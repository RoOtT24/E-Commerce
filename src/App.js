import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import PageNotFound from './components/PageNotfound/PageNotFound';
import CategoryProduct from './components/CategoryProduct/CategoryProduct';
import Details from './components/Details/Details';
import { ProtectedRoutes } from './components/ProtectedRoutes/ProtectedRoutes';
import { UnProtectedRoutes } from './components/UnProtectedRoutes/UnProtectedRoutes';
import { Login } from './components/Login/login';
import { Register } from './components/Register/Register';
import { useState } from 'react';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Slider from './components/Slider/Slider';

function App() {
  const [token,setToken] = useState()
  const [loading, setLoading] = useState(true)

  return (
   <div style={{height:'100vh'}}>
   <Navbar/>
   {/* <Header/> */}

   <Routes>
    {/* <Route element={<ProtectedRoutes/> }> */}
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/products/product/:id' element={<Details/>}></Route>
    <Route path='/category/:name' element={<CategoryProduct/>}></Route>
    <Route path='/category/:name/:id' element={<Details/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    {/* </Route> */}




    {/* <Route element={<UnProtectedRoutes/> }> */}
    <Route to='/login' element={<Login/>}></Route>
    <Route to='/register' element={<Register/>}></Route>
    {/* </Route> */}

   </Routes> 
   <Footer/>
   </div>
  // <Loader/>
  );
}

export default App;

