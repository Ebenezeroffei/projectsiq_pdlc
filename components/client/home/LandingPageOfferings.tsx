'use client'

import CustomButton from "@/components/buttons/CustomButton"
import NotoSans from "@/components/misc/NotoSans"
import ImageAssets from "@/constants/misc/image_assets"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import Vehicle from "../vehicles/Vehicle"
import { useRouter } from "next/navigation"



const LandingPageOfferings = () => {
    const router = useRouter();

    return (
        <section className="px-8 py-24">
            <NotoSans className="text-white uppercase text-center space-y-4">
                <p className="font-semibold text-white/80">
                    What We Offer
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                    Featured Vehicles
                </h2>
            </NotoSans>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                speed={3500}
                className="mt-12"
                modules={[Autoplay]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className="landing-page-offering-slide">
                    <Vehicle
                        image={ImageAssets.Car1}
                        brand="KIA"
                        model="Morning"
                        price="50000"
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-offering-slide">
                    <Vehicle
                        image={ImageAssets.Car2}
                        brand="Toyota"
                        model="Corolla"
                        price="40000"
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-offering-slide">
                    <Vehicle
                        image={ImageAssets.Car3}
                        brand="Honda"
                        model="Civic"
                        price="45000"
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-offering-slide">
                    <Vehicle
                        image={ImageAssets.Car4}
                        brand="Ford"
                        model="Mustang"
                        price="55000"
                    />
                </SwiperSlide>
                <SwiperSlide className="landing-page-offering-slide">
                    <Vehicle
                        image={ImageAssets.Car5}
                        brand="Chevrolet"
                        model="Camaro"
                        price="53000"
                    />
                </SwiperSlide>

            </Swiper>
            <div className="flex justify-center mt-8">
                <CustomButton text="View More" onPressedHandler={() => router.push('/vehicles')} />
            </div>
        </section>
    )
}

export default LandingPageOfferings