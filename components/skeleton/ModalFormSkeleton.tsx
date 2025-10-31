import CustomButtonSkeleton from "./CustomButtonSkeleton"
import TextFieldSkeleton from "./TextFieldSkeleton"

const ModalFormSkeleton = () => {
    return (
        <section>
            <div className="space-y-4">
                <TextFieldSkeleton />
                <TextFieldSkeleton />
            </div>
            <CustomButtonSkeleton />
        </section>
    )
}

export default ModalFormSkeleton