import React from "react";
//import './_header.css'

const Header = () => {
  return (
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Online Book reading site</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="/Home">Home</a></li>
      <li><a href="/Login">Login</a></li>
      <li><a href="/register">Sign Up</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
  );
};
export default Header;
