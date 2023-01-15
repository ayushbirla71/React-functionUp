import React from "react";
import { useNavigate } from "react-router-dom";
// import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';
// import Categorie from "./components/categoriesBar/Categorie";
// import HomeScreen from "./pages/HomeScreen";

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div class="jumbotron text-center">
        <h1>My First Book-Managment Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h3>New books</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div class="col-sm-4">
            <h3>Novels</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
          <div class="col-sm-4">
            <h3>Storys</h3>
            <p>Lorem ipsum dolor..</p>
          </div>
        </div>
      </div>
      {/* <div>
        <button id="signup" onClick={()=>{navigate("/register")}}>sign up</button>
        <button id="login" onClick={()=>{navigate("/login")}}>login</button>
        <button id="Home" onClick={()=>{navigate("/Home")}}>Home</button>
        <button id="booklist" onClick={()=>{navigate("/getBooks")}}>bookdetails</button>
        <button id="signup" onClick={()=>{navigate("/register")}}>sign up</button>
        <button id="login" onClick={()=>{navigate("/login")}}>login</button>
        <button id="" onClick={()=>{navigate('/bookcreate')}}>Creat book</button>

     
      </div> */}
    </>
  );
}

export default Home;
