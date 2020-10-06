import React from 'react';
import './marketing.css';
import right from '../assets/img/right.svg';
class Marketing extends React.Component{
    render()
    {
      return(
    <div className="marketing-section">
    <div class="container">
        <div className="markiting-wrapper">
        <div className="row">
            <div className="col-sm-12">
            <div class="markiting text-center">
            <h2 class="ff-bold">Internet Marketing</h2>
            <p class="ff-reg"> Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery. We are proactive and adaptable group of IT experts.Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery. We are proactive and adaptable group of IT experts.</p>
            </div>
          </div>
        </div>
        <div className="row margin-tb">
            <div className="col-sm-12  col-md-5 offset-md-1">
            <div class="progre">
              <h6 class="text-white pb-2 ff-bold m-lift">On-Site Optimization</h6>
              <div class="line"></div>
            </div>
          </div>
          <div className="col-sm-12  col-md-5">
            <div class="progre">
              <h6 class="text-white pb-2 ff-bold m-lift">Off-Site Optimization</h6>
              <div class="line2"></div>
            </div>
          </div>
        </div>
        <div className="row margin-tb">
            <div className="col-sm-12  col-md-5 offset-md-1">
            <div class="progre">
              <h6 class="text-white pb-2 ff-bold m-lift">Adwords Management</h6>
              <div class="line3"></div>
            </div>
          </div>
          <div className="col-sm-12  col-md-5">
            <div class="progre">
              <h6 class="text-white pb-2 ff-bold m-lift">Google Keyword Planner</h6>
              <div class="line4"></div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-12 text-center">
            <button type="button" class="btn y-btn">View Detail<span class="  ml-3"><img src={right} alt="" /> </span></button> 
          </div>
        </div>
     </div>
   </div>
 </div> 
  );
}
}

export default Marketing;
