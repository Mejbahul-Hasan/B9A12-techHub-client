// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bgimg1 from '../assets/img-1.jpg'
import bgimg2 from "../assets/img-2.jpg"
import bgimg3 from "../assets/img-3.jpg"
import bgimg4 from "../assets/img-4.jpg"
import bgimg5 from "../assets/img-5.jpg"

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                <Slide image={bgimg1} text="Your Hub for Tech innovations" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg2} text="Tech Tools for Tomorrow's Creators" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg3} text="Discover the latest in Tech" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg4} text="Innovate, Share, Connect" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg5} text="Share Your Tech Passion" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}