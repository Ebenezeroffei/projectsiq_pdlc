import { Noto_Sans_Lao } from "next/font/google";
import { ReactNode } from "react";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

type NotoSansProps = Readonly<{
    children: ReactNode,
    className?: string
}>

const NotoSans = ({ children, className }: NotoSansProps) => {
    return (
        <section className={`${className} ${notoSans.className}`}>
            {children}
        </section>
    )
}

export default NotoSans