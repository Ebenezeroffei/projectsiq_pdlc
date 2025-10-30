'use client'

import { use, useState } from "react"
import CustomTextField from "../text_fields/CustomTextField";
import CustomPasswordField from "../text_fields/CustomPasswordField";
import CustomButton from "../buttons/CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthUtils from "@/utils/auth/auth_utils";

const LoginPageWrapper = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const router = useRouter();

    return (
        <section>
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-semibold uppercase tracking-wide text-primary">
                    Login
                </h1>
                <span className="text-gray-400 text-sm">
                    Enter details to continue
                </span>
            </div>
            <div className="mt-8">
                <CustomTextField
                    label="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomPasswordField
                    label="Password"
                    value={password}
                    setValue={setPassword}
                />
                <section className="flex justify-end">
                    <Link
                        href={'/auth/forgot-password'}
                        className="font-semibold text-primary text-xs hover:underline"
                    >
                        Forgot Password
                    </Link>
                </section>
                <CustomButton
                    text="Login"
                    isLoading={isButtonLoading}
                    onPressedHandler={() => AuthUtils.login(
                        username,
                        password,
                        router,
                        setIsButtonLoading
                    )}
                />
            </div>
        </section>
    )
}

export default LoginPageWrapper