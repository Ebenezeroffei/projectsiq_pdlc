import Link from "next/link"
import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

const ClientNavbarHeader = () => {
    return (
        <Link href={'/'}>
            <h1 className={`text-3xl ${notoSans.className}`}>
                DriveIQ
            </h1>
        </Link>
    )
}

export default ClientNavbarHeader
