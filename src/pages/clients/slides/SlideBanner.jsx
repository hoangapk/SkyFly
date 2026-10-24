import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SlideBanner.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Search from '../../../components/common/client/Search';

export default function SlideBanner() {
    return (
        <div className='h-screen relative'>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://images.pexels.com/photos/35237013/pexels-photo-35237013.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/33917243/pexels-photo-33917243.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/32173953/pexels-photo-32173953.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/30004964/pexels-photo-30004964.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/39442127/pexels-photo-39442127.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/38294639/pexels-photo-38294639.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/15399451/pexels-photo-15399451.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/3140204/pexels-photo-3140204.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/3892808/pexels-photo-3892808.jpeg" alt="" /></SwiperSlide>
            </Swiper>
            <Search />
        </div>
    );
}
