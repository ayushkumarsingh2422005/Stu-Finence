import React from 'react'
import './ContactUs.css'
import fb from '../../Images/Icons/facebook.png'
import ins from '../../Images/Icons/instagram.png'
import yt from '../../Images/Icons/youtube.png'
import NevBar from '../../Components/NevBar/NevBar'
export default function ContactUs() {
  return (
    <>
    <NevBar />
    <div className='contactus_container_super'>
      <div id="contactus_container">
        <div id="contactus_child_1">
          <div>feel free to ask for help we are ready to help you. Contact us via form attached of on social media</div>
          <div>
            <a href="mailto:mail.gmail.com"><img src={fb} alt="facebook" /></a>
            <a href="tel:+918299797516"><img src={ins} alt="instagram" /></a>
            <a href="http://"><img src={yt} alt="linkedin" /></a>
          </div>
        </div>
        <div id="contactus_child_2">
          <form action="/contact/" method="post">
            <fieldset >
              {/* <legend><i className="fa-solid fa-user"></i> Name</legend> */}
              <input type="text" name="first_name" maxlength="20" placeholder="first name" required />
              <input type="text" name="last_name" maxlength="20" placeholder="last name" />
            </fieldset>
            <fieldset >
              {/* <legend><i className="fa-solid fa-phone"></i> / <i className="fa-solid fa-envelope"></i></legend> */}
              <input type="tel" name="phone_number" maxlength="10" placeholder="XXXXXXXXXX" required />
              <input type="email" name="email" maxlength="40" placeholder="example@gmail.com" />
            </fieldset>
            <fieldset >
              {/* <legend><i className="fa-solid fa-phone"></i> Desc</legend> */}
              <textarea name="desc" cols="30" rows="10"></textarea>
            </fieldset>
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
