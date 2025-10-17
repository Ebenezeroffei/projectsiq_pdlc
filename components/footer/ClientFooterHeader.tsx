import Link from "next/link"
import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

const ClientFooterHeader = () => {
    return (
        <section className={`text-white ${notoSans.className}`}>
            <Link href={'/'}>
                <h3 className={`text-3xl`}>
                    DriveIQ
                </h3>
            </Link>
            <p className="text-sm font-semibold uppercase text-zinc-400 mt-4 leading-6">
                DriveIQ is your trusted source for quality new and used cars. We own every vehicle we sell — no middlemen, just great cars at great prices.
            </p>
        </section>
    )
}

export default ClientFooterHeader
