interface CarImageEntity {
    image: string,
}

interface CarEntity {
    id: string,
    brand: string,
    model: string,
    description: string,
    year: number,
    transmission: string,
    fuel_type: string,
    engine_capacity: string,
    drivetrain: string,
    color: string,
    number_of_doors: string,
    seating_capacity: string,
    price: string,
    currency: string,
    is_available: boolean,
    features: Record<string, string>,
    created_at: string,
    updated_at: string,
    images: CarImageEntity[]
}
export default CarEntity