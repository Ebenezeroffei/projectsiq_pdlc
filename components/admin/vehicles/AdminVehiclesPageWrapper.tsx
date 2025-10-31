'use client';

import CarEntity from "@/@types/entities/CarEntity";
import Paginator from "@/@types/entities/Paginator";
import CustomSmallButton from "@/components/buttons/CustomSmallButton";
import ErrorAlert from "@/components/misc/ErrorAlert";
import NoItem from "@/components/misc/NoItem";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import CustomSearchField from "@/components/text_fields/CustomSearchField";
import Endpoints from "@/utils/misc/endpoints";
import MiscUtils from "@/utils/misc/misc_utils";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import useSWR from "swr";
import AdminVehicle from "./AdminVehicle";

const AdminVehiclesPageWrapper = () => {
    const { data, error, mutate, isLoading, isValidating } = useSWR(Endpoints.cars.listOrCreate, MiscUtils.getData<Paginator<CarEntity>>, {
        revalidateOnFocus: false,
    })
    const [query, setQuery] = useState('')
    const router = useRouter();
    const randomId = useId();

    return (
        <section>
            <div className="flex gap-4 justify-end items-stretch">
                <section className="flex-1">
                    <CustomSearchField
                        query={query}
                        setQuery={setQuery}
                    />
                </section>
                <CustomSmallButton
                    text="+ Add Vehicle"
                    onPressedHandler={() => router.push('/admin/vehicles/form')}
                />
            </div>
            {
                (isLoading || isValidating) ? (
                    <TableSkeleton />

                ) : (
                    error ? (
                        <ErrorAlert
                            errorMessage={error.message}
                            onRefreshHandler={mutate}
                        />
                    ) : (
                        data?.results.length ?? 0 > 0 ? (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                                {
                                    data?.results.map((vehicle, index) => (
                                        <AdminVehicle
                                            key={`${randomId}_${index}_vehicle`}
                                            vehicle={vehicle}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <NoItem text="No Vehicle Added" />
                        )
                    )
                )
            }
        </section>
    )
}

export default AdminVehiclesPageWrapper