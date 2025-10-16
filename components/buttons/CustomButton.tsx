import { Noto_Sans_Lao } from "next/font/google";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });

type CustomButtonProps = Readonly<{
    name: string,
    onPressedHandler?: () => void,
    isLoading?: boolean
}>

const CustomButton = ({
    name,
    onPressedHandler,
    isLoading
}: CustomButtonProps) => {
    return (
        <button
            className={`bg-primary py- text-white text-sm uppercase transition-colors min-w-[200px] h-[57px] duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
            onClick={onPressedHandler}
        >
            {name}
        </button>
    )
}

export default CustomButton