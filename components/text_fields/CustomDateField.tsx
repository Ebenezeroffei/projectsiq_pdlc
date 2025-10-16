import CustomTextField, { TextFieldProps } from "./CustomTextField"

const CustomDateField = ({
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
            textType="date"
            isRequired={isRequired}
        />
    )
}

export default CustomDateField