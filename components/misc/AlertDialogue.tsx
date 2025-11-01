import CustomSmallButton from "@/components/buttons/CustomSmallButton"
import CustomSmallSecondaryButton from "@/components/buttons/CustomSmallSecondaryButton"
import { useAppContext } from "@/providers/ContextProvider"

type AlertDialogueProps = {
    content: string,
    onYesResponseHandler: () => void,
}

const AlertDialogue = ({
    content,
    onYesResponseHandler,
}: AlertDialogueProps) => {
    const { setShowSmallModal } = useAppContext();

    return (
        <section>
            <p className="text-sm font-semibold text-white">
                {content}
            </p>
            <div className="flex justify-end gap-2 mt-4">
                <CustomSmallButton
                    onPressedHandler={() => {
                        onYesResponseHandler()
                        setShowSmallModal(_ => false);
                    }}
                    text="Yes"
                />
                <CustomSmallSecondaryButton
                    onPressedHandler={() => setShowSmallModal(_ => false)}
                    text="No"
                />
            </div>
        </section>
    )
}

export default AlertDialogue