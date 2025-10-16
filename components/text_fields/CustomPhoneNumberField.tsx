import { Dispatch, SetStateAction, useRef, useState } from "react"
import PhoneInput from "react-phone-number-input"
import { TextFieldProps } from "./CustomTextField"
import MiscUtils from "@/utils/misc/misc_utils"
import TextFieldUtils from "@/utils/components/text_field_utils"


const CustomPhoneNumberField = ({
  label = 'Phone Number',
  value,
  setValue,
  isRequired = true,
  helpText = '',
  errorText = "Provide a valid phone number",
}: TextFieldProps) => {

  const inputNameAndId = MiscUtils.generateInputNameAndId(label ?? '');
  const inputRef = useRef<any>(null);
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
      {/* Input */}
      <div className="px-10 py-3 my-2 rounded-xs border bg-[#2a2a2a]  flex transition-all duration-100 items-center gap-x-2 focus-within:border-primary">
        <PhoneInput
          focusInputOnCountrySelection={true}
          ref={inputRef}
          international={true}
          defaultCountry="GH"
          initialValueFormat="national"
          value={value}
          countryCallingCodeEditable={false}
          onChange={(value) => TextFieldUtils.onPhoneNumberValueChangeHandler(
            value as string,
            setValue,
          )}
          onBlur={() => TextFieldUtils.onPhoneNumberInputBlurHandler(
            value,
            isRequired,
            setIsError
          )}
          className="flex-auto"
        />

      </div>
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

export default CustomPhoneNumberField