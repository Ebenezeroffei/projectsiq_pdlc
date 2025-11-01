import ErrorEntity from "@/@types/entities/ErrorEntity";
// import AlertDialogue from "@components/misc/AlertDialogue";
import { api } from "@/lib/axios_options";
import axios, { AxiosHeaders } from "axios";
import { isAxiosError } from "axios";
import { getSession, signOut } from "next-auth/react";
import { KeyedMutator } from "swr";
import { ContextValuesType } from "@/providers/ContextProvider";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";
import AlertDialogue from "@/components/misc/AlertDialogue";
import Endpoints from "./endpoints";


class MiscUtils {
    static generateInputNameAndId = (
        label: string
    ) => {
        const randomNumber = Math.floor(Math.random() * 100000);
        return `${label.trim().replace(' ', '-').toLowerCase()}`;
    }

    static generateRandomNumber = (length: number) => Math.floor(Math.random() * Math.pow(10, length))

    static getSessionData = async () => {
        const session = await getSession()
        return session;
    }

    static evaluateError = async (
        error: any,
        throwException: boolean = false,
    ) => {
        toast.dismiss();
        if (isAxiosError(error)) {
            const errorResponse = error.response;
            const errorData: ErrorEntity = errorResponse?.data;
            // Token has expired
            const tokenExpiryMessage = 'Token is expired'
            if (errorResponse?.status === axios.HttpStatusCode.Unauthorized && errorData.errors['detail'] === tokenExpiryMessage) {
                toast.info("Token has expired.");
                await signOut();
            }
            else {
                const errorMessages: string[] = []
                Object.keys(errorData.errors).forEach(errorKey => {
                    const sanitizedErrorKey = errorKey.split('_').join(' ').trim();
                    const errorMessage = errorKey === 'detail'
                        ? errorData.errors[errorKey]
                        : `${MiscUtils.capitalize(sanitizedErrorKey)} : ${errorData.errors[errorKey]}`

                    if (!throwException) {
                        toast.error(errorMessage)
                    }
                    errorMessages.push(errorMessage)
                })
                if (throwException) {
                    throw new Error(errorMessages.join('; '));
                }
            }
        }
        else {
            error as Error;
            toast.error(String(error))
        }
    }

    static capitalize = (text: string) => {
        const words = text.trim().split(' ');
        let result = "";
        words.forEach(word => {
            result += `${word[0].toUpperCase()}${word.substring(1,)} `
        });
        return result.trim();
    }

    static generateHeaders = async (): Promise<AxiosHeaders> => {
        const session = await MiscUtils.getSessionData();
        const headers = new AxiosHeaders();
        headers.set('Authorization', `Bearer ${session?.access}`);
        return headers;
    }

    static checkNetworkStatus = async () => {
        try {
            await api.get(Endpoints.core.networkStatus);
            return true
        }
        catch {
            toast.info("No internet connection.")
            return false;
        }
    }

    static blobToBase64(blob: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(String(reader.result));
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }


    static getData = async <T,>(
        url: string,
        throwException: boolean = true,
    ) => {
        const hasInternet = await MiscUtils.checkNetworkStatus();
        if (hasInternet) {
            try {
                const headers = await MiscUtils.generateHeaders();
                const res = await api.get(url, {
                    headers,
                })
                return res.data as T;
            }
            catch (err) {
                await MiscUtils.evaluateError(err, throwException);
            }
        }

    }

    static showConfirmDialogue = (
        contextValues: ContextValuesType,
        modalTitle: string,
        modalContent: string,
        onYesResponseHandler: () => void
    ) => {
        const { setModalTitle, setModalContent, setShowSmallModal } = contextValues;
        setModalTitle(_ => modalTitle);
        setModalContent(_ =>
            <AlertDialogue
                onYesResponseHandler={onYesResponseHandler}
                content={modalContent}
            />
        );
        setShowSmallModal(_ => true);
    }

    static deleteItemMutate = async <T,>(
        url: string,
        mutate: KeyedMutator<T | undefined>,
    ) => {
        try {
            const hasInternet = await MiscUtils.checkNetworkStatus();
            if (hasInternet) {
                toast.loading("Deleting item");
                const headers = await MiscUtils.generateHeaders();
                await api.delete(url, { headers })
                mutate();
                toast.dismiss()
                toast.success("Item deleted")
            }
        }
        catch (err) {
            await MiscUtils.evaluateError(err);
        }
    }

    static resolveFilename = (url: string) => {
        const urlSplit = url.split('/')
        return urlSplit[urlSplit.length - 1];
    }

    static generateFilenameUrl = (url: string) => {
        return `${process.env.NEXT_PUBLIC_BASE_URL}${url}`
    }

    static debounce = (
        inputId: string,
        onDebounceHandler: () => void,
        delay: number = 350,
    ) => {
        let timeout: NodeJS.Timeout;

        document.getElementById(inputId)?.addEventListener("keyup", () => {
            clearTimeout(timeout); // Clear previous timeout
            timeout = setTimeout(onDebounceHandler, delay)
        });
    }

    static getValueByKeyPath = (obj: any, keyPath: string) => {
        return keyPath.split('.').reduce((acc, key) => acc?.[key], obj);
    };

    static appendQueryString = (
        url: string,
        key: string,
        value: string,
    ) => {
        const urlLst = url.split('?')
        if (urlLst.length == 2 && urlLst[1]) {
            const searchParams = new URLSearchParams(urlLst[1]);
            searchParams.set(key, value);
            return `${urlLst[0]}?${searchParams.toString()}`
        }
        return `${url}?${key}=${value}`
    }

    static search = (
        inputId: string,
        defaultUrl: string,
        setUrl: Dispatch<SetStateAction<string>>,
    ) => {
        const query = (document.getElementById(inputId) as HTMLInputElement).value;
        setUrl(_ => MiscUtils.appendQueryString(defaultUrl, 'search', query))
    }
}

export default MiscUtils;