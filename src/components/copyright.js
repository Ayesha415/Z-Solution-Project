import React from 'react';
import './copyright.css';

class Copyright extends React.Component{
    render()
    {
      return(
    <div className="copyright-section">
     <div className="container">
         <div className="row">
             <div className="col-sm-12 text-center">
                 <p>Copyright 2018 IZI Solution All Rights Reserved</p>
                 <ul className="footer-ul">
                   <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                   <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                   <li><a href="#"><i class="fa fa-google-plus-g"></i></a></li>
                   <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
    </div> 
  );
}
}

export default Copyright;
