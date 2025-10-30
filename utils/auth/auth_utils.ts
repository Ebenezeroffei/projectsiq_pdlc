import ForgotPasswordFlow from "@/constants/auth/forgot_password_flow"
import Validators from "@/constants/misc/validators"
import { authApi } from "@/lib/axios_options"
import { Dispatch, SetStateAction } from "react"
import axios from "@/node_modules/axios"
import { signIn, signOut } from "@/node_modules/next-auth/react"
import { AppRouterInstance } from "@/node_modules/next/dist/shared/lib/app-router-context.shared-runtime"
import { toast } from "react-toastify"
import MiscUtils from "@/utils/misc/misc_utils"
import Endpoints from "../misc/endpoints"

class AuthUtils {
    static login = async (
        username: string,
        password: string,
        router: AppRouterInstance,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (username && Validators.Password.test(password)) {
            setIsButtonLoading(_ => true);
            const res = await signIn('credentials', {
                redirect: false,
                username,
                password,
            })
            setIsButtonLoading(_ => false);
            if (res?.ok) {
                toast.success("Login Successful");
                router.replace('/admin')
            }
            else {
                toast.error(res?.error)
            }
        }
    }

    // static register = async (
    //     firstName: string,
    //     lastName: string,
    //     email: string,
    //     password1: string,
    //     password2: string,
    //     router: AppRouterInstance,
    //     setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    // ) => {
    //     if (firstName && lastName && Validators.Email.test(email) && Validators.Password.test(password1) && password1 === password2) {
    //         setIsButtonLoading(_ => true);
    //         try {
    //             const data = {
    //                 first_name: firstName,
    //                 last_name: lastName,
    //                 email,
    //                 password: password1
    //             }
    //             const res = await authApi.post('/register/', data);
    //             if (res.status === axios.HttpStatusCode.Created) {
    //                 toast.success("User registered successfully");
    //                 router.replace('/auth/login');
    //             }
    //         }
    //         catch (error) {
    //             await MiscUtils.evaluateError(error)
    //         }
    //         finally {
    //             setIsButtonLoading(_ => false);
    //         }
    //     }
    // }

    static requestPasswordReset = async (
        email: string,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
        setForgotPasswordFlow: Dispatch<SetStateAction<number>>,
    ) => {
        if (Validators.Email.test(email)) {
            setIsButtonLoading(_ => true);
            try {
                const data = { email }
                await authApi.post(Endpoints.auth.requestPasswordReset, data);
                toast.info("OTP sent successfully.");
                setForgotPasswordFlow(_ => ForgotPasswordFlow.ValidateOTP);
            }
            catch (err) {
                await MiscUtils.evaluateError(err);
            }
            finally {
                setIsButtonLoading(_ => false);
            }
        }
    }

    static validateOTP = async (
        otp: string,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
        setForgotPasswordFlow: Dispatch<SetStateAction<number>>,
    ) => {
        if (Validators.OTP.test(otp)) {
            setIsButtonLoading(_ => true)
            try {
                const data = { token: Number(otp) }
                await authApi.post(Endpoints.auth.validateToken, data)
                toast.info("OTP verified successfully.");
                setForgotPasswordFlow(_ => ForgotPasswordFlow.ResetPassword);
            }
            catch (err) {
                await MiscUtils.evaluateError(err);
            }
            finally {
                setIsButtonLoading(_ => false)
            }

        }
        else {
            toast.warning("Invalid OTP. Please enter a 6-digit numeric code.")
        }
    }

    static resetPassword = async (
        newPassword1: string,
        newPassword2: string,
        otp: string,
        router: AppRouterInstance,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (Validators.Password.test(newPassword1) && newPassword1 === newPassword2 && Validators.OTP.test(otp)) {
            setIsButtonLoading(_ => true);
            try {
                const data = {
                    token: Number(otp),
                    password: newPassword1,

                };
                await authApi.post(Endpoints.auth.resetPassword, data)
                toast.success("Password reset successful.")
                setTimeout(() => router.replace('/auth/login'), 3000)
            }
            catch (err) {
                await MiscUtils.evaluateError(err);
            }
            finally {
                setIsButtonLoading(_ => false);
            }
        }
    }

    static logout = async () => {
        toast.loading("Logging out")
        await signOut();
        toast.dismiss();
        toast.info("Logout successful")
    }

    static changePassword = async (
        oldPassword: string,
        newPassword1: string,
        newPassword2: string,
        router: AppRouterInstance,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (Validators.Password.test(oldPassword) && Validators.Password.test(newPassword1) && newPassword1 === newPassword2) {
            try {
                setIsButtonLoading(_ => true)
                const url = 'change-password/';
                const headers = await MiscUtils.generateHeaders();
                const data = {
                    old_password: oldPassword,
                    new_password: newPassword1,
                }
                await authApi.put(url, data, {
                    headers,
                });
                toast.success("Password changed")
                await signOut();
                router.replace('/auth/login');
            }
            catch (err) {
                await MiscUtils.evaluateError(err);
            }
            finally {
                setIsButtonLoading(_ => false)
            }
        }
        else if (newPassword1 == oldPassword) {
            toast.warning("The new and old passwords should be different.")
        }
    }
}

export default AuthUtils;