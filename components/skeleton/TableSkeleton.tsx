import { useId } from "react";
import Skeleton from "."

const TableSkeleton = () => {
    const arr = new Array(10).fill(0, 0, 10)
    const randomId = useId();

    return (
        <section className="space-y-1 my-4">
            {
                arr.map((eke, index) => (
                    <Skeleton
                        key={`${randomId}_${index}`}
                        className="h-[28px]"
                    />
                ))
            }
        </section>
    )
}

export default TableSkeleton