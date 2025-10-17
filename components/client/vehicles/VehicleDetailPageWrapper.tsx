'use client';
import CustomButton from "@/components/buttons/CustomButton"
import CustomSecondaryButton from "@/components/buttons/CustomSecondaryButton"
import ClientPageWrapper from "@/components/misc/ClientPageWrapper"
import NotoSans from "@/components/misc/NotoSans"
import ImageAssets from "@/constants/misc/image_assets"
import Image from "next/image"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"

const VehicleDetailPageWrapper = () => {
    const [selectedImage, setSelectedImage] = useState(ImageAssets.Car1);

    return (
        <ClientPageWrapper>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                    <Image
                        src={selectedImage}
                        unoptimized={true}
                        alt="Vehicle"
                        className="aspect-video object-cover rounded-xs"
                    />
                    <section className="mt-2">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            loop={true}
                        >
                            <SwiperSlide className="vehicle-detail-slide">
                                <Image
                                    onClick={() => setSelectedImage(_ => ImageAssets.Car1)}
                                    src={ImageAssets.Car1}
                                    unoptimized={true}
                                    alt="Vehicle"
                                    className="aspect-video object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="vehicle-detail-slide">
                                <Image
                                    onClick={() => setSelectedImage(_ => ImageAssets.Car2)}
                                    src={ImageAssets.Car2}
                                    unoptimized={true}
                                    alt="Vehicle"
                                    className="aspect-video object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="vehicle-detail-slide">
                                <Image
                                    onClick={() => setSelectedImage(_ => ImageAssets.Car3)}
                                    src={ImageAssets.Car3}
                                    unoptimized={true}
                                    alt="Vehicle"
                                    className="aspect-video object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="vehicle-detail-slide">
                                <Image
                                    onClick={() => setSelectedImage(_ => ImageAssets.Car4)}
                                    src={ImageAssets.Car4}
                                    unoptimized={true}
                                    alt="Vehicle"
                                    className="aspect-video object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="vehicle-detail-slide">
                                <Image
                                    onClick={() => setSelectedImage(_ => ImageAssets.Car5)}
                                    src={ImageAssets.Car5}
                                    unoptimized={true}
                                    alt="Vehicle"
                                    className="aspect-video object-cover rounded-xs cursor-pointer hover:scale-[1.05] transition-all duration-150 active:scale-[0.95]"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
                <div className="">
                    <p className="text-xs font-semibold uppercase text-primary tracking-wider rounded-xs ">
                        Brand New
                    </p>
                    <NotoSans className="text-xl mt-4">
                        <span className="text-zinc-400">KIA</span>
                        <span className="text-white ml-1"> - Morning</span>
                    </NotoSans>
                    <p className="text-primary text-xl">
                        GHS 30000.00
                    </p>
                    <section className="my-4">
                        <NotoSans className="text-zinc-300 text-sm font-semibold uppercase">
                            Specifications
                        </NotoSans>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                V6 Engine
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Automatic Transmission
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Sunroof
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Alloy Wheels
                            </div>
                            <div className="py-1 rounded-xs tracking-wide border px-1.5 border-zinc-600 text-xs text-white/60">
                                Hybrid Powertrain
                            </div>
                        </div>
                    </section>
                    <section className="flex gap-4 my-8">
                        <CustomButton text="Buy" />
                        <CustomSecondaryButton text="Add To Cart" />
                    </section>
                    <section className="mt-4">
                        <NotoSans className="text-zinc-300 text-sm font-semibold uppercase">
                            Description
                        </NotoSans>
                        <p className="mt-2 text-zinc-400">
                            Experience the perfect blend of modern technology and refined design with the Kia Morning. This vehicle combines dynamic performance with impressive fuel efficiency, making it the ideal choice for urban adventures and everyday commutes. Enjoy advanced features and a sleek, comfortable interior that reflects the innovative spirit of a new generation car.
                        </p>
                    </section>
                </div>
            </section>
        </ClientPageWrapper>
    )
}

export default VehicleDetailPageWrapper