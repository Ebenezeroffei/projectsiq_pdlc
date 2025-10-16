import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import MiscUtils from "@/utils/misc/misc_utils"
import OTPFieldUtils from "@/utils/components/otp_fiels_utils";

export type OTPFieldProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    numberOfInputs: number,
    label?: string,
    pattern?: RegExp,
    errorText?: string,
    helpText?: string,
    textType?: "password" | "text",
}

const CustomOTPField = ({
    value,
    setValue,
    numberOfInputs,
    label = 'One Time Password',
    textType = "text",
    helpText = "",
}: OTPFieldProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);

    return (
        <section className="mb-2">
            {/* Label */}
            <div>
                <label
                    htmlFor={inputNameAndId}
                    className="capitalize text-sm tracking-wide text-white flex justify-center"
                >
                    {label}:

                    <span
                        className="text-red-500 ml-0.5"
                    >
                        *
                    </span>

                </label>
            </div>
            {/* Inputs */}
            <div className="my-4 flex justify-center gap-2">
                {
                    new Array(numberOfInputs).fill(0).map((_, index) =>
                        <input
                            key={`otp_input_${index}`}
                            type={textType}
                            onKeyUp={(ele) => OTPFieldUtils.onKeyUpHandler(
                                ele,
                                value,
                                numberOfInputs,
                                setValue
                            )}
                            min={"0"}
                            onFocus={(ele) => OTPFieldUtils.onFocusHandler(
                                ele
                            )}
                            max={"9"}
                            maxLength={1}
                            autoFocus={true}
                            className="text-white bg-[#2a2a2a] text-center w-10 tracking-wide outline-none p-2 border border-transparent rounded-xs  focus:border-primary "
                        />
                    )
                }
            </div>
            {/* Help Texts */}
            <p className="text-xs text-gray-500 pl-1 text-center">
                {helpText}
            </p>
        </section>
    )
}

export default CustomOTPField;