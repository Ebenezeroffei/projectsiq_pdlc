'use client';
import { useState } from "react"
import CustomEmailField from "../text_fields/CustomEmailField";
import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });


const ClientFooterGetSpecialOffers = () => {
    const [email, setEmail] = useState('')

    return (
        <section>
            <CustomEmailField
                showLabel={false}
                placeholder="Email"
                label="Email"
                setValue={setEmail}
                value={email}
            />
            <button className={`bg-primary text-white text-sm uppercase transition-colors w-[200px] h-[57px] duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}>
                Subscribe
            </button>
        </section>
    )
}

export default ClientFooterGetSpecialOffers