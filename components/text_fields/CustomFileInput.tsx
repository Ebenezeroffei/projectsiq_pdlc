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
                    className="text-xs font-semibold capitalize tracking-wide text-gray-600 flex"
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
            <div className="p-2 my-2 border cursor-pointer relative border-gray-200 flex transition-all duration-100 items-center gap-x-2 rounded">
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
                    className="flex-auto text-gray-500 font-semibold text-sm tracking-wide outline-none truncate">
                    {filename || "Choose file"}
                </div>
                {/* Clear Button */}
                {
                    filename && (
                        <section
                            className="bg-red-100 p-0.5 cursor-pointer flex-none transition-colors duration-150 hover:bg-red-200"
                            onClick={() => TextFieldUtils.clearImage(
                                setFile,
                                setFilename,
                            )}
                        >
                            <MdClose
                                className="text-red-600"
                                size={15}
                            />
                        </section>
                    )
                }
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