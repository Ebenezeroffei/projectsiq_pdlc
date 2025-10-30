'use client'

import { useObserveClientScreenSize } from "@/hooks/useObserveScreenSize"
import ClientNavbarHeader from "./ClientNavbarHeader"
import { useAppContext } from "@/providers/ContextProvider"
import ClientNavbarHamburgerMenu from "./ClientNavbarHamburgerMenu"
import ClientSecondaryNavbar from "./ClientSecondaryNavbar"
import NavbarMenuItems, { NavbarMenuItem } from "./NavbarMenuItems"

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
                    <NavbarMenuItems>
                        <NavbarMenuItem
                            name="Home"
                        />
                        <NavbarMenuItem
                            name="About Us"
                            href="/#about-us"
                        />
                        <NavbarMenuItem
                            name="Browse Vehicles"
                            href="/vehicles"
                        />
                    </NavbarMenuItems>
                )
            }
        </nav>
    )
}

export default ClientNavbar