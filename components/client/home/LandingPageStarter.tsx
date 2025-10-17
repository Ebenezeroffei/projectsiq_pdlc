'use client';

import ImageAssets from "@/constants/misc/image_assets"
import Image from "next/image"
import { Noto_Sans_Lao } from "next/font/google";
import { useRouter } from "next/navigation";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

const LandingPageStarter = () => {
    const router = useRouter()

    return (
        <section className="relative">
            <div className="absolute w-full top-0 left-0 z-10 justify-center p-10 flex flex-col  bg-[#131313]/80 h-full space-y-6 items-start">
                <p className={`${notoSans.className} font-bold uppercase lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-white`}>
                    Find Your Perfect Ride
                </p>
                <p className={`${notoSans.className}  text-lg text-zinc-400 font-semibold`}>
                    From brand-new models to trusted pre-owned vehicles — find your match.
                </p>
                <button
                    onClick={() => router.push('/vehicles')}
                    className={`${notoSans.className} uppercase text-xs text-white py-4 px-8 rounded-xs font-semibold tracking-wide bg-primary cursor-pointer transition-colors duration-150 hover:bg-secondary`}
                >
                    Browse Vehicles
                </button>
            </div>
            <Image
                src={ImageAssets.LandingPageStartedBG}
                alt="Landing page starter"
                className="object-cover max-h-screen min-h-[400px]"
                unoptimized={true}
            />
        </section>
    )
}

export default LandingPageStarter