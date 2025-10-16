import { useAppContext } from "@/providers/ContextProvider";
import { HiMenuAlt1 } from "react-icons/hi";


const ClientNavbarHamburgerMenu = () => {
    const { setShowClientSideSecondaryNavbar } = useAppContext();

    return (
        <section
            className="cursor-pointer"
            onClick={() => setShowClientSideSecondaryNavbar(_ => true)}
        >
            <HiMenuAlt1
                size={30}
            />
        </section>
    )
}

export default ClientNavbarHamburgerMenu;