import React from "react";
// import  Link  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Image from "next/image";
import Astpost1 from '../containers/Instaposts/1st_post/1a.jpg';
import Astpost2 from '../containers/Instaposts/1st_post/1b.png';
import Astpost3 from '../containers/Instaposts/1st_post/1c.jpg';
import Bstpost1 from '../containers/Instaposts/2nd_post/2a.jpg';
import Bstpost2 from '../containers/Instaposts/2nd_post/2b.jpg';
import Bstpost3 from '../containers/Instaposts/2nd_post/2c.jpg';
import Cstpost1 from '../containers/Instaposts/3rd_post/3a.jpg';
import Cstpost2 from '../containers/Instaposts/3rd_post/3b.jpg';
import Cstpost3 from '../containers/Instaposts/3rd_post/3c.jpg';
import Dstpost1 from '../containers/Instaposts/4th_post/4a.jpg';
import Dstpost2 from '../containers/Instaposts/4th_post/4b.jpg';
import Dstpost3 from '../containers/Instaposts/4th_post/4c.jpg';

const InstaPosts = () => {
  return (
    <section className="relative bg-black py-4 pb-4 overflow-hidden">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={1}
        // cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper text-white"
      >
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/novusmuj/">
            <Image src={Astpost1} alt="1st post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/novusmuj/">
            <Image src={Astpost2} alt="1st post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/novusmuj/">
            <Image src={Astpost3} alt="1st post C" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CyyYl1YhdtF/">
            <Image src={Dstpost1} alt="4th post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CyyYl1YhdtF/">
            <Image src={Dstpost2} alt="4th post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CyyYl1YhdtF/">
            <Image src={Dstpost3} alt="4th post C" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/C0MzlYJBuY1/">
            <Image src={Bstpost1} alt="2nd post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/C0I5KHTuSzg/">
            <Image src={Bstpost2} alt="2nd post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/C0C3TREhqkE/">
            <Image src={Bstpost3} alt="2nd post C" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="">
            <Image src={Cstpost1} alt="3rd post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cy05x2FhaxJ/">
            <Image src={Cstpost2} alt="3rd post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CyyYl1YhdtF/">
            <Image src={Cstpost3} alt="3rd post C" />
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default InstaPosts;
