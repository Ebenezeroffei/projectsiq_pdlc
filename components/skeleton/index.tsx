type SkeletonProps = {
    className: string,
}

const Skeleton = ({
    className,
}: SkeletonProps) => {
    return (
        <section
            className={`animate-pulse bg-gray-600 ${className}`}
        >

        </section>
    )
}

export default Skeleton