import { useEffect } from "react";
import { useAppContext } from "@/providers/ContextProvider"

const useObserveClientScreenSize = () => {
    const { setIsSmallClientSideScreen, setShowClientSideSecondaryNavbar } = useAppContext();


    const onResizeHandler = () => {
        if (window.innerWidth < 400) {
            setIsSmallClientSideScreen(_ => true);
        }
        else {
            setIsSmallClientSideScreen(_ => false)
            setShowClientSideSecondaryNavbar(_ => false);
        }
    }

    useEffect(() => {
        onResizeHandler();
        window.addEventListener('resize', onResizeHandler)
        return () => window.removeEventListener('resize', onResizeHandler)
    }, [])

}

const useObserveAdminScreenSize = () => {
    const { setIsSmallAdminSideScreen, setShowAdminSideSecondaryNavbar } = useAppContext();


    const onResizeHandler = () => {
        if (window.innerWidth < 600) {
            setIsSmallAdminSideScreen(_ => true);
        }
        else {
            setIsSmallAdminSideScreen(_ => false)
            setShowAdminSideSecondaryNavbar(_ => false);
        }
    }

    useEffect(() => {
        onResizeHandler();
        window.addEventListener('resize', onResizeHandler)
        return () => window.removeEventListener('resize', onResizeHandler)
    }, [])

}

export { useObserveClientScreenSize, useObserveAdminScreenSize };