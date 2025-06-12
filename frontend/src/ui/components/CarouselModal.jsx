// CVCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ArrowLeft,ArrowRight } from 'lucide-react';
import { AllTemplatesArray } from '../../data/cv/AllCvTemplateArray';

export default function CVCarousel({ activeIndex, onClose, myCvData, activeColor, hoverPalette, size, }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#4a4a4ac2] z-500   h-[100vh]">
            <div className='relative  ml-[33%] w-full'>
            <div className="custom-prev transition-all size-12 hover:bg-green-600 bg-green-400 flex items-center justify-center rounded-full text-black absolute -translate-y-1/2 top-[50%] -left-[5%] cursor-pointer"><ArrowLeft size={30} className=''/></div>
            <div className="custom-next transition-all size-12 hover:bg-green-600 bg-green-400 flex items-center justify-center rounded-full text-black z-10  absolute -translate-y-1/2 top-1/2 right-[22rem] cursor-pointer"><ArrowRight /></div>
                <Swiper modules={[Navigation]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }} initialSlide={activeIndex} autoplay={false} spaceBetween={30} slidesPerView={1} loop={true}>
                    {AllTemplatesArray.map(cv => {
                        const TemplateComponent = cv.component
                        return (
                            <SwiperSlide key={cv.id}>
                                <div className=" w-[70%] h-[85vh] bg-white rounded-lg overflow-hidden  relative ">
                                    <button onClick={onClose} className="absolute top-2 right-4 text-black cursor-pointer text-4xl">×</button>
                                    <div className='bg-blue-100 p-9 h-full'>
                                        <div className='rounded-xl overflow-hidden w-[25rem] shadow-lg'>
                                        <TemplateComponent  myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} size={'lg'} />
                                        </div>
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
