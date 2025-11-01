import CarEntity from "@/@types/entities/CarEntity";
import InterestedBuyerForm from "@/components/misc/InterestedBuyerForm";
import { ContextValuesType } from "@/providers/ContextProvider";
import { Dispatch, SetStateAction } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import MiscUtils from "../misc/misc_utils";
import { api } from "@/lib/axios_options";
import Endpoints from "../misc/endpoints";
import { toast } from "react-toastify";
import { KeyedMutator } from "swr";
import Paginator from "@/@types/entities/Paginator";
import InterestedBuyerEntity from "@/@types/entities/InterestedBuyerEntity";

class LeadUtils {
    static showInterestAttempt = (
        contextValues: ContextValuesType,
        vehicle: CarEntity,
    ) => {
        const { setModalTitle, setModalContent, setShowBigModal } = contextValues;
        setModalTitle(_ => "Show Interest")
        setModalContent(_ => (
            <InterestedBuyerForm
                vehicle={vehicle}
            />
        ))
        setShowBigModal(_ => true);
    }

    static showInterest = async (
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        preferredPayment: string,
        message: string,
        vehicleId: string,
        setIsInterestRecorded: Dispatch<SetStateAction<boolean>>,
        setIsButtonLoading: Dispatch<SetStateAction<boolean>>,
        setShowBigModal: Dispatch<SetStateAction<boolean>>,
    ) => {
        if (firstName && lastName && isValidPhoneNumber(phoneNumber)) {
            const hasInternet = await MiscUtils.checkNetworkStatus();
            if (hasInternet) {
                try {
                    setIsButtonLoading(_ => true);
                    const data = {
                        message,
                        email,
                        car: vehicleId,
                        first_name: firstName,
                        last_name: lastName,
                        phone: phoneNumber,
                        preferred_payment: preferredPayment,
                    }
                    const headers = await MiscUtils.generateHeaders();
                    api.post(Endpoints.leads.listOrCreate, data, {
                        headers,
                    })
                    setIsInterestRecorded(_ => true);
                    setTimeout(() => setShowBigModal(_ => false), 5000)
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

    static markAsContacted = async (
        itemId: string,
        mutate: KeyedMutator<Paginator<InterestedBuyerEntity> | undefined>
    ) => {
        const hasInternet = await MiscUtils.checkNetworkStatus();
        if (hasInternet) {
            const headers = await MiscUtils.generateHeaders();
            api.put(Endpoints.leads.markAsContacted(itemId), {}, {
                headers,
            });
            mutate();
            toast.success('Mark as contacted');
        }
    }
}

export default LeadUtils;