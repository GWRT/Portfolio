// Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import { SiDoi } from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { ServiceData } from '../constants/indexContants';

export default function SliderAct({ t }) {
    return (
        <div className="flex items-center justify-center flex-col h-[80vh] w-[95%]">
            <Swiper
                style={{
                    '--swiper-pagination-color': '#00df9a',
                }}
                slidesPerView={1}
                spaceBetween={10}
                mousewheel={true}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                className="w-full h-full"
            >
                {ServiceData(t).map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="flex flex-col gap-6 mb-10 group relative shadow-lg rounded-3xl px-6 py-8 h-[94%] w-full overflow-hidden cursor-default">
                            <div
                                className="absolute inset-0 bg-cover bg-center blur-[2px]"
                                style={{ backgroundImage: `url(${item.backgroundImage})` }}
                            />
                            <div className="relative flex flex-col w-full md:w-2/5 p-5 backdrop-blur-2xl bg-white/50 rounded-xl border-2 shadow-2xl">
                                <h1 className="text-xl lg:text-2xl font-bold uppercase">{item.title} </h1>
                                <p className="hidden md:block text-[14px] mt-5">{item.content} </p>
                                <br/>
                                <h1>{t('technologiesUsed')}</h1>
                                <div className='flex flex-wrap mt-3'>
                                    {item.tecnologiesUsedIcons && item.tecnologiesUsedIcons.map((Icon, index) => (
                                        <Icon key={index} className="w-[25px] h-[25px] text-slate-800 mr-5" />
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-5 left-5 flex gap-4 backdrop-blur-2xl bg-white/50 p-2 rounded-xl border-2 shadow-2xl">
                                {item.links.map((iconItem, index) => (
                                    <a key={index} href={iconItem.link} target='_blank' rel='noopener noreferrer'>
                                        <iconItem.icon className="w-[35px] h-[35px] text-slate-800 hover:text-main-color hover:rotate-45 duration-100" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
