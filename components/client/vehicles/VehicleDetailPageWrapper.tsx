'use client';
import CarEntity from "@/@types/entities/CarEntity";
import CustomButton from "@/components/buttons/CustomButton"
import CustomSecondaryButton from "@/components/buttons/CustomSecondaryButton"
import ClientPageWrapper from "@/components/misc/ClientPageWrapper"
import ErrorAlert from "@/components/misc/ErrorAlert";
import NotoSans from "@/components/misc/NotoSans"
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import ImageAssets from "@/constants/misc/image_assets"
import Endpoints from "@/utils/misc/endpoints";
import MiscUtils from "@/utils/misc/misc_utils";
import Image from "next/image"
import { features } from "process";
import { useEffect, useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import useSWR from "swr";

type VehicleDetailPageWrapperProps = Readonly<{
    vehicleId: string,
}>

const VehicleDetailPageWrapper = ({
    vehicleId
}: VehicleDetailPageWrapperProps) => {
    const [selectedImage, setSelectedImage] = useState('');
    const { data: vehicle, isLoading, isValidating, mutate, error } = useSWR(Endpoints.cars.detail(vehicleId), MiscUtils.getData<CarEntity>, {
        revalidateOnFocus: false,
    })
    const randomId = useId();

    // Observe data
    useEffect(() => {
        if (vehicle) {
            setSelectedImage(_ => vehicle.images[0].image);
        }
    }, [vehicle])

    if (isLoading || isValidating) return (
        <ClientPageWrapper>
            <TableSkeleton />
        </ClientPageWrapper>
    )

    else if (error) return (
        <ClientPageWrapper>
            <ErrorAlert
                errorMessage={error.message}
                onRefreshHandler={mutate}
            />
        </ClientPageWrapper>
    )

    if (vehicle && selectedImage) return (
        <ClientPageWrapper>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                    <Image
                        src={selectedImage}
                        unoptimized={true}
                        width={100}
                        height={100}
                        alt="Vehicle"
                        className="w-full h-auto aspect-video object-cover rounded-xs"
                    />
                    <section className="mt-2">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            loop={true}
                        >
                            {
                                vehicle?.images.map((ele, index) => (
                                    <SwiperSlide
                                        className="vehicle-detail-slide"
                                        key={`${randomId}_${index}_car_image`}
                                    >
                                        <Image
                                            onClick={() => setSelectedImage(_ => ele.image)}
                                            src={ele.image}
                                            width={100}
                                            height={100}
                                            unoptimized={true}
                                            alt={`${vehicle.brand} ${vehicle.model} image`}
                                            className="aspect-video w-full h-auto object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </section>
                </div>
                <div className="">
                    <p className="text-xs font-semibold uppercase text-primary tracking-wider rounded-xs ">
                        {vehicle?.year}
                    </p>
                    <NotoSans className="text-xl mt-4">
                        <span className="text-zinc-400">{vehicle?.brand.toUpperCase()}</span>
                        <span className="text-white ml-1"> - {vehicle?.model}</span>
                    </NotoSans>
                    <p className="text-primary text-xl">
                        GHS {vehicle.price}
                    </p>
                    <section className="my-4">
                        <NotoSans className="text-zinc-300 text-sm font-semibold uppercase">
                            Specifications
                        </NotoSans>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                {vehicle.fuel_type}
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                {vehicle.drivetrain}
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                {vehicle.transmission}
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Number Of Doors : {vehicle.number_of_doors}
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Seating Capacity : {vehicle.seating_capacity}
                            </div>
                            {
                                Object.keys(vehicle.features).map((featureKey, index) => (
                                    <div
                                        key={`${randomId}_${index}_car_feature`}
                                        className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60"
                                    >
                                        {featureKey} : {vehicle.features[featureKey]}
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <CustomButton text="Show Interest" />
                    <section className="mt-4">
                        <NotoSans className="text-zinc-300 text-sm font-semibold uppercase">
                            Description
                        </NotoSans>
                        <p className="mt-2 text-zinc-400">
                            {vehicle.description}
                        </p>
                    </section>
                </div>
            </section>
        </ClientPageWrapper>
    )
}

export default VehicleDetailPageWrapper