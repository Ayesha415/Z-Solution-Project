import React from 'react';
import './casestudy.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/img/web.png";
import right from '../assets/img/right.svg';
import Slider from "react-slick";
class CaseStudy extends React.Component{
    render()

    {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return(
        <div className="casestudy">
          <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
                <div className="speacialized-title">
                 <h1>Case Study</h1>
                 <p>Latest Projects We Have Been Working On</p>
                </div>
              
          </div>
        </div>
            <div className="row">
              <div className="col-sm-12">
              <Slider {...settings}>
            <div>
            <div class="media casestudy-media">
            <div className="casestudy-img"><img src={slide1}/></div>
            <div class="media-body casestudy-media-body">
            <h5 class="mt-0">McDonald's Mathmania</h5>
            <p> Cras mattis ante commodo fermentum sodales. Aliquam luctus a enim quis lacinia. Suspendisse ut purus sem. Curabitur sit amet dapibus velitst sed velit molestie lacus tincidunt condimentum vel nec lorem. Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat.</p>
            <p>Aliquam ornare justo sit amet mi faucibus, eget bibendum urna venenatis. Ut blandit dictum quam, et dictum odio tincidunt ac. Aenean euismod maximus lorem ac rhoncus.</p>
            <h5 class="mt-0">Services</h5>
            <ul className="casestudy-ul">
            <li>Web design and development</li>
            <li>Web design and development</li>
            </ul>
            <div class="slider-btn">
                  <button type="button" class="btn btn-warning bt-custom ff-bold ">View Details<span class=""><img src={right} alt="" /> </span> </button>
                </div>
            </div>
            </div>
            </div>

            <div>
            <div class="media casestudy-media">
            <div className="casestudy-img"><img src={slide1}/></div>
            <div class="media-body casestudy-media-body">
            <h5 class="mt-0">McDonald's Mathmania</h5>
            <p> Cras mattis ante commodo fermentum sodales. Aliquam luctus a enim quis lacinia. Suspendisse ut purus sem. Curabitur sit amet dapibus velitst sed velit molestie lacus tincidunt condimentum vel nec lorem. Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat.</p>
            <p>Aliquam ornare justo sit amet mi faucibus, eget bibendum urna venenatis. Ut blandit dictum quam, et dictum odio tincidunt ac. Aenean euismod maximus lorem ac rhoncus.</p>
            <h5 class="mt-0">Services</h5>
            <ul className="casestudy-ul">
            <li>Web design and development</li>
            <li>Web design and development</li>
            </ul>
            <div class="slider-btn">
                  <button type="button" class="btn btn-warning bt-custom ff-bold ">View Details<span class=""><img src={right} alt="" /> </span> </button>
                </div>
            </div>
            </div>
            </div>

            <div>
            <div class="media casestudy-media">
            <div className="casestudy-img"><img src={slide1}/></div>
            <div class="media-body casestudy-media-body">
            <h5 class="mt-0">McDonald's Mathmania</h5>
            <p> Cras mattis ante commodo fermentum sodales. Aliquam luctus a enim quis lacinia. Suspendisse ut purus sem. Curabitur sit amet dapibus velitst sed velit molestie lacus tincidunt condimentum vel nec lorem. Aenean et dignissim purus. Vivamus fringilla urna ut erat tempor volutpat.</p>
            <p>Aliquam ornare justo sit amet mi faucibus, eget bibendum urna venenatis. Ut blandit dictum quam, et dictum odio tincidunt ac. Aenean euismod maximus lorem ac rhoncus.</p>
            <h5 class="mt-0">Services</h5>
            <ul className="casestudy-ul">
            <li>Web design and development</li>
            <li>Web design and development</li>
            </ul>
            <div class="slider-btn">
                  <button type="button" class="btn btn-warning bt-custom ff-bold ">View Details<span class=""><img src={right} alt="" /> </span> </button>
                </div>
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

export default CaseStudy;
