import { useAppContext } from "@/providers/ContextProvider";
import { HiMenuAlt1 } from "react-icons/hi";


const AdminNavbarHamburgerMenu = () => {
    const { setShowAdminSideSecondaryNavbar } = useAppContext();

    return (
        <section
            className="cursor-pointer"
            onClick={() => setShowAdminSideSecondaryNavbar(_ => true)}
        >
            <HiMenuAlt1
                size={30}
            />
        </section>
    )
}

export default AdminNavbarHamburgerMenu;