import CustomTextField, { TextFieldProps } from "./CustomTextField"

const CustomNumberField = ({
    value,
    setValue,
    label,
    step,
}: TextFieldProps) => {
    return (
        <CustomTextField
            value={value}
            setValue={setValue}
            label={label}
            textType="number"
            min={0}
            step={step}
        />
    )
}

export default CustomNumberField