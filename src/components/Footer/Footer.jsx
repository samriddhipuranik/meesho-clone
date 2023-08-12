import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
      <div className='footer-Container'>
          <div className="footer-outer-box">
              <div className="footerInnerBox">
                  <div className="footerContextBox">
                      <div className="footerBoxOne">
                          <h4>Shop Non-Stop on Meesho</h4>
                          <p>Trusted by more than 1 Crore Indians
                              Cash on Delivery | Free Delivery</p>
                          <div className="Apps">
                              <div className="GooglePlay">
                                  <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="playstore" />
                              </div>
                              <div className="AppStore">
                                  <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt="apple" />
                              </div>
                          </div>
                      </div>
                      <div className="footerBoxTwo">
                          <div className="career">
                              <span>Careers</span>
                          </div>
                          <div className="supplier">
                              <span>Become a supplier</span>
                          </div>
                          <div className="fame">
                              <span>Hall of Fame</span>
                          </div>
                      </div>
                      <div className="footerBoxThree">
                          <div className="career">
                              <span>Legan and Policies</span>
                          </div>
                          <div className="supplier">
                              <span>Meesho Tech Blog</span>
                          </div>
                          <div className="fame">
                              <span>Notices and Returns</span>
                          </div>
                      </div>
                      <div className="footerBoxFour">
                          <div className="fourWrapper">
                              <div className="wrapperOne">
                                  <h6>Reach out to us</h6>
                                  <div className="icons">
                                      <img src="https://images.meesho.com/images/pow/facebook.png" alt="fb" />
                                      <img src="https://images.meesho.com/images/pow/instagram.png" alt="fb" />
                                      <img src="https://images.meesho.com/images/pow/youtube.png" alt="fb" />
                                      <img src="	https://images.meesho.com/images/pow/linkedin.png" alt="fb" />
                                      <img src="https://images.meesho.com/images/pow/twitter.png" alt="fb" />
                                  </div>
                              </div>
                              <div className="wrapperTwo">
                                  <h6>Contact Us</h6>
                                  Fashnear Technologies Private Limited, <br />
                                  CIN: U74900KA2015PTC082263 <br />
                                  06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
                                  <br />E-mail address:
                                  <Link to="">query@meesho.com</Link> <br />
                                  © 2015-2022 Meesho.com

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Footer
