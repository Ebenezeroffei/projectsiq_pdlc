'use client';

import MiscUtils from "@/utils/misc/misc_utils";
import AdminNavbarHeader from "../navbar/AdminNavbarHeader"
import Copyright from "./Copyright"
import FooterItem from "./FooterItem"
import AuthUtils from "@/utils/auth/auth_utils"
import { useAppContext } from "@/providers/ContextProvider";

const AdminFooter = () => {
    const modalTitle = "Logout";
    const modalContent = "Are you sure you want to logout?"
    const contextValues = useAppContext();

    return (
        <footer className="bg-[#131313]">
            <section className="p-4 flex gap-6 justify-between items-center flex-wrap">
                <AdminNavbarHeader />
                <section className="flex gap-4">
                    <FooterItem
                        name="Home"
                        href="/admin"
                    />
                    {/* <FooterItem
                        name="Interested Buyers"
                        href="/admin/interested-buyers"
                    /> */}
                    <FooterItem
                        name="Vehicles"
                        href="/admin/vehicles"
                    />
                    <FooterItem
                        name="Logout"
                        isLink={false}
                        onPressedHandler={() => MiscUtils.showConfirmDialogue(
                            contextValues,
                            modalTitle,
                            modalContent,
                            () => AuthUtils.logout()
                        )}
                    />
                </section>
            </section>
            <Copyright />
        </footer>
    )
}

export default AdminFooter