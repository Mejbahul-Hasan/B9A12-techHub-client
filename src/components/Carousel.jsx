// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../assets/img-1.jpg'
import bgimg2 from '../assets/img-2.jpg'
import bgimg3 from '../assets/img-3.jpg'
import bgimg4 from '../assets/img-4.jpg'
import bgimg5 from '../assets/img-5.jpg'

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
                <Slide image={bgimg1} text="Engaging  in beautifying our community" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg2} text="Teaching assistance for underprivileged children" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg3} text="Taking care of senior citizens" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg4} text="Assisting health care professionals" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgimg5} text="Assisting health care professionals" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}