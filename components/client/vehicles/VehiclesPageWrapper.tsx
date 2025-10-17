'use client'

import ClientPageWrapper from "@/components/misc/ClientPageWrapper"
import CustomSearchField from "@/components/text_fields/CustomSearchField"
import { useState } from "react"
import Vehicle from "./Vehicle"
import ImageAssets from "@/constants/misc/image_assets"

const VehiclesPageWrapper = () => {
    const [query, setQuery] = useState('')
    return (
        <ClientPageWrapper>
            <section>
                <CustomSearchField
                    query={query}
                    setQuery={setQuery}
                    placeholder="Search vehicles..."
                />
                <div className="flex flex-wrap justify-center items-center gap-12 mt-16">
                    <Vehicle
                        image={ImageAssets.Car1}
                        brand="KIA"
                        model="Morning"
                        price="50000"
                    />
                    <Vehicle
                        image={ImageAssets.Car2}
                        brand="Toyota"
                        model="Camry"
                        price="55000"
                    />
                    <Vehicle
                        image={ImageAssets.Car3}
                        brand="Honda"
                        model="Civic"
                        price="52000"
                    />
                    <Vehicle
                        image={ImageAssets.Car4}
                        brand="Ford"
                        model="Fusion"
                        price="53000"
                    />
                    <Vehicle
                        image={ImageAssets.Car5}
                        brand="Chevrolet"
                        model="Malibu"
                        price="54000"
                    />
                    <Vehicle
                        image={ImageAssets.Car6}
                        brand="Nissan"
                        model="Altima"
                        price="51000"
                    />
                    <Vehicle
                        image={ImageAssets.Car1}
                        brand="Hyundai"
                        model="Elantra"
                        price="50000"
                    />
                    <Vehicle
                        image={ImageAssets.Car2}
                        brand="Volkswagen"
                        model="Passat"
                        price="56000"
                    />
                    <Vehicle
                        image={ImageAssets.Car3}
                        brand="Mazda"
                        model="Mazda3"
                        price="53000"
                    />
                    <Vehicle
                        image={ImageAssets.Car4}
                        brand="Subaru"
                        model="Impreza"
                        price="55000"
                    />
                    <Vehicle
                        image={ImageAssets.Car5}
                        brand="Tesla"
                        model="Model 3"
                        price="60000"
                    />
                    <Vehicle
                        image={ImageAssets.Car6}
                        brand="BMW"
                        model="3 Series"
                        price="65000"
                    />
                </div>
            </section>
        </ClientPageWrapper>
    )
}

export default VehiclesPageWrapper