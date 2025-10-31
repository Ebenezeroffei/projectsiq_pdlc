import Skeleton from "."

const CustomButtonSkeleton = () => {
    return (
        <section className="my-4 flex justify-start">
            <Skeleton
                className="flex-1 h-[40px] max-w-[200px] rounded"
            />
        </section>
    )
}

export default CustomButtonSkeleton