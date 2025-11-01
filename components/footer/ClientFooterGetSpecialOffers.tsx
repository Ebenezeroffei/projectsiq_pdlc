'use client';
import { useState } from "react"
import CustomEmailField from "../text_fields/CustomEmailField";
import { Noto_Sans_Lao } from "next/font/google";
import NotoSans from "../misc/NotoSans";
import HomeUtils from "@/utils/home/home_utils";
import Image from "next/image";
import ImageAssets from "@/constants/misc/image_assets";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });


const ClientFooterGetSpecialOffers = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [isButtonLoading, setIsButtonLoading] = useState(false)

    if (isSubscribed) return (
        <section className="">
            <NotoSans>
                <p className="text-2xl uppercase text-primary">
                    Hurray
                    🎉
                </p>
                <p className="mt-2 text-white">
                    Thank you for subscribing to our amazing offers.
                </p>
            </NotoSans>
        </section>
    )

    return (
        <section>
            <CustomEmailField
                showLabel={false}
                placeholder="Email"
                label="Email"
                setValue={setEmail}
                value={email}
            />
            {
                isButtonLoading ? (

                    <button
                        className={`bg-primary text-white text-sm uppercase transition-colors w-[200px] h-[57px] duration-150 hover:bg-secondary ${notoSans.className} flex justify-center cursor-not-allowed rounded-xs tracking-wider`}
                    >
                        <Image
                            src={ImageAssets.Preloader}
                            alt="Preloader"
                            className="w-[25px]"
                        />
                    </button>
                ) : (
                    <button
                        onClick={() => HomeUtils.subscribeToNewsLetter(
                            email,
                            setEmail,
                            setIsSubscribed,
                            setIsButtonLoading
                        )}
                        className={`bg-primary text-white text-sm uppercase transition-colors w-[200px] h-[57px] duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
                    >
                        Subscribe
                    </button>
                )
            }
        </section>
    )
}

export default ClientFooterGetSpecialOffers