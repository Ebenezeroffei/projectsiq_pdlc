import { MdClose } from "react-icons/md";
import { useAppContext } from "@/providers/ContextProvider";
import { NavbarMenuItem } from "./NavbarMenuItems";
import AdminNavbarHeader from "./AdminNavbarHeader";
import AuthUtils from "@/utils/auth/auth_utils";

const AdminSecondaryNavbar = () => {
    const { setShowAdminSideSecondaryNavbar, showAdminSideSecondaryNavbar } = useAppContext()

    if (showAdminSideSecondaryNavbar) return (
        <section className="absolute top-0 z-10 bg-[#131313] p-4 left-0 w-full">
            <div className="justify-between items-center flex">
                <AdminNavbarHeader />
                <section
                    className="cursor-pointer"
                    onClick={() => setShowAdminSideSecondaryNavbar(_ => false)}
                >
                    <MdClose
                        size={30}
                    />
                </section>
            </div>
            <div className="space-y-4 mt-4 flex flex-col items-center justify-center">
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
            </div>
        </section>
    );

    return (
        <></>
    )
}

export default AdminSecondaryNavbar;