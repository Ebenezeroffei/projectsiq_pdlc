import { isValidPhoneNumber } from "react-phone-number-input";
import React, { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

class TextFieldUtils {
    static onTextValueChangeHandler = (
        ele: ChangeEvent<HTMLInputElement>,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        const value = ele.target.value;
        setValue(_ => value);
    }

    static clearTextValue = (
        inputRef: RefObject<HTMLInputElement | null>,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        setValue(_ => '');
        setHasValue(_ => false);
        setIsError(_ => false);
        inputRef.current?.focus();
    }

    static onTextInputOnBlurHandler = (
        inputRef: RefObject<HTMLInputElement | null | HTMLTextAreaElement>,
        isRequired: boolean,
        pattern: RegExp,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (isRequired) {
            const value = String(inputRef.current?.value);
            setIsError(_ => !pattern.test(value))
        }
    }

    static onKeyUpHandler = (
        ele: React.KeyboardEvent<HTMLInputElement>,
        onSubmitHandler: () => void = () => { }
    ) => {
        if (ele.key === 'Enter') {
            onSubmitHandler();
        }
    }

    static onTextAreaValueChangeHandler = (
        ele: ChangeEvent<HTMLTextAreaElement>,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        const value = ele.target.value;
        setValue(_ => value);
    }

    // Select
    static onSelectFieldValueChangeHandler = (
        ele: ChangeEvent<HTMLSelectElement>,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        const value = ele.target.value;
        setValue(_ => value);
    }

    static onSelectFieldBlurHandler = (
        inputRef: RefObject<HTMLSelectElement | null>,
        isRequired: boolean,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        const value = inputRef.current?.value;
        if (isRequired && (value === '--' || !value)) {
            setIsError(_ => true);
        }
        else {
            setIsError(_ => false);
        }
    }

    // Phone number
    static onPhoneNumberValueChangeHandler = (
        value: string,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        setValue(_ => value);
    }

    static onPhoneNumberInputBlurHandler = (
        value: string,
        isRequired: boolean,
        setIsError: Dispatch<SetStateAction<boolean>>,
    ) => {
        isRequired && setIsError(_ => !isValidPhoneNumber(value))

    }

    static clearPhoneInputValue = (
        inputRef: any,
        setValue: Dispatch<SetStateAction<string>>,
        setHasValue: Dispatch<SetStateAction<boolean>>,
    ) => {
        setValue(_ => '')
        setHasValue(_ => false);
        inputRef.current.focus()

    }

    // File input
    static onFileInputChangeHandler = (
        ele: ChangeEvent<HTMLInputElement>,
        setFile: Dispatch<SetStateAction<Blob | null>>,
        setFilename: Dispatch<SetStateAction<string>>,
    ) => {
        const files = ele.target.files;
        if (files?.length ?? 0 > 0) {
            const file = files![0];
            setFilename(_ => file.name);
            setFile(_ => file);

        }
    }

    static clearImage = (
        setFile: Dispatch<SetStateAction<Blob | null>>,
        setFilename: Dispatch<SetStateAction<string>>,
    ) => {
        setFile(_ => null);
        setFilename(_ => '');
    }
}


export default TextFieldUtils;