'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { SiBmw, SiKia, SiMercedes, SiNissan, SiTesla, SiToyota } from 'react-icons/si';
import NotoSans from '@/components/misc/NotoSans';
import { ReactNode } from 'react';

type BrandProps = {
    name: string,
    icon: ReactNode,
}

const Brand = ({
    name,
    icon
}: BrandProps) => {
    return (
        <section className='bg-[#131313] p-10 gap-2 rounded-xs flex justify-center items-center flex-col'>
            {icon}
            <NotoSans className='text-white/60 uppercase text-xl font-semibold'>
                {name}
            </NotoSans>
        </section>
    )
}

const LandingPageCarBrands = () => {
    const toyota = <SiToyota
        size={100}
        className='text-primary'
    />
    const kia = <SiKia
        size={100}
        className='text-primary'
    />
    const nissan = <SiNissan
        size={100}
        className='text-primary'
    />
    const mercedes = <SiMercedes
        size={100}
        className='text-primary'
    />
    const bmw = <SiBmw
        size={100}
        className='text-primary'
    />
    const tesla = <SiTesla
        size={100}
        className='text-primary'
    />

    return (
        <section className="px-4 py-24">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                speed={5000}
                modules={[Autoplay]}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                loop={true}

            >
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='Toyota'
                        icon={toyota}
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='Kia'
                        icon={kia}
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='Nissan'
                        icon={nissan}
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='Mercedes'
                        icon={mercedes}
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='BMW'
                        icon={bmw}
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-car-brand-slide">
                    <Brand
                        name='Tesla'
                        icon={tesla}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default LandingPageCarBrands