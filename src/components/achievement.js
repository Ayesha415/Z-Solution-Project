import React from 'react';
import './achievement.css';
import zImg from '../assets/img/z.svg';
import book1 from '../assets/img/book-1.svg';
import user from '../assets/img/user-1.svg';
import team from '../assets/img/team-m.svg';
class Achievement extends React.Component{
    render()
    {
      return(
    <div className="achievement">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-sm-12 col-md-4">
             <div class="circle ">
            <div class="after">
            <div class="img-z">
           <img src={zImg} class="img-fluid" alt=""/> 
           </div> 
           <h5 class="mt-3 text-white ff-bold after">SOLUTIONS </h5> 
          </div>
           </div>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="achievement-title">
                  <h1>Our Achievements</h1>
                  <p>IZI solutions is a premier, one-stop hub for all modern Business and IT solutions. We bagged   No. ISO 27001:2013 & 9001:2015 certification and also won ‘Customer Satisfaction Award.</p>
              </div>
           </div>
        </div>
        <div className="row margin-top">
         <div className="col-sm-12 col-md-3">
         <div class="time-line">
         <img src={book1} alt="" class="img-fluid" />
        </div>
         </div>
         <div className="col-sm-12 col-md-9">
         <div class="time-title m-top">
         <h3 class="ff-bold m-top">1000+ Successful Projects</h3> 
         <p class="ff-reg">We Don’t Claim High. Our Work Is Our Impression. With the powerhouse of our thriving portfolio we are sailing the high tides of fiercely competitive market uninterrupted.</p> 
         </div>
         </div>
        </div>

        <div className="row achi-row-mar">
         <div className="col-sm-12 col-md-3">
         <div class="time-line">
         <img src={user} alt="" class="img-fluid" />
        </div>
         </div>
         <div className="col-sm-12 col-md-9">
         <div class="time-title m-top">
         <h3 class="ff-bold m-top">150+ Team Members</h3> 
         <p class="ff-reg">Highly energetic and focused team of committed IT, business and marketing professionals. You can</p> 
         </div>
         </div>
        </div>

        <div className="row achi-row-mar">
         <div className="col-sm-12 col-md-3">
         <div class="time-line">
         <img src={team} alt="" class="img-fluid" />
        </div>
         </div>
         <div className="col-sm-12 col-md-9">
         <div class="time-title m-top">
         <h3 class="ff-bold m-top">1000+ Successful Projects</h3> 
         <p class="ff-reg">We Don’t Claim High. Our Work Is Our Impression. With the powerhouse of our thriving portfolio we are sailing the high tides of fiercely competitive market uninterrupted.</p> 
         </div>
         </div>
        </div>
    </div>
    </div> 
  );
}
}

export default Achievement;
