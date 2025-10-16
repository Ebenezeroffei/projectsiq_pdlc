import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

class OTPFieldUtils {
    static onKeyUpHandler = (
        ele: React.KeyboardEvent<HTMLInputElement>,
        value: string,
        numberOfInputs: number,
        setValue: Dispatch<SetStateAction<string>>,
    ) => {
        const currentElement = document.activeElement as HTMLInputElement;
        const textValue = currentElement.value;
        const nextSibling = currentElement?.nextSibling as HTMLInputElement | null;
        const prevSibling = currentElement?.previousSibling as HTMLInputElement | null;
        if (ele.key === 'Backspace') {
            // Not last input
            if (value.length - 1 < numberOfInputs - 1 && prevSibling) {
                prevSibling.value = '';
                prevSibling.focus();
            }
            setValue(prevValue => prevValue.substring(0, prevValue.length - 1))
        }
        else if (textValue && value.length + 1 <= numberOfInputs) {
            setValue(prevValue => prevValue += textValue);
            nextSibling && nextSibling.focus();
        }
    }

    static onFocusHandler = (
        ele: ChangeEvent<HTMLInputElement>
    ) => {
        const prevSibling = ele.target.previousSibling as HTMLInputElement | null;
        const nextSibling = ele.target.nextSibling as HTMLInputElement | null;
        const value = ele.target.value;
        if (value && nextSibling) {
            nextSibling.focus();
        }
        if (prevSibling && !prevSibling.value) {
            prevSibling.focus();
        }
    }
}

export default OTPFieldUtils;