import { Dispatch, SetStateAction, useRef, useState } from "react";
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"
import Validators from "@/constants/misc/validators";

type TextAreaProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    label?: string,
    isRequired?: boolean,
    errorText?: string,
    helpText?: string,
}

const CustomTextArea = ({
    value,
    setValue,
    label = '',
    isRequired = true,
    helpText = "",
    errorText = "Please provide a value for this field.",
}: TextAreaProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isError, setIsError] = useState(false);

    return (
        <section className="pb-2">
            {/* Label */}
            <div>
                <label
                    htmlFor={inputNameAndId}
                    className="capitalize text-sm tracking-wide text-white flex"
                >
                    {label}:
                    {
                        isRequired && (
                            <span
                                className="text-red-500 ml-0.5"
                            >
                                *
                            </span>
                        )
                    }
                </label>
            </div>
            {/* Textarea */}
            <textarea
                ref={inputRef}
                name={inputNameAndId}
                rows={10}
                id={inputNameAndId}
                onBlur={() => TextFieldUtils.onTextInputOnBlurHandler(inputRef, isRequired, Validators.General, setIsError,)}
                onChange={(ele) => TextFieldUtils.onTextAreaValueChangeHandler(
                    ele,
                    setValue,
                )}

                value={value}
                className="px-10 py-3 my-2 text-white w-full border-transparent outline-none rounded-xs border bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus:border-primary text-sm tracking-wide"
            >
            </textarea>

            {/* Error or Help Texts */}
            {
                isError ? (
                    <p className="text-xs text-red-400 pl-1">
                        {errorText}
                    </p>
                ) : (

                    <p className="text-xs text-gray-500 pl-1">
                        {helpText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomTextArea