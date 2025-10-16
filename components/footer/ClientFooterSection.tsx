import { Noto_Sans_Lao } from "next/font/google";
import { ReactNode } from "react";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

type ClientFooterSectionProps = Readonly<{
    children: ReactNode,
    name: string,
}>

const ClientFooterSection = ({
    name,
    children
}: ClientFooterSectionProps) => {
    return (
        <section>
            <h2 className={`text-white text-lg font-semibold uppercase ${notoSans.className}`}>
                {name}
            </h2>
            <div className="space-y-4 mt-4">
                {children}
            </div>
        </section>
    )
}

export default ClientFooterSection