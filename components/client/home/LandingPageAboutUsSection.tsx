import NotoSans from "@/components/misc/NotoSans"
import ImageAssets from "@/constants/misc/image_assets"
import Image from "next/image"

const LandingPageAboutUsSection = () => {
    return (
        <section
            id="about-us"
            className="flex flex-col md:flex-row justify-between bg-secondary py-20 md:py-0"
        >
            <div className="flex-1 w-full flex justify-center md:w-2/5 relative">
                <Image
                    src={ImageAssets.LandingPageAboutUs}
                    alt=""
                    className="object-cover max-w-[400px] md:max-w-full h-full max-h-full lg:max-h-[900px] xl:max-h-[850px]"
                    unoptimized={true}
                />
            </div>
            <div className="flex-none md:w-3/5 w-full  px-16 md:py-24 py-24">
                <NotoSans className="text-center uppercase space-y-6 text-white">
                    <p className="font-semibold text-white/80">About Us</p>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                        Welcome To PDLC
                    </h2>
                </NotoSans>
                <p className="text-white mt-4">
                    PDLC which stands for Precision Domiabra Limited Company was founded with a bold vision: to transform the way people buy cars in Ghana and beyond. What began as a simple idea — making car shopping more accessible and trustworthy — quickly evolved into a dynamic platform that connects buyers with quality vehicles, both new and used, in a seamless and intelligent way.
                    <br /> <br />
                    The inspiration behind PDLC came from years of observing how difficult and time-consuming it was for everyday people to find reliable cars. From confusing pricing to limited options and questionable sellers, the process was often frustrating. That’s when the idea of PDLC was born — a smart, user-friendly solution that puts the power back in the hands of the buyer.
                    <br /> <br />
                    Our platform is designed to be intuitive and responsive, allowing users to filter by brand, price, condition, and more. Every listing is vetted for quality, and every seller is verified to ensure transparency and trust. We’re not just selling cars — we’re building a community of informed buyers and honest sellers.
                    <br /> <br />
                    At PDLC, we believe that buying a car should be exciting, not exhausting.
                    PDLC — where smart car buying begins.
                </p>
            </div>
        </section>
    )
}

export default LandingPageAboutUsSection