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
                                <div className=" w-[70%] h-[85vh] bg-white rounded-lg overflow-hidden  relative flex ">
                                    <button onClick={onClose} className="absolute top-2 right-4 text-black cursor-pointer text-4xl">×</button>
                                    <div className='bg-[#b2e9ff24] p-8 h-full'>
                                        <div className='rounded-xl overflow-hidden w-[25rem] shadow-lg'>
                                        <TemplateComponent  myCvData={myCvData} activeColor={activeColor} hoverPalette={hoverPalette} size={'lg'} />
                                        </div>
                                        <div className='flex justify-start items-center gap-3 mt-5'>
                                            <span className='font-semibold text-xs'>couleur</span>
                                        <ColorPicker gap={2} colorThemes={colorThemes} activeColor={activeColor} setActiveColor={setActiveColor} setIsClickColor={setIsClickColor} hoverPalette={hoverPalette} setHoverPalette={setHoverPalette} idPalette={idPalette} setIdPalette={setIdPalette} /> 
                                        </div>
                                    </div>
                                    <div className='p-8'>
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
