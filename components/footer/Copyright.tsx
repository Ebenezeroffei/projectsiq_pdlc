import Link from "next/link"
import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

const Copyright = () => {
    const currentYear = new Date().getFullYear()

    return (
        <section className={`border-t-2 ${notoSans.className} px-4 py-8 flex flex-col gap-4 sm:flex-row justify-between items-center text-zinc-400 uppercase text-sm font-semibold`}>
            <div>
                Powered By
                <Link
                    href={'https://harnessiq.com'}
                    className="text-primary ml-1 transition-colors hover:text-secondary"
                    target="_blank"
                >
                    HarnessIQ
                </Link>
            </div>
            <div>
                Copyright &copy; {currentYear}. All Rights Reserved
            </div>
        </section>
    )
}

export default Copyright