import ImageAssets from "@/constants/misc/image_assets";
import { Noto_Sans_Lao } from "next/font/google";
import Image from "next/image";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

export type CustomButtonProps = Readonly<{
    text: string,
    onPressedHandler?: () => void,
    isLoading?: boolean
}>

const CustomButton = ({
    text,
    onPressedHandler,
    isLoading
}: CustomButtonProps) => {
    if (isLoading) return (
        <button
            className={`border-2 my-4 border-secondary px-4 min-w-[100px] h-[40px] duration-150 bg-secondary flex justify-center cursor-not-allowed rounded-xs tracking-wider`}
        >
            <Image
                src={ImageAssets.Preloader}
                alt="Preloader"
                className="w-[20px]"
            />
        </button>
    )

    return (
        <button
            className={`bg-primary my-4 border-2 border-primary px-4 text-white text-sm uppercase transition-colors min-w-[100px] h-[40px] duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
            onClick={onPressedHandler}
        >
            {text}
        </button>
    )
}

export default CustomButton