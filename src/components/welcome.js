import React from 'react';
import './welcome.css';
import right from '../assets/img/right.svg';
class Welcome extends React.Component{
    render()
    {
      return(
    <div className="welcome-section">
    <div class="container">
        <div class="btn-row"><div class=""><button type="button" class="btn y-btn">How We Are<span class="  ml-3"><img src={right} alt="" /> </span></button><button type="button" class="btn b-btn">Check Portfolio<span class="ml-3"><img src={right} alt="" /> </span></button></div></div>
        <div className="row">
         <div className="col-sm-12 text-center">
             <div className="welcome-content">
             <h2>Welcome to IZI Solutions</h2>
             <h3>We help add value through technology, custom built for your needs.</h3> 
             <p>We build affordable technology solutions for businesses, large & small. By applying modern design principles along with the latest in mobile & web technologies, we create tailored solutions that add value by connecting people with each other, businesses with their customers, and decision makers with valuable information, while simplifying business processes, accelerating production, and lowering costs.</p>
             </div>
         </div>
        </div>
    </div> 
 </div> 
  );
}
}

export default Welcome;
