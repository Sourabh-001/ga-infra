// Navbar.js
import React from 'react';
import "./Navbar.css"
import logo from '../assets/ga_infra-removebg-preview.png';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm ">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)"><img src={logo} alt="Logo" height={30} width={50}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Link</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default Navbar;
