import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MdClose } from "react-icons/md"
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"
import Validators from "@/constants/misc/validators";

export type TextFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    label?: string,
    onSubmitHandler?: () => void,
    pattern?: RegExp,
    isRequired?: boolean,
    errorText?: string,
    helpText?: string,
    textType?: string,
    placeholder?: string,
    showLabel?: boolean,
    min?: number,
    max?: number,
    step?: number,
    readOnly?: boolean,
}

const CustomTextField = ({
    value,
    setValue,
    label = '',
    max,
    min,
    step,
    placeholder,
    pattern = Validators.General,
    isRequired = true,
    onSubmitHandler = () => { },
    textType = "text",
    helpText = "",
    showLabel = true,
    errorText = "Please provide a value for this field.",
    readOnly = false,
}: TextFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState(false);

    return (
        <section className="pb-2">
            {/* Label */}
            {
                showLabel && (
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
                )
            }
            {/* Input */}
            <div className="px-10 py-3 my-2 rounded-xs border border-transparent bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus-within:border-primary">
                <input
                    type={textType}
                    id={inputNameAndId}
                    name={inputNameAndId}
                    ref={inputRef}
                    value={value}
                    onKeyUp={(ele) => TextFieldUtils.onKeyUpHandler(
                        ele,
                        onSubmitHandler,
                    )}
                    min={min}
                    max={max}
                    readOnly={readOnly}
                    placeholder={placeholder}
                    step={step}
                    onBlur={() => TextFieldUtils.onTextInputOnBlurHandler(
                        inputRef,
                        isRequired,
                        pattern,
                        setIsError,
                    )}
                    onChange={(ele) => TextFieldUtils.onTextValueChangeHandler(
                        ele,
                        setValue,
                    )}
                    className="flex-auto text-white text-sm tracking-wide outline-none"
                />

            </div>
            {/* Error or Help Texts */}
            {
                isError ? (
                    <p className="text-xs text-red-400 pl-1">
                        {errorText}
                    </p>
                ) : (

                    <p className="text-xs text-gray-400 pl-1">
                        {helpText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomTextField