import { MdClose } from "react-icons/md";
import ClientNavbarHeader from "./ClientNavbarHeader";
import { ClientNavbarMenuItem } from "./ClientNavbarMenuItems";
import { useAppContext } from "@/providers/ContextProvider";

const ClientSecondaryNavbar = () => {
    const { setShowClientSideSecondaryNavbar, showClientSideSecondaryNavbar } = useAppContext()

    if (showClientSideSecondaryNavbar) return (
        <section className="absolute top-0 z-10 bg-[#131313] p-4 left-0 w-full">
            <div className="justify-between items-center flex">
                <ClientNavbarHeader />
                <section
                    className="cursor-pointer"
                    onClick={() => setShowClientSideSecondaryNavbar(_ => false)}
                >
                    <MdClose
                        size={30}
                    />
                </section>
            </div>
            <div className="space-y-4 mt-4 flex flex-col items-center justify-center">
                <ClientNavbarMenuItem
                    name="Home"
                />
                <ClientNavbarMenuItem
                    name="About Us"
                    href="/#about-us"
                />
                <ClientNavbarMenuItem
                    name="Browse Vehicles"
                    href="/vehicles"
                />
            </div>
        </section>
    );

    return (
        <></>
    )
}

export default ClientSecondaryNavbar;