'use client';

import NotoSans from "@/components/misc/NotoSans"
import { MdCarRepair } from "react-icons/md"
import { IoCarSportSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import { ReactNode } from "react";
import { FaCarSide } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";

type USPProps = {
  icon: ReactNode,
  title: string,
  content: string,
}

const USP = ({
  icon,
  title,
  content
}: USPProps) => {
  return (
    <section className="p-8 rounded-xs space-y-4 bg-[#131313]">
      {icon}
      <div>
        <NotoSans className="flex justify-start">
          <p className="text-white after:block after:content-[''] after:mt-4 after:w-[50px] after:h-[5px] after:bg-primary font-semibold text-xl uppercase">
            {title}
          </p>
        </NotoSans>
      </div>
      <p className="font-semibold text-zinc-400">
        {content}
      </p>
    </section>
  )
}


const LandingPageUSP = () => {
  const usedCars = <FaCarSide
    className="text-primary"
    size={60}
  />
  const exclusiveOffers = <BsGearWideConnected
    className="text-primary"
    size={60}
  />
  const newCars = <IoCarSportSharp
    className="text-primary"
    size={60}
  />;
  const carMaintenance = <MdCarRepair
    className="text-primary"
    size={60}
  />

  return (
    <section className="px-8 py-12">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,

        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="landing-page-usp-slide">
          <USP
            icon={newCars}
            title="New Cars"
            content="Discover the latest models equipped with innovative features and premium finishes."
          />
        </SwiperSlide>
        <SwiperSlide className="landing-page-usp-slide">
          <USP
            icon={usedCars}
            title="Used Cars"
            content="Browse our quality pre-owned vehicles that offer great value without compromise."
          />
        </SwiperSlide>
        <SwiperSlide className="landing-page-usp-slide">
          <USP
            icon={exclusiveOffers}
            title="Exclusive Offers"
            content="Take advantage of special deals and financing options tailored to suit every need."
          />
        </SwiperSlide>
        <SwiperSlide className="landing-page-usp-slide">
          <USP
            icon={carMaintenance}
            title="Car Maintenance"
            content="Keep your vehicle performing at its best with our expert repair and maintenance services."
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default LandingPageUSP