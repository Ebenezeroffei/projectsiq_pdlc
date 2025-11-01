import InterestedBuyerEntity from "@/@types/entities/InterestedBuyerEntity"
import Paginator from "@/@types/entities/Paginator"
import CustomButton from "@/components/buttons/CustomButton"
import CustomSecondaryButton from "@/components/buttons/CustomSecondaryButton"
import FieldValue from "@/components/misc/FieldValue"
import NotoSans from "@/components/misc/NotoSans"
import { useAppContext } from "@/providers/ContextProvider"
import LeadUtils from "@/utils/leads/lead_utils"
import Endpoints from "@/utils/misc/endpoints"
import MiscUtils from "@/utils/misc/misc_utils"
import Image from "next/image"
import { KeyedMutator, mutate } from "swr"

type InterestedBuyerProps = Readonly<{
    interestedBuyer: InterestedBuyerEntity,
    mutate: KeyedMutator<Paginator<InterestedBuyerEntity> | undefined>
}>

const InterestedBuyer = ({
    interestedBuyer,
    mutate,
}: InterestedBuyerProps) => {
    const vehicle = interestedBuyer.car;
    const thumbnail = MiscUtils.generateFilenameUrl(vehicle.images[0].image);
    const contextValues = useAppContext();
    const markAsContactedModalTitle = "Mark As Completed";
    const markAsContactedModalContent = "Are you sure you want mark this item as completed. Mind you that you can't reverse this action when done.";
    const deleteModalTitle = "Remove Item";
    const deleteModalContent = "Are you sure you want to remove this item?";

    return (
        <section className="bg-[#2a2a2a] p-4 rounded-xs space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldValue
                    name="Full Name"
                    value={`${interestedBuyer.first_name} ${interestedBuyer.last_name}`}
                />
                <FieldValue
                    name="Phone Number"
                    value={interestedBuyer.phone}
                />
                <FieldValue
                    name="Email"
                    value={interestedBuyer.email}
                />
                <FieldValue
                    name="Preferred Payment Option"
                    value={interestedBuyer.preferred_payment}
                />
            </div>
            <FieldValue
                name="Message"
                value={interestedBuyer.message}
            />
            <div>
                <h3 className="text-primary font-semibold">
                    Car Details
                </h3>
            </div>
            <div className="flex gap-4 items-start">
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
            <div className="flex gap-4 justify-end">
                {
                    !interestedBuyer.contacted && (
                        <CustomButton
                            text="Mark As Contacted"
                            onPressedHandler={() => MiscUtils.showConfirmDialogue(
                                contextValues,
                                markAsContactedModalTitle,
                                markAsContactedModalContent,
                                () => LeadUtils.markAsContacted(
                                    interestedBuyer.id,
                                    mutate
                                )
                            )}
                        />
                    )
                }
                <CustomSecondaryButton
                    text="Remove"
                    onPressedHandler={() => MiscUtils.showConfirmDialogue(
                        contextValues,
                        deleteModalTitle,
                        deleteModalContent,
                        () => MiscUtils.deleteItemMutate(
                            Endpoints.leads.detail(interestedBuyer.id),
                            mutate,
                        )
                    )}
                />
            </div>
        </section>
    )
}

export default InterestedBuyer