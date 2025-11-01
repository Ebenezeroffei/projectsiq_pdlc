'use client'

import InterestedBuyerEntity from "@/@types/entities/InterestedBuyerEntity"
import Paginator from "@/@types/entities/Paginator"
import ErrorAlert from "@/components/misc/ErrorAlert"
import NoItem from "@/components/misc/NoItem"
import TableSkeleton from "@/components/skeleton/TableSkeleton"
import Endpoints from "@/utils/misc/endpoints"
import MiscUtils from "@/utils/misc/misc_utils"
import { useEffect, useId, useState } from "react"
import useSWR from "swr"
import InterestedBuyer from "./InterestedBuyer"
import CustomPagination from "@/components/misc/CustomPagination"
import CustomSearchField from "@/components/text_fields/CustomSearchField"

const LeadsPageWrapper = () => {
    const [url, setUrl] = useState(Endpoints.leads.listOrCreate)
    const { data, isLoading, isValidating, error, mutate } = useSWR(url, MiscUtils.getData<Paginator<InterestedBuyerEntity>>, {
        revalidateOnFocus: false,
    });
    const randomId = useId();
    const [query, setQuery] = useState('')
    const inputId = "lead-searchbar";

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
            setUrl(_ => Endpoints.leads.listOrCreate);
        }
    }, [query]);


    return (
        <section>
            <div className="mb-8">
                <CustomSearchField
                    query={query}
                    setQuery={setQuery}
                    inputId={inputId}
                    placeholder="Search Interested Buyers"
                    onSubmitHandler={() => MiscUtils.search(
                        inputId,
                        url,
                        setUrl
                    )}
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
                            <div className="space-y-4">
                                {
                                    data?.results.map((ele, index) => (
                                        <InterestedBuyer
                                            key={`${randomId}_${index}_interested_buyer`}
                                            interestedBuyer={ele}
                                            mutate={mutate}
                                        />
                                    ))
                                }
                                <CustomPagination
                                    pagination={data?.pagination!}
                                    defaultUrl={url}
                                    setUrl={setUrl}
                                />
                            </div>
                        ) : (
                            <NoItem text={
                                query
                                    ? "No Search Results Found"
                                    : "No Interested Buyer"
                            } />
                        )
                    )
                )
            }
        </section>
    )
}

export default LeadsPageWrapper