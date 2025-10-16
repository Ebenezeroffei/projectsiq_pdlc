import { Dispatch, SetStateAction, useId, useRef, useState } from "react";
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"

export type SelectFieldDictValue = { name: string, value: string }

export type SelectFieldValue = (string | SelectFieldDictValue)[]

type SelectFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    items: SelectFieldValue,
    label?: string,
    isRequired?: boolean,
    errorText?: string,
}

const CustomSelectField = ({
    value,
    setValue,
    label = '',
    items,
    isRequired = true,
    errorText = "Please provide a value for this field.",
}: SelectFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLSelectElement>(null);
    const [isError, setIsError] = useState(false);
    const randomId = useId();

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
            <select
                name={inputNameAndId}
                id={inputNameAndId}
                value={value}
                ref={inputRef}
                onChange={(ele) => TextFieldUtils.onSelectFieldValueChangeHandler(
                    ele,
                    setValue,
                )}
                onBlur={() => TextFieldUtils.onSelectFieldBlurHandler(
                    inputRef,
                    isRequired,
                    setIsError,
                )}
                className="px-10 py-3 my-2 rounded-xs border border-transparent bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus:border-primary w-full outline-none text-white text-sm tracking-wide"
            >
                {
                    items.map((ele, index) => {
                        if (typeof ele == 'string') {
                            return (
                                <option
                                    key={`${index}_select_option_${randomId}`}
                                    value={ele}
                                >
                                    {ele}
                                </option>
                            )
                        }
                        return (
                            <option
                                key={`${index}_select_option_${randomId}`}
                                value={ele.value}
                            >
                                {ele.name}
                            </option>
                        )
                    })
                }
            </select>

            {/* Error or Help Texts */}
            {
                isError && (
                    <p className="text-xs text-red-500 pl-1">
                        {errorText}
                    </p>
                )
            }
        </section>
    )
}

export default CustomSelectField