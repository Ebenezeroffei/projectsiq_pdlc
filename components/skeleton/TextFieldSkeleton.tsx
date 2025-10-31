import Skeleton from "."

const TextFieldSkeleton = () => {
    return (
        <section>
            <Skeleton
                className="h-[20px] w-1/2"
            />
            <Skeleton
                className="h-11 mt-1 rounded-xs"
            />
        </section>
    )
}

export default TextFieldSkeleton