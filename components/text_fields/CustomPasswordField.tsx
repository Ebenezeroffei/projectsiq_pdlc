import Validators from "@/constants/misc/validators";
import CustomTextField, { TextFieldProps } from "./CustomTextField"


const CustomPasswordField = ({
    value,
    setValue,
    isRequired = true,
    label = "Password",
    pattern = Validators.Password,
    errorText = "Password should be at lease 6 characters.",
    onSubmitHandler = () => { },
    helpText = "Password should be at lease 6 characters."
}: TextFieldProps) => {
    return (
        <CustomTextField
            label={label}
            value={value}
            setValue={setValue}
            errorText={errorText}
            helpText={helpText}
            textType="password"
            pattern={pattern}
            isRequired={isRequired}
            onSubmitHandler={onSubmitHandler}
        />
    );
}

export default CustomPasswordField