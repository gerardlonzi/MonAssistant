// CVCarousel.js
import React,{useState} from 'react';
import { colorThemes } from '../../data/ColorTemplateData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { ArrowLeft,ArrowRight,Check } from 'lucide-react';
import { AllTemplatesArray } from '../../data/cv/AllCvTemplateArray';
import ColorPicker from './colorPicker';
import Tooltip from './Tooltip';

export default function CVCarousel({ activeIndex, onClose, myCvData, size,}) {
    const [activeColor, setActiveColor] = useState(null);
    const [hoverPalette, setHoverPalette] = useState(null);
    const [idPalette, setIdPalette] = useState(null);
    const [isClickColor, setIsClickColor] = useState(false);
  
    return (
        <div className="fixed  inset-0 flex items-center  justify-center bg-[#4a4a4ac2] z-500 overflow-auto md:overflow-hidden  h-[100vh]">
            <div className='relative md:ml-[5%] lg:ml-[10.2%] ml-0 h-full md:mt-24  xl:ml-[33%] w-full '>
                <div className='fixed md:static w-full justify-between px-6 py-5 md:py-0 flex md:block items-center bottom-0 z-100 bg-secondary'>
                    <div className='flex gap-4'>
                        <div className="custom-prev transition-all size-9 md:size-12 hover:bg-green-600 bg-green-400 flex items-center justify-center rounded-full z-10 text-black md:absolute static md:-translate-y-1/2  md:top-[50%] lg:-left-[5%] md:-left-[2%] cursor-pointer"><ArrowLeft  className='size-7'/></div>
                        <div className="custom-next transition-all size-9 md:size-12 hover:bg-green-600 bg-green-400 flex items-center justify-center rounded-full text-black z-10  md:absolute static   md:-translate-y-1/2 md:top-1/2 xl:right-[22rem] lg:right-14 md:right-7 cursor-pointer"><ArrowRight className='size-7'/></div>
                    </div>
                    <button onClick={onClose} className="block md:hidden  text-white cursor-pointer text-4xl">×</button>
                </div>
                <Swiper modules={[Navigation]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }} initialSlide={activeIndex} autoplay={false} spaceBetween={30} slidesPerView={1} loop={true}>
                    {AllTemplatesArray.map(cv => {
                        const TemplateComponent = cv.component
                        return (
                            <SwiperSlide key={cv.id}>
                                <div className=" xl:w-[70%]  md:pt-0 lg:w-[90%] md:w-[95%]  md:h-[85vh] h-full bg-white rounded-lg  md:overflow-hidden  relative flex flex-col md:flex-row items-center md:items-start pb-20 md:pb-0">
                                    <button onClick={onClose} className="absolute top-2 right-4 text-black cursor-pointer text-4xl">×</button>
                                    <div className='bg-[#b2e9ff24] px-4 pt-14 md:p-4 lg:p-8  flex  items-center flex-col w-full md:w-1/2 h-full'>
                                        <div className='rounded-xl hidden lg:block overflow-hidden w-[25rem] shadow-lg '>
                                        <TemplateComponent  myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} size={'lg'} />
                                        </div>
                                        <div className='rounded-xl  lg:hidden overflow-hidden w-[20rem] shadow-lg'>
                                        <TemplateComponent  myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} size={'md'} />
                                        </div>
                                        <div className='flex flex-col md:flex-row justify-start md:items-center  md:gap-3 mt-5'>
                                            <span className='font-semibold text-xs pl-5 md:pl-0'>couleur</span>
                                        <ColorPicker gap={2} colorThemes={colorThemes} activeColor={activeColor} setActiveColor={setActiveColor} setIsClickColor={setIsClickColor} hoverPalette={hoverPalette} setHoverPalette={setHoverPalette} idPalette={idPalette} setIdPalette={setIdPalette} /> 
                                        </div>
                                    </div>
                                    <div className='p-7 md:p-5 lg:p-8'>
                                        <div>

                                        <div className='space-x-2'>
                                            <span className='px-4 py-1 bg-gray-200 rounded-sm border border-gray-400 font-semibold text-gray-600 text-sm'>{cv.type}</span>
                                            <span className='px-4 py-1 bg-[#d1f7ff] rounded-sm border border-[#3587a357] font-semibold text-[#1d686d] text-sm'>Creative</span>
                                        </div>
                                        <p className='text-4xl font-bold mt-5 '>{cv.name}</p>
                                        <ul className='mt-6'>
                                        <li className='flex items-center text-sm gap-1'>
                                            <Check className='w-4'/>
                                            <span>Optimisé pour les ATS </span>
                                            <Tooltip />
                                        </li>

                                            {
                                                cv.caracteristic.map((el,index) =>(

                                                   <li className='flex items-center text-sm gap-1' key={index}>
                                                    <Check className='w-4'/>
                                                    <span>{el}</span>
                                                    
                                                    </li>)
                                                )
                                            }

                                        </ul>
                                        <button className="px-8 py-3 hover:bg-green-500 bg-green-400 font-bold text-black cursor-pointer rounded-full transition-all mt-10">utiliser ce template</button>
                                        </div>
                                        <div>

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
