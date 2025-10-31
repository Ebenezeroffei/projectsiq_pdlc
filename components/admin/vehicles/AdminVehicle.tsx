import CarEntity from "@/@types/entities/CarEntity"
import CustomButton from "@/components/buttons/CustomButton"
import CustomSecondaryButton from "@/components/buttons/CustomSecondaryButton"
import NotoSans from "@/components/misc/NotoSans"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"

type AdminVehicleProps = Readonly<{
    vehicle: CarEntity
}>

const AdminVehicle = ({
    vehicle
}: AdminVehicleProps) => {
    const thumbnail = vehicle.images[0].image;

    return (
        <section className="bg-neutral-800 rounded-xs">
            <div className="relative">
                <section className={`absolute top-2 text-xs font-semibold uppercase tracking-wider rounded-xs right-2 py-1 px-4 text-white bg-primary/80`}>
                    {vehicle.year}
                </section>
                <Image
                    src={thumbnail}
                    unoptimized={true}
                    alt={`${vehicle.brand}-${vehicle.model}`}
                    width={'100'}
                    height={'100'}
                    className="aspect-video w-full h-auto object-cover rounded-xs"
                />
            </div>
            <div className="mt-4 space-y-4 px-4 pt-4 pb-6">
                <NotoSans className="space-y-2">
                    <p className="text-white  font-semibold text-lg md:text-xl uppercase">
                        {vehicle.model}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-zinc-400 text-sm md:text-lg font-semibold">
                            {vehicle.brand}
                        </p>
                        <p className="text-primary  text-sm md:text-lg font-semibold">
                            GHC {vehicle.price}
                        </p>
                    </div>
                </NotoSans>
                <section className="flex gap-2">
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60 tracking-wide">
                        {vehicle.fuel_type}
                    </div>
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60 tracking-wide">
                        {vehicle.drivetrain}
                    </div>
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60">
                        {vehicle.transmission}
                    </div>
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60">
                        + More
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AdminVehicle;