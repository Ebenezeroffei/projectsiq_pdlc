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
            <p className="text-sm font-semibold uppercase text-zinc-400 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit atque ea excepturi temporibus quasi non eius veniam est laudantium deleniti pariatur numquam molestiae, provident libero saepe autem sint sit expedita.
            </p>
        </section>
    )
}

export default ClientFooterHeader
