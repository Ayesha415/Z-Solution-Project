import React from 'react';
import './project.css';
import right from '../assets/img/right.svg';
import zlogo from '../assets/img/z-samll.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team from "../assets/img/team-1.png";
import team2 from "../assets/img/team-2.png";
import Slider from "react-slick";
class Project extends React.Component{
    render()
    {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
      return(
    <div className="project-section">
     <div className="container">
         <div className="row">
             <div className="col-sm-12 text-center">
                 <h4>Ready to Start Your Project<span className="yellow">Now?</span></h4>
                 <button type="button" class="btn y-btn">How We Are<span class="  ml-3"><img src={right} alt="" /> </span></button> 
                  <div className="z-logo"><img src={zlogo} /></div>

             </div>
         </div>
         <div className="row">
           <div className="col-sm-12 text-center">
             <h5 className="text-white">Our Client Love With Us</h5>
           </div>
           <div className="col-sm-12">
           <Slider {...settings}>

            <div className="slide">
            <div class="media project-slide-media project-slide-border">
            <div class="media-body project-slide-content media-right">
            <p>Pellentesque mattis neque nulla, et pharetra magna vulputate sed surabitur at felis ac lectus pellentesque vehicula. Suspendisse potenti xiuspendisse potenti ras et accumsan ipsum.</p>
            </div>
            </div>
            <div className="project-slide-img">
            <div className="img-content text-right">
              <span> Dirk S.K.  (Italy)</span>
              <p>Mar 03,2020</p>
            </div>
            <img src={team} />
            </div>
            </div>

            <div className="slide">
            <div class="media project-slide-media">
            <div class="media-body project-slide-content media-left">
            <p>Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat. Aliquam ornare justo sit amet mi faucibus, eget bibendum urna vene mus fringil lnatis.</p>
            </div>
            </div>
            <div className="project-slide-img2 text-left">
            <img src={team2} />
            <div className="img-content">
              <span> Kevin  (USA)</span>
              <p>Mar 04,2020</p>
            </div>
            </div>
            </div>

            <div className="slide">
            <div class="media project-slide-media project-slide-border">
            <div class="media-body project-slide-content media-right">
            <p>Pellentesque mattis neque nulla, et pharetra magna vulputate sed surabitur at felis ac lectus pellentesque vehicula. Suspendisse potenti xiuspendisse potenti ras et accumsan ipsum.</p>
            </div>
            </div>
            <div className="project-slide-img">
            <div className="img-content text-right">
              <span> ayesha</span>
              <p>02 mar 1998</p>
            </div>
            <img src={team} />
            </div>
            </div>

            <div className="slide">
            <div class="media project-slide-media">
            <div class="media-body project-slide-content media-left">
            <p>Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat. Aliquam ornare justo sit amet mi faucibus, eget bibendum urna vene mus fringil lnatis.</p>
            </div>
            </div>
            <div className="project-slide-img2 text-left">
              
            <img src={team2} />
            <div className="img-content">
              <span> ayesha</span>
              <p>02 mar 1998</p>
            </div>
            </div>
            </div>


            <div className="slide">
            <div class="media project-slide-media project-slide-border">
            <div class="media-body project-slide-content media-right">
            <p>Pellentesque mattis neque nulla, et pharetra magna vulputate sed surabitur at felis ac lectus pellentesque vehicula. Suspendisse potenti xiuspendisse potenti ras et accumsan ipsum.</p>
            </div>
            </div>
            <div className="project-slide-img">
            <div className="img-content text-right">
              <span> ayesha</span>
              <p>02 mar 1998</p>
            </div><img src={team} />
            </div>
            </div>

      
            <div className="slide">
            <div class="media project-slide-media">
            <div class="media-body project-slide-content media-left">
            <p>Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat. Aliquam ornare justo sit amet mi faucibus, eget bibendum urna vene mus fringil lnatis.</p>
            </div>
            </div>
            <div className="project-slide-img2 text-left">
              
            <img src={team2} />
            <div className="img-content">
              <span> ayesha</span>
              <p>02 mar 1998</p>
            </div>
            </div>
            </div>
            </Slider>
           </div>
         </div>
     </div>
    </div> 
  );
}
}

export default Project;
