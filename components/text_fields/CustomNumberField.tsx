import CustomTextField, { TextFieldProps } from "./CustomTextField"

const CustomNumberField = ({
    value,
    setValue,
    label,
    step,
    min,
    max,
    helpText,
    errorText,
    pattern,
}: TextFieldProps) => {
    return (
        <CustomTextField
            value={value}
            setValue={setValue}
            label={label}
            textType="number"
            min={min}
            max={max}
            step={step}
            helpText={helpText}
            errorText={errorText}
            pattern={pattern}
        />
    )
}

export default CustomNumberField