import { Dispatch, SetStateAction, useRef, useState } from "react"
import { MdClose } from "react-icons/md"
import TextFieldUtils from "@/utils/components/text_field_utils"

type CustomSearchFieldProps = {
    query: string,
    setQuery: Dispatch<SetStateAction<string>>,
    placeholder?: string,
    inputId?: string,
    onSubmitHandler?: () => void,
}

const CustomSearchField = ({
    query,
    setQuery,
    inputId,
    placeholder = "Search...",
    onSubmitHandler = () => { },
}: CustomSearchFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className="px-10 py-3 my-2 rounded-xs border bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus-within:border-primary">
            <input
                type='text'
                ref={inputRef}
                value={query}
                id={inputId}
                placeholder={placeholder}
                onKeyUp={(ele) => TextFieldUtils.onKeyUpHandler(
                    ele,
                    onSubmitHandler,
                )}
                onChange={(ele) => TextFieldUtils.onTextValueChangeHandler(
                    ele,
                    setQuery,
                )}
                className="flex-auto text-white text-sm tracking-wide outline-none"
            />
        </div>
    )
}

export default CustomSearchField