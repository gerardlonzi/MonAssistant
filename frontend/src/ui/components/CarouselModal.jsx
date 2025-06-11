// CVCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { AllTemplatesArray } from '../../data/cv/AllCvTemplateArray';

export default function CVCarousel({activeIndex, onClose,myCvData,activeColor,hoverPalette,size }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="w-[90%] h-[90%] bg-white rounded shadow-lg relative p-4">
        <button onClick={onClose} className="absolute top-2 right-4 text-red-500 font-bold text-xl">×</button>
        <Swiper initialSlide={activeIndex} autoplay={false} spaceBetween={30} slidesPerView={1} loop={true}>
          {AllTemplatesArray.map(cv => {
            const TemplateComponent = cv.component
            return (
              <SwiperSlide key={cv.id}>
                <TemplateComponent myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} usePicture={usePicture} size={'md'} /> 
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
