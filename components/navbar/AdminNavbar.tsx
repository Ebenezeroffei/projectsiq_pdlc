'use client'

import { useObserveAdminScreenSize, useObserveClientScreenSize } from "@/hooks/useObserveScreenSize"
import { useAppContext } from "@/providers/ContextProvider"
import ClientNavbarHamburgerMenu from "./ClientNavbarHamburgerMenu"
import ClientSecondaryNavbar from "./ClientSecondaryNavbar"
import AdminNavbarHeader from "./AdminNavbarHeader"
import NavbarMenuItems, { NavbarMenuItem } from "./NavbarMenuItems"
import AuthUtils from "@/utils/auth/auth_utils"
import AdminSecondaryNavbar from "./AdminSecondaryNavbar"
import AdminNavbarHamburgerMenu from "./AdminHamburgerMenu"

const AdminNavbar = () => {
    useObserveAdminScreenSize();
    const { isSmallAdminSideScreen } = useAppContext();
    return (
        <nav className="p-4 text-white w-full flex  justify-between items-center">
            <AdminNavbarHeader />
            <AdminSecondaryNavbar />
            {
                isSmallAdminSideScreen ? (
                    <AdminNavbarHamburgerMenu />
                ) : (
                    <NavbarMenuItems>
                        <NavbarMenuItem
                            name="Home"
                            href="/admin"
                        />
                        <NavbarMenuItem
                            name="Interested Buyers"
                            href="/admin/interested-buyers"
                        />
                        <NavbarMenuItem
                            name="Vehicles"
                            href="/admin/vehicles"
                        />
                        <NavbarMenuItem
                            name="Logout"
                            isLink={false}
                            onPressedHandler={() => AuthUtils.logout()}
                        />
                    </NavbarMenuItems>
                )
            }
        </nav>
    )
}

export default AdminNavbar;