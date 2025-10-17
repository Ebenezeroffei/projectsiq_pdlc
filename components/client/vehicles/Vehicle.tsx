import CustomButton from "@/components/buttons/CustomButton"
import CustomSecondaryButton from "@/components/buttons/CustomSecondaryButton"
import NotoSans from "@/components/misc/NotoSans"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation"

type VehicleProps = {
    image: StaticImageData,
    brand: string,
    price: string,
    model: string,
}

const Vehicle = ({
    image,
    brand,
    price,
    model,
}: VehicleProps) => {
    const router = useRouter();

    return (
        <section className="bg-neutral-800 rounded-xs max-w-[350px]">
            <div className="relative">
                <section className="absolute top-2 text-xs font-semibold uppercase tracking-wider rounded-xs right-2 py-1 px-4 text-white bg-primary/80">
                    Brand New
                </section>
                <Image
                    src={image}
                    unoptimized={true}
                    alt="Vehicle"
                    className="aspect-video object-cover rounded-xs"
                />
            </div>
            <div className="mt-4 space-y-4 px-4 pt-4 pb-6">
                <NotoSans className="space-y-2">
                    <p className="text-white  font-semibold text-lg md:text-xl uppercase">
                        {model}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-zinc-400 text-sm md:text-lg font-semibold">
                            {brand}
                        </p>
                        <p className="text-primary  text-sm md:text-lg font-semibold">
                            GHC {price}
                        </p>
                    </div>
                </NotoSans>
                <section className="flex gap-2">
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60 tracking-wide">
                        V6 Engine
                    </div>
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60 tracking-wide">
                        Automatic Transmission
                    </div>
                    <div className="py-1 rounded-xs border px-1.5 border-zinc-600 text-xs text-white/60">
                        +3 More
                    </div>
                </section>
                <section className="flex gap-4">
                    <CustomButton text="Buy Now" />
                    <CustomSecondaryButton text="View" onPressedHandler={() => router.push('/vehicles/detail')} />
                </section>
            </div>
        </section>
    )
}

export default Vehicle;