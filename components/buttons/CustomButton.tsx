import { Noto_Sans_Lao } from "next/font/google";
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
    return (
        <button
            className={`bg-primary border-2 border-primary px-4 text-white text-sm uppercase transition-colors min-w-[100px] h-[40px] duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
            onClick={onPressedHandler}
        >
            {text}
        </button>
    )
}

export default CustomButton