import CustomTextField, { TextFieldProps } from "./CustomTextField"

const CustomColorField = ({
    label,
    value,
    setValue,
    isRequired = true
}: TextFieldProps) => {
    return (
        <CustomTextField
            label={label}
            value={value}
            setValue={setValue}
            textType="color"
            isRequired={isRequired}
        />
    )
}

export default CustomColorField