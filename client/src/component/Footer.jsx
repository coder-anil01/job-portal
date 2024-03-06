import React from 'react'
import '../style/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-card">
            <div className="footer-logo">Job Hub</div>
            <p className="footer-description">All Indian Job Are Avlivale on Job hub, Find Your Dream Job</p>
        </div>
        <div className="footer-card">
            <h3 className="footer-heading">Useful Links</h3>
            {/* <Link className="footer-link">Find a Job</Link>
            <Link className="footer-link">Compaies</Link>
            <Link className="footer-link">About Us</Link>
            <Link className="footer-link">About Us</Link>
            <Link className="footer-link">Post a Job</Link>
            <Link className="footer-link">Testimonial</Link> */}
            <div className="footer-link">Find a Job</div>
            <div className="footer-link">Compaies</div>
            <div className="footer-link">About Us</div>
            <div className="footer-link">About Us</div>
            <div className="footer-link">Post a Job</div>
            <div className="footer-link">Testimonial</div>
        </div>
        <div className="footer-card">
            <h3 className="footer-heading">Jobs Category</h3>
            {/* <Link className="footer-link">Web Developers</Link>
            <Link className="footer-link">Grapic Designer</Link>
            <Link className="footer-link">UX Designer</Link>
            <Link className="footer-link">UI Designer</Link>
            <Link className="footer-link">More</Link>
            <Link className="footer-link">Find</Link> */}
            <div className="footer-link">Web Developers</div>
            <div className="footer-link">Grapic Designer</div>
            <div className="footer-link">UX Designer</div>
            <div className="footer-link">UI Designer</div>
            <div className="footer-link">More</div>
            <div className="footer-link">Find</div>
        </div>
        <div className="footer-card">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="homepage-left-small-text">Sign up for New updates & Any query</p>
            <div className="footer-contact-email-card">
                <input type="text" 
                  className='footer-contact-email-input'
                  placeholder='Enter Your Email'/>
                <button className="primary-btn">Send</button>
            </div>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2024 Job Hub. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
