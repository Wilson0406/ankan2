import React from 'react'
import like from './icons/like.svg';
import "./Footer.css";

function footer() {
  return (
    <div>
      <div className='footer'>
        <div className='image_paros'>
          <img className="my-3 image_paros_img" src={like} alt='like' />
        </div>
        <div className='buttons_paros'>
          <button className='button' >
            <p><b>About</b></p>
          </button>
          <button className='button'>
            <p><b>Contact</b></p>
          </button>
          <button className='button'>
            <p><b>ValueAd</b></p>
          </button>
          <button className='button'>
            <p><b>Careers</b></p>
          </button>




          <div className='lowerbutton_div'>
            <button className='lowerbutton'>
              <p><b>Terms of Use</b></p>
            </button>
            <button className='lowerbutton'>
              <p><b>PrivacyPolicy</b></p>
            </button>
          </div>
        </div>


      </div>


      <div className='footerbelow' >
        <p className='text' style={{ position: 'relative', top: 10, right: -200, bottom: 200, justifyContent: 'center', alignItems: 'center', fontSize: 10 }} >
          <b>Copyright ©  2022 Printline Media Pvt. Ltd. All rights reserved.</b>
        </p>
        <div className='flex' style={{ position: 'relative', left: 20 }}>
          <p style={{ position: 'relative', top: 10, left: 450, right: -200, bottom: 200, justifyContent: 'center', alignItems: 'center', fontSize: 10 }}> <b>FollowUs</b></p>
          <div className='icons' style={{ position: 'relative', left: 470 , top:-8 }}>

            <i className="fa-brands fa-facebook insta"></i>
            <i className="fa-brands fa-instagram-square insta" ></i>
            <i className="fa-brands fa-linkedin insta"></i>
            <i className="fa-brands fa-telegram insta"></i>
            <i className="fa-brands fa-twitter insta"></i>
            <i className="fa-brands fa-youtube insta"></i>
            <i className="fa-brands fa-youtube insta"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
