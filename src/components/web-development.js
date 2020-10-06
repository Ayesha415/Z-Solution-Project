import React from 'react';
import './web-development.css';
import webImg from '../assets/img/imag-2.png';
import right from '../assets/img/right.svg';
class WebDevelpment extends React.Component{
    render()
    {
      return(
    <div className="web-section">

    <div class="container">
        <div className="web-wrapper">
        <div className="row">
            <div className="col-sm-12 text-center">
                <div className="speacialized-title">
                 <h1>Specialized</h1>
                 <p>in Mentoring Digital Presence of All Sorts of Businesses</p>
                </div>
              
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="web-content">
                  <div className="web-text">
                      <h2>
                        Web Design 
                        <span>& Development</span>
                        <span className="text-green">Services</span>
                      </h2>
                  </div>
                  <div className="web-img">
                      <img src={webImg} />
                  </div>
                </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
          </div>
          <div className="col-sm-12 col-md-6">
              <div className="special-content text-center">
                  <p>We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. </p>
                  <button type="button" class="btn y-btn text-center">View Details<span class="  ml-3"><img src={right} alt="" /> </span></button>
              </div>
          </div>
          <div className="col-sm-3">
          </div>
        </div>
    </div> 
    </div>
 </div> 
  );
}
}

export default WebDevelpment;
