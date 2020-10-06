import React from 'react';
import './podcast.css';
import email from '../assets/img/email.svg'
class Podcast extends React.Component{
    render()
    {
      return(
    <div className="podcast-section">
     <div className="container">
       <div className="col-sm-12">
         <h5>Listen to Podcasts</h5>
       </div>
         <div className="row">
             <div className="col-sm-12 d-flex justify-content-center">
             <form class="example" action="https://www.w3schools.com/action_page.php">
             <span><img src={email} /></span> 
             <input class="place" type="text" placeholder="Your email adress..." name="search2" />
             <button type="submit" class="ff-bold">Subscribe</button>
            
              </form>
             </div>
         </div>
     </div>
    </div> 
  );
}
}

export default Podcast;
