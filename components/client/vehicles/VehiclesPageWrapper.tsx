'use client'

import ClientPageWrapper from "@/components/misc/ClientPageWrapper"
import CustomSearchField from "@/components/text_fields/CustomSearchField"
import { useEffect, useId, useState } from "react"
import Vehicle from "./Vehicle"
import ImageAssets from "@/constants/misc/image_assets"
import useSWR from "swr"
import Endpoints from "@/utils/misc/endpoints"
import NoItem from "@/components/misc/NoItem"
import ErrorAlert from "@/components/misc/ErrorAlert"
import TableSkeleton from "@/components/skeleton/TableSkeleton"
import CarEntity from "@/@types/entities/CarEntity"
import Paginator from "@/@types/entities/Paginator"
import MiscUtils from "@/utils/misc/misc_utils"
import CustomPagination from "@/components/misc/CustomPagination"

const VehiclesPageWrapper = () => {
    const [url, setUrl] = useState(Endpoints.cars.listOrCreate)
    const [query, setQuery] = useState('')
    const { data, error, mutate, isLoading, isValidating } = useSWR(url, MiscUtils.getData<Paginator<CarEntity>>, {
        revalidateOnFocus: false,
    })
    const randomId = useId();
    const inputId = "vehicle-searchbar";

    // When page loads
    useEffect(() => {
        MiscUtils.debounce(
            inputId,
            () => MiscUtils.search(
                inputId,
                url,
                setUrl
            ),
        )
    }, [])

    // Observe query
    useEffect(() => {
        if (!query) {
            setUrl(_ => Endpoints.cars.listOrCreate);
        }
    }, [query]);

    return (
        <ClientPageWrapper>
            <section>
                <CustomSearchField
                    query={query}
                    setQuery={setQuery}
                    placeholder="Search vehicles..."
                    inputId={inputId}
                    onSubmitHandler={() => () => MiscUtils.search(
                        inputId,
                        url,
                        setUrl
                    )}
                />
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
                                <>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                                        {
                                            data?.results.map((vehicle, index) => (
                                                <Vehicle
                                                    key={`${randomId}_${index}_vehicle`}
                                                    vehicle={vehicle}
                                                />
                                            ))
                                        }
                                    </div>
                                    <CustomPagination
                                        pagination={data?.pagination!}
                                        defaultUrl={url}
                                        setUrl={setUrl}
                                    />
                                </>
                            ) : (
                                <NoItem text="No Vehicle Added" />
                            )
                        )
                    )
                }
            </section>
        </ClientPageWrapper>
    )
}

export default VehiclesPageWrapper