import React from "react";
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';
// import Categorie from "./components/categoriesBar/Categorie";
// import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserRegister from './pages/Sign-Up';
import Login from './pages/Login'
import Home from "./pages/HomeScreen";
import BookList from "./pages/Book-List";
import BookCreate from "./pages/Book-Create";
import BookDelete from "./pages/Book-Delete";


function App() {
  return (
<BrowserRouter>
 <Routes>
  <Route path="/bookcreate" element={<BookCreate/>}/>
  <Route path='/home' element={<Home/>} />
  <Route path='/register' element={<UserRegister/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path="/getBooks" element={<BookList/>}/>
  <Route path="/deleteBoos" element={<BookDelete/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
