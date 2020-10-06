import React from 'react';
import './contact.css';
import right from '../assets/img/right.svg';
class Contact extends React.Component{
    render()
    {
      return(
    <div className="contact-section">
    <div className="contact-wrapper">
    <div class="container">
        <div className="row">
            <div className="col-sm-12 col-lg-4">
            <div className="get-a-quote">
                <h2>Get A Free Quote</h2>
                <p>Srci varius natoque penatibus et magnis dis partu rient montes, nascetur ridiculus mvamus posuere semper enimagnis dis parturient montes, nascetur ridiculus mxuious. </p>
            </div>
            <div className="social-contact">
            <h3>Social Contact</h3>
            <ul>
              <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus-g"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin-in"></i></a></li>
            </ul>
            </div>
            </div>
            <div className="col-sm-12 col-lg-8 text-center">
            <form>
            
            <input type="text" id="fname" name="fname" value="Name" />
            <input type="email" id="lname" name="lname" value="Email" />
            <input type="text" id="fname" name="fname" value="Perpose" />
            <input type="phone" id="lname" name="lname" value="Contact" />
            <textarea rows="4" cols="50" name="comment" form="usrform">What you want to know?</textarea>
            <button type="button" class="btn y-btn">Send Now<span class="  ml-3"><img src={right} alt="" /> </span></button> 
            {/* <input type="submit" value="Submit" /> */}
            </form> 
            </div>
        </div>
      
    </div> 
  </div>
 </div> 
  );
}
}

export default Contact;
