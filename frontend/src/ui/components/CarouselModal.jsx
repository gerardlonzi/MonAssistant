// CVCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { AllTemplatesArray } from '../../data/cv/AllCvTemplateArray';

export default function CVCarousel({ activeIndex, onClose, myCvData, activeColor, hoverPalette, size, }) {
    return (
        <div className="fixed inset-0  bg-[#4a4a4ac2] z-500   h-[100vh]">
<div className='relative top-[50%] left-[50%] -translate-1/2 ml-[17%] w-full m-auto'>


            <Swiper   initialSlide={activeIndex} autoplay={false} spaceBetween={30} slidesPerView={1} loop={true}>
                {AllTemplatesArray.map(cv => {
                    const TemplateComponent = cv.component
                    return (
                        <SwiperSlide className=''  key={cv.id}>
                            <div className=" w-[70%] h-[82vh] bg-white rounded shadow-lg relative ">
                                <button onClick={onClose} className="absolute top-2 right-4 text-black  text-4xl">×</button>
                                <div className='bg-blue-100 p-9'>
                                <TemplateComponent myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} size={'lg'} />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
            </div>
        </div>
    );
}
