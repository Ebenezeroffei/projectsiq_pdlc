'use client';

import { useState } from "react"
import FormWrapper from "./FormWrapper"
import CustomTextField from "../text_fields/CustomTextField";
import CustomEmailField from "../text_fields/CustomEmailField";
import CustomPhoneNumberField from "../text_fields/CustomPhoneNumberField";
import CustomSelectField from "../text_fields/CustomSelectField";
import CustomTextArea from "../text_fields/CustomTextArea";
import CustomButton from "../buttons/CustomButton";
import CarEntity from "@/@types/entities/CarEntity";
import Image from "next/image";
import NotoSans from "./NotoSans";
import LeadUtils from "@/utils/leads/lead_utils";
import { useAppContext } from "@/providers/ContextProvider";

type InterestedBuyerFormProps = Readonly<{
    vehicle: CarEntity
}>

const InterestedBuyerForm = ({ vehicle }: InterestedBuyerFormProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const paymentOptions = ['Full Payment', 'Financing'];
    const [preferredPayment, setPreferredPayment] = useState(paymentOptions[0]);
    const [message, setMessage] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const thumbnail = vehicle.images[0].image;
    const [interestRecorded, setIsInterestRecorded] = useState(false);
    const { setShowBigModal } = useAppContext();

    if (interestRecorded) return (
        <section className="px-4 py-8">
            <NotoSans className="text-center">
                <p className="text-primary text-2xl uppercase font-semibold">
                    Thanks for your interest! 🚗
                </p>
                <p className="text-gray-400 mt-4 max-w-[400px] mx-auto">
                    We’re excited to help you take the next step toward owning your car. Our agent will contact you shortly.
                </p>
            </NotoSans>
        </section>
    )

    return (
        <section className="p-4">
            <div className="flex gap-4 mb-4 items-start">
                <Image
                    src={thumbnail}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    width={100}
                    height={100}
                    className="aspect-video rounded-xs w-[150px] h-auto object-center object-cover"
                />
                <section>
                    <NotoSans className="text-xl mt-4">
                        <span className="text-zinc-400">{vehicle?.brand.toUpperCase()}</span>
                        <span className="text-white ml-1"> - {vehicle?.model}</span>
                    </NotoSans>
                    <p className="text-primary text-xl">
                        GHS {vehicle.price}
                    </p>
                </section>
            </div>
            <FormWrapper>
                <CustomTextField
                    label="First Name"
                    value={firstName}
                    setValue={setFirstName}
                />
                <CustomTextField
                    label="Last Name"
                    value={lastName}
                    setValue={setLastName}
                />
                <CustomEmailField
                    label="Email"
                    isRequired={false}
                    value={email}
                    setValue={setEmail}
                />
                <CustomPhoneNumberField
                    label="Phone Number"
                    value={phoneNumber}
                    setValue={setPhoneNumber}
                />
                <CustomSelectField
                    items={paymentOptions}
                    value={preferredPayment}
                    setValue={setPreferredPayment}
                    label="Preferred Payment Option"
                />
            </FormWrapper>
            <CustomTextArea
                label="Message"
                isRequired={false}
                setValue={setMessage}
                value={message}
            />
            <CustomButton
                text="Submit"
                isLoading={isButtonLoading}
                onPressedHandler={() => LeadUtils.showInterest(
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    preferredPayment,
                    message,
                    vehicle.id,
                    setIsInterestRecorded,
                    setIsButtonLoading,
                    setShowBigModal,
                )}
            />
        </section>
    )
}

export default InterestedBuyerForm