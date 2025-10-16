import Validators from "@/constants/misc/validators"
import CustomTextField, { TextFieldProps } from "./CustomTextField"


const CustomEmailField = ({
    value,
    setValue,
    isRequired = true,
    showLabel = true,
    placeholder,
    onSubmitHandler = () => { },
}: TextFieldProps) => {
    return (
        <CustomTextField
            label="Email"
            value={value}
            setValue={setValue}
            pattern={Validators.Email}
            isRequired={isRequired}
            errorText="Invalid Email"
            textType="email"
            onSubmitHandler={onSubmitHandler}
            showLabel={showLabel}
            placeholder={placeholder}
        />
    )
}

export default CustomEmailField