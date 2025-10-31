import { Noto_Sans_Lao } from "next/font/google";
import { CustomButtonProps } from "./CustomButton";
const notoSans = Noto_Sans_Lao({ subsets: ["latin"] });



const CustomSmallSecondaryButton = ({
    text,
    onPressedHandler,
}: CustomButtonProps) => {
    return (
        <button
            className={`bg-gray-200 text-xs my-4 border-2 border-gray-200 text-primary uppercase py-2 px-4 transition-colors duration-150 hover:bg-gray-300 ${notoSans.className} cursor-pointer rounded-xs tracking-wider`}
            onClick={onPressedHandler}
        >
            {text}
        </button>
    )
}

export default CustomSmallSecondaryButton