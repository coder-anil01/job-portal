import React from 'react';
import '../style/HomePage.css';
import {FaAngleDoubleLeft, FaAngleDoubleRight, FaRegStar, FaSearch, FaStar} from 'react-icons/fa';
const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="homepage-container">
{/* FIRST */}
          <div className="homepage-first">
            <div className="homepage-left">
              <div className="homepage-left-small-text">We Have 208,000+ Live Jobs</div>
              <div className="homepage-left-big-text">Your <span>Dream Job</span> Is Waiting For You</div>
              <div className="homepage-left-small-text">Type your keywork, then click Find job your perfect job.</div>
              <div className="homepage-search">
                <div className="homepage-icon"><FaSearch/></div>
                <input type="text" className="homepage-input" autoFocus placeholder='Enter Your Dream Job'/>
                <button className="primary-btn">Find job</button>
              </div>
            </div>
            <div className="homepage-right">
              <img src="https://job-board.dexignzone.com/xhtml/images/man.png" alt="Employe" className="homepage-right-img" />
            </div>
          </div>
{/* SEC */}
          <div className="homepage-sec">
            <h1 className="homepage-main-heading">Choose Your Dream Job</h1>
            <div className="homepage-sec-container">
              {[1,1,1,1,1,1].map((j, index)=>(
              <div className="homepage-sec-card">
                <div key={index} className="homepage-sec-right-top">
                  <div className="homepage-sec-post-day">2 Day ago</div>
                  <div className="homepage-sec-time">Full Time</div>
                </div>
                <div className="homepage-sec-company">
                  <img src="https://job-board.dexignzone.com/xhtml/images/icons/google.png" alt="google" className="homepage-sec-company-logo" />
                  <div>
                    <div className="homepage-sec-title">Google, New York</div>
                    <div className="homepage-sec-sub-title">Web Designer</div>
                  </div>
                </div>
                <p className="homepage-sec-des">It is a long established fact that a reader of a page when looking at its layout.</p>
                <div className="homepage-sec-buttom">
                  <button className='primary-btn'>Apply Now</button>
                  <div className="homepage-sec-money"><span>$60 /</span> hour</div>
                </div>
              </div>
              ))}
            </div>
            <button className='primary-btn-center'>Load More</button>
          </div>
{/* REVIEWS */}
          <div className="reviews">
            <h1 className="homepage-main-heading">What A Job Holder Says About Us</h1>
            <FaAngleDoubleLeft className='reviews-arrow-left' />
        <FaAngleDoubleRight className='reviews-arrow-right' />
            <div className="home-reviews-container">
            {[1,1,1]?.map((r, index)=>(
              <div className="home-reviews-card" key={index}>
                <img src={'https://job-board.dexignzone.com/xhtml/images/icons/google.png'} alt="" />
                <div className='home-reviews-name'>{'Raja Kumar'}</div>
                <div className='home-reviews-star'>
                {[1,1,1,1,1].map((s, index)=>(
                  <div key={index}>{index >= 4 ? <FaRegStar/>:<FaStar/>}</div>
                  ))}
                </div>
                <div className="home-reviews-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic quo, quis optio praesentium blanditiis laudantium deserunt facere reprehenderit inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic quo, quis optio praesentium blanditiis laudantium deserunt facere reprehenderit inventore!</div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
