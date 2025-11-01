import Validators from "@/constants/misc/validators";
import { Dispatch, SetStateAction } from "react";
import MiscUtils from "../misc/misc_utils";
import { api } from "@/lib/axios_options";
import Endpoints from "../misc/endpoints";

class HomeUtils {

    static subscribeToNewsLetter = async (
        email: string,
        setEmail: Dispatch<SetStateAction<string>>,
        setIsSubscribed: Dispatch<SetStateAction<boolean>>,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (Validators.Email.test(email)) {
            const hasInternet = await MiscUtils.checkNetworkStatus();
            if (hasInternet) {
                try {
                    setIsButtonLoading(_ => true);
                    const data = { email }
                    api.post(Endpoints.core.subscribe, data);
                    setIsSubscribed(_ => true);
                    setEmail(_ => '')
                    setTimeout(() => setIsSubscribed(_ => false), 5000)
                }
                catch (err) {
                    await MiscUtils.evaluateError(err);
                }
                finally {
                    setIsButtonLoading(_ => false);
                }
            }
        }
    }
}

export default HomeUtils;