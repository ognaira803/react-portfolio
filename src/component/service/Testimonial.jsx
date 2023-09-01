import React from 'react'
// import Fade from 'react-reveal/Fade';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import { Pagination, Autoplay, Lazy } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import img1 from '../img/9d095dcd0191a6beb4e9f8f59d59cd34.jpeg'
import img2 from '../img/384070d789be4f659006d9e8a53d1bdf.jpeg'
import img3 from '../img/3261558e341cf0c94af163c3a0f06ad9.jpeg'
import img4 from '../img/b9ad81ee6f82c34f37ec01f0e0fed35e.jpeg'
import img5 from '../img/b951974b02bd2092fe2c14dc6c159efd.jpeg'
import img6 from '../img/portrait-300x300.jpg'
import img7 from '../img/alvin.png'
import img8 from '../img/pascal.png'
import img9 from '../img/testimonials-1.jpg'
import img10 from '../img/testimonials-2.jpg'
import img11 from '../img/testimonials-3.jpg'
import img12 from '../img/testimonials-4.jpg'

function Testimonial() {
  return (
    <div className="testimonials">
            <div className="test__head">
                <h2>Testimonials</h2>
            </div>
            <Swiper className="div__testimonies"
            
                  // install Swiper modules
                  style={{
                    "--swiper-pagination-color": "#fff",
                  }}
                  lazy={true}
      modules={[Autoplay, Pagination, Lazy]}
      centeredSlides={true}
      spaceBetween={25}
      slidesPerView={3}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        0 : {
            slidesPerView : 1,
        },
        520 : {
            slidesPerView: 2.8,
        },
        980 : {
            slidesPerView: 3,
        }
      }
      }
      >
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Impressed by your ability to turn our vision into reality. Your expertise in translating design into clean, efficient code is remarkable.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img1} alt="" />
                    <h3>Store Owner</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Thank you for your exceptional communication skills. You made complex concepts easy to understand, ensuring our project was on track at all times.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img9} alt="" />
                    <h3>Web Developer</h3>
                </SwiperSlide>
                
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Your commitment to staying up-to-date with the latest web technologies is evident in the innovative features and responsive design of our website.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img10} alt="" />
                    <h3>Designer</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Your coding prowess is evident in the flawless functionality of our website. Your attention to detail and problem-solving skills truly set you apart
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img11} alt="" />
                    <h3>Web Manager</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Thank you for creating a website that resonates with our audience. Your ability to understand our brand and tailor the user experience accordingly has been remarkable.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img12} alt="" />
                    <h3>Student</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        The attention to detail in your code is outstanding. My website's flawless appearance and functionality is a testament to your commitment to excellence.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img2} alt="" />
                    <h3>Entreprenuer</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Your collaborative approach made the entire development process smooth and enjoyable. Your willingness to work closely with our team has been invaluable.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img3} alt="" />
                    <h3>Developer</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        The graphics designed for our social media campaign were outstanding. The visually striking visuals not only grabbed attention but also conveyed our message effectively. The design team's expertise truly shines
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img4} alt="" />
                    <h3>Graphic Designer</h3>
                </SwiperSlide>

                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Your problem-solving skills truly shine. You navigated challenges with ease, ensuring our website not only met our requirements but exceeded them.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img5} alt="" />
                    <h3>FreeLancer</h3>
                </SwiperSlide>
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        The website's speed and performance speak volumes about your optimization skills. Your efforts in delivering a fast and efficient site have not gone unnoticed.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img7} alt="" />
                    <h3>Manager</h3>
                </SwiperSlide>
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        Kudos on creating a website that not only looks stunning but also performs seamlessly across all devices. Your dedication to optimizing user experience is commendable.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img6} alt="" />
                    <h3>Ceo & Founder</h3>
                </SwiperSlide>
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                        The new website exceeded our expectations. Its sleek design and user-friendly interface have elevated our online presence, attracting more visitors and boosting engagement.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img8} alt="" />
                    <h3>FullStack Dev </h3>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Testimonial