import { Noto_Sans_Lao } from "next/font/google";
import { CustomButtonProps } from "./CustomButton";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });



const CustomSmallButton = ({
    text,
    onPressedHandler,
}: CustomButtonProps) => {
    return (
        <button
            className={`bg-primary text-xs my-4 border-2 border-primary text-white uppercase py-2 px-4 transition-colors duration-150 hover:bg-secondary ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
            onClick={onPressedHandler}
        >
            {text}
        </button>
    )
}

export default CustomSmallButton