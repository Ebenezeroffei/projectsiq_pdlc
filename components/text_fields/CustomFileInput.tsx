import { Dispatch, SetStateAction, useRef, useState } from "react";
import { MdClose } from "@/node_modules/react-icons/md"
import TextFieldUtils from "@/utils/components/text_field_utils";
import MiscUtils from "@/utils/misc/misc_utils"

export type FileInputProps = {
    file: Blob | null,
    setFile: Dispatch<SetStateAction<Blob | null>>,
    filename: string,
    setFilename: Dispatch<SetStateAction<string>>,
    label?: string,
    accept?: string,
    isRequired?: boolean,
    errorText?: string,
    helpText?: string,
}

const CustomFileInput = ({
    file,
    setFile,
    filename,
    setFilename,
    label = '',
    accept = '*',
    isRequired = true,
    helpText = "",
    errorText = "Please choose a file..",
}: FileInputProps) => {
    const inputNameAndId = MiscUtils.generateInputNameAndId(label);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(file));

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
            {/* Input */}
            <div className="px-10 py-3 my-2 rounded-xs border border-transparent bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus-within:border-primary">
                <input
                    type='file'
                    id={inputNameAndId}
                    name={inputNameAndId}
                    ref={inputRef}
                    onChange={(ele) => TextFieldUtils.onFileInputChangeHandler(
                        ele,
                        setFile,
                        setFilename,
                    )}
                    accept={accept}
                    className="absolute w-0 h-0 overflow-hidden"
                />
                <div
                    onClick={() => inputRef.current?.click()}
                    className="flex-auto text-white text-sm tracking-wide outline-none truncate">
                    {filename || "Choose file"}
                </div>
            </div>
            {/* Error or Help Texts */}
            {
                isError ? (
                    <p className="text-xs text-red-500 pl-1">
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

export default CustomFileInput