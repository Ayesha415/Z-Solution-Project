import React from 'react';
import './header.css';
import logo from '../assets/img/logo.svg';
import bar from '../assets/img/bar.svg';
import img from '../assets/img/img.png';


class Header extends React.Component{
    render()
    {
      return(
    <div className="header-section">
      <div class="container-fluid">
          <div className="row">
              
              <div className="col-sm-12">
              <nav class="navbar navbar-default navbar-expand-sm bg-nav">
              <strong><a class="navbar-brand" href="#"><img src={logo} class="img-fluid" alt="logo"  />  </a></strong>
            
              <ul class="navbar-nav ml-auto contact-btn">
              <li class="nav-item">
              <a class="nav-link ff-bold btn btn-outline-light  btn-c contact" href="#">Contact</a>
              </li>
              </ul>
              
             <div class="pos-f-t head-menu">
              <button class="navbar-toggler menu-btn-icon" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src={bar} class="icon icon--hamburger menu-btn-2 h--right" alt="" /> 
                </button>
              <div class="collapse head-menu-panel" id="navbarToggleExternalContent">
                <ul class="nav-bar-menu bg-white p-4">
                    <li class="panel-close-btn"><a href="#"  data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent">&times;</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Abot</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Hire</a></li>
                </ul>
                </div>
                
                </div>
             </nav>

              </div>   
          </div>
         
       </div> 
       
       <div class="container">
           <div className="row">
               <div className="col-sm-12">
               <div class="banner">
           <div class="banner-content text-center">
           <h1>peak of creativity</h1>
           <p>Creative, Strategic & ROI Driven Solutions</p> 
           <div class="img-banner">
           <img src={img} class="img-fluid"  alt="" /> 
           </div> 
           </div>
           </div>
               </div>
           </div>
       </div>   
       </div>
  );
}
}

export default Header;
