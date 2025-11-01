import CarEntity from "./CarEntity";

interface InterestedBuyerEntity {
    car: CarEntity,
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    preferred_payment: string,
    message: string,
    contacted: boolean,
    updated_at: string,
    created_at: string,
}

export default InterestedBuyerEntity;