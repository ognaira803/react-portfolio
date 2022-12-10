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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
                            </q></p>
                        <div className="pointer">
                        
                        </div>
                    </div>
                    <img src={img7} alt="" />
                    <h3>MERN Stack</h3>
                </SwiperSlide>
                <SwiperSlide className="div__test1">
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    <div className="div__comment">
                        <p><q>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa quis cupiditate eaque itaque magni, praesentium exercitationem neque alias recusandae.
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