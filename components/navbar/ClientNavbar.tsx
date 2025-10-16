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
        <nav className="bg-black p-4 text-white flex justify-between items-center">
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
                    </ClientNavbarMenuItems>
                )
            }
        </nav>
    )
}

export default ClientNavbar