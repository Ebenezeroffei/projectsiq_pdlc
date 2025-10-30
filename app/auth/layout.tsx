import ImageAssets from "@/constants/misc/image_assets"
import Image from "next/image"
import { PropsWithChildren } from "react"

const AuthLayout = ({ children }: Readonly<PropsWithChildren>) => {
    return (
        <main className="flex justify-center items-center min-h-screen max-h-max">
            <section className="flex-1 hidden sm:block">
                <Image
                    src={ImageAssets.LandingPageAboutUs}
                    alt="Login"
                    className="object-center h-screen object-cover"
                />
            </section>
            <section className="flex-1 max-w-[400px] m-4">
                {children}
            </section>
        </main>
    )
}

export default AuthLayout