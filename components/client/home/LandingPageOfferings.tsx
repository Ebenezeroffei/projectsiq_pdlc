'use client'

import CustomButton from "@/components/buttons/CustomButton"
import NotoSans from "@/components/misc/NotoSans"
import ImageAssets from "@/constants/misc/image_assets"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import Vehicle from "../vehicles/Vehicle"
import { useRouter } from "next/navigation"
import MiscUtils from "@/utils/misc/misc_utils"
import Paginator from "@/@types/entities/Paginator"
import CarEntity from "@/@types/entities/CarEntity"
import Endpoints from "@/utils/misc/endpoints"
import useSWR from "swr"
import VehicleSkeleton from "../vehicles/VehicleSkeleton"
import { useEffect, useId, useState } from "react"
import { Elsie_Swash_Caps } from "next/font/google"



const LandingPageOfferings = () => {
    const router = useRouter();
    const { data, error, mutate, isLoading, isValidating } = useSWR(Endpoints.cars.listOrCreate, MiscUtils.getData<Paginator<CarEntity>>, {
        revalidateOnFocus: false,
    });
    const randomId = useId();
    const [selectedVehicles, setSelectedVehicles] = useState<CarEntity[]>([])

    useEffect(() => {
        if (data) {
            if (data.results.length > 5) {
                setSelectedVehicles(_ => data.results.slice(5))
            }
            else {
                setSelectedVehicles(_ => data.results);
            }
        }
    }, [data])

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
                {
                    (selectedVehicles.length > 0) ? (

                        selectedVehicles.map((vehicle, index) => (
                            <SwiperSlide className="landing-page-offering-slide">
                                <Vehicle
                                    key={`${randomId}_${index}_vehicle`}
                                    vehicle={vehicle}
                                />
                            </SwiperSlide>
                        ))

                    ) : (
                        <>
                            <SwiperSlide className="landing-page-offering-slide">
                                <VehicleSkeleton />
                            </SwiperSlide>
                            <SwiperSlide className="landing-page-offering-slide">
                                <VehicleSkeleton />
                            </SwiperSlide>
                            <SwiperSlide className="landing-page-offering-slide">
                                <VehicleSkeleton />
                            </SwiperSlide>
                            <SwiperSlide className="landing-page-offering-slide">
                                <VehicleSkeleton />
                            </SwiperSlide>
                            <SwiperSlide className="landing-page-offering-slide">
                                <VehicleSkeleton />
                            </SwiperSlide>
                        </>
                    )
                }
            </Swiper>
            <div className="flex justify-center mt-8">
                <CustomButton text="View More" onPressedHandler={() => router.push('/vehicles')} />
            </div>
        </section>
    )
}

export default LandingPageOfferings