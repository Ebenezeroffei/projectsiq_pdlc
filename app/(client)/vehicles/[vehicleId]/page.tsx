import VehicleDetailPageWrapper from "@/components/client/vehicles/VehicleDetailPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Detail"
}

type VehicleDetailPageProps = {
    params: Promise<{
        vehicleId: string
    }>
}

const VehicleDetailPage = async ({ params }: VehicleDetailPageProps) => {
    const { vehicleId } = await params;
    return (
        <VehicleDetailPageWrapper vehicleId={vehicleId} />
    )
}

export default VehicleDetailPage