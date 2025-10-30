'use client';

import { Dispatch, SetStateAction, useState } from "react";
import CustomEmailField from "../text_fields/CustomEmailField";
import CustomButton from "../buttons/CustomButton";
import ForgotPasswordFlow from "@/constants/auth/forgot_password_flow";
import CustomOTPField from "../text_fields/CustomOTPField";
import { useRouter } from "next/navigation";
import { Inter } from 'next/font/google'
import CustomPasswordField from "../text_fields/CustomPasswordField";
import AuthUtils from "@/utils/auth/auth_utils";

const inter = Inter({ subsets: ['latin'] })

type RequestPasswordResetProps = {
    email: string,
    setEmail: Dispatch<SetStateAction<string>>,
    setForgotPasswordFlow: Dispatch<SetStateAction<number>>,
}
const RequestPasswordReset = ({
    email,
    setEmail,
    setForgotPasswordFlow
}: RequestPasswordResetProps) => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    return (
        <>
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-semibold uppercase tracking-wide text-primary">
                    Request Password Reset
                </h1>
                <span className="text-gray-400 text-sm">
                    Enter details to continue
                    Enter your email to continue
                </span>
            </div>
            <CustomEmailField
                value={email}
                setValue={setEmail}
            />
            <CustomButton
                text="Request Password Reset"
                isLoading={isButtonLoading}
                onPressedHandler={() => AuthUtils.requestPasswordReset(
                    email,
                    setIsButtonLoading,
                    setForgotPasswordFlow,
                )}
            />
        </>
    )
}


type ValidateOTPProps = {
    otp: string,
    setOtp: Dispatch<SetStateAction<string>>,
    email: string,
    setForgotPasswordFlow: Dispatch<SetStateAction<number>>,

}

const ValidateOTP = ({
    otp,
    setOtp,
    email,
    setForgotPasswordFlow,
}: ValidateOTPProps) => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);



    return (
        <>
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-semibold uppercase tracking-wide text-primary">
                    Validate OTP
                </h1>
                <span className="text-gray-400 text-sm">
                    Enter the One Time Password we sent to <strong>{email}.</strong>
                </span>
            </div>
            <CustomOTPField
                numberOfInputs={6}
                value={otp}
                setValue={setOtp}
            />
            <div className="flex justify-center">
                <CustomButton
                    text="Request Password Reset"
                    isLoading={isButtonLoading}
                    onPressedHandler={() => AuthUtils.validateOTP(
                        otp,
                        setIsButtonLoading,
                        setForgotPasswordFlow,
                    )}
                />
            </div>
        </>
    );
}


type ResetPasswordProps = {
    otp: string,
}

const ResetPassword = ({
    otp,
}: ResetPasswordProps) => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
    const router = useRouter();


    return (
        <>
            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-semibold uppercase tracking-wide text-primary">
                    Reset Password
                </h1>
                <span className="text-gray-400 text-sm">
                    Enter your new password to continue.
                </span>
            </div>
            <CustomPasswordField
                label="New Password"
                value={newPassword}
                setValue={setNewPassword}
            />
            <CustomPasswordField
                label="New Password Confirmation"
                value={newPasswordConfirmation}
                setValue={setNewPasswordConfirmation}
            />
            <CustomButton
                text="Request Password Reset"
                isLoading={isButtonLoading}
                onPressedHandler={() => AuthUtils.resetPassword(
                    newPassword,
                    newPasswordConfirmation,
                    otp,
                    router,
                    setIsButtonLoading,
                )}
            />
        </>
    )
}


const ForgotPasswordPageWrapper = () => {
    const [forgotPasswordFlow, setForgotPasswordFlow] = useState(ForgotPasswordFlow.RequestPasswordReset);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    if (forgotPasswordFlow === ForgotPasswordFlow.RequestPasswordReset) return (
        <RequestPasswordReset
            email={email}
            setEmail={setEmail}
            setForgotPasswordFlow={setForgotPasswordFlow}
        />
    )

    if (forgotPasswordFlow === ForgotPasswordFlow.ValidateOTP) return (
        <ValidateOTP
            email={email}
            otp={otp}
            setOtp={setOtp}
            setForgotPasswordFlow={setForgotPasswordFlow}
        />
    )

    return (
        <ResetPassword
            otp={otp}
        />
    )
}

export default ForgotPasswordPageWrapper