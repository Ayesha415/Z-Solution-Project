import React from 'react';
import './mobile-development.css';
import mobileImg from '../assets/img/mobiel-2.png';
import seo from '../assets/img/seo-images.svg';
import right from '../assets/img/right.svg';
class MobileDevelopment extends React.Component{
    render()
    {
      return(
    <div className="mobile-section">
        <div className="mobile-wrapper">
        <div class="container">
        <div className="row">
        <div className="col-sm-12 col-md-6">
            <div className="mobile-content">
                <h2>Mobile Apps Design<span class="d-block">& Development</span><span class="d-block yellow">Services</span></h2>
               
                <p>We reinforce your business strength through adaptable iOS and Android apps development. We have you covered from design to development, launch, and marketing of simple to intricate mobile apps.</p>
                <p>Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery. We are proactive and adaptable group of IT experts.</p>
                <button type="button" class="btn y-btn">Send Now<span class="  ml-3"><img src={right} alt="" /> </span></button> 
            </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div className="mobile-img">
                <img src={mobileImg} />
            </div>
        </div>
        </div>
    </div> 
  </div>
  <div className="container">
      <div className="row">
          <div className="col-sm-12">
              <div className="seo">
                  <img src={seo} />
              </div>
          </div>
      </div>
  </div>
 </div> 
  );
}
}

export default MobileDevelopment;
