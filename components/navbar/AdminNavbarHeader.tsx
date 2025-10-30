import Link from "next/link"
import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

const AdminNavbarHeader = () => {
    return (
        <Link href={'/admin'}>
            <h1 className={`text-3xl text-white ${notoSans.className}`}>
                PLBC
                <span className="text-primary ml-1">
                    Admin
                </span>
            </h1>
        </Link>
    )
}

export default AdminNavbarHeader
