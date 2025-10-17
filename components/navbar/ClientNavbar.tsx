'use client'

import { useObserveClientScreenSize } from "@/hooks/useObserveScreenSize"
import ClientNavbarHeader from "./ClientNavbarHeader"
import ClientNavbarMenuItems, { ClientNavbarMenuItem } from "./ClientNavbarMenuItems"
import { useAppContext } from "@/providers/ContextProvider"
import ClientNavbarHamburgerMenu from "./ClientNavbarHamburgerMenu"
import ClientSecondaryNavbar from "./ClientSecondaryNavbar"

const ClientNavbar = () => {
    useObserveClientScreenSize();
    const { isSmallClientSideScreen } = useAppContext();
    return (
        <nav className="p-4 text-white w-full top-0 left-0 z-20 flex absolute justify-between items-center">
            <ClientNavbarHeader />
            <ClientSecondaryNavbar />
            {
                isSmallClientSideScreen ? (
                    <ClientNavbarHamburgerMenu />
                ) : (
                    <ClientNavbarMenuItems>
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
                    </ClientNavbarMenuItems>
                )
            }
        </nav>
    )
}

export default ClientNavbar