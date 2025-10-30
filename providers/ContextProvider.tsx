'use client';

import { useContext, createContext, PropsWithChildren, useState, Dispatch, SetStateAction, ReactNode } from "react"

export type ContextValuesType = {
    isSmallClientSideScreen: boolean,
    setIsSmallClientSideScreen: Dispatch<SetStateAction<boolean>>,
    showClientSideSecondaryNavbar: boolean,
    setShowClientSideSecondaryNavbar: Dispatch<SetStateAction<boolean>>,
    isSmallAdminSideScreen: boolean,
    setIsSmallAdminSideScreen: Dispatch<SetStateAction<boolean>>,
    showAdminSideSecondaryNavbar: boolean,
    setShowAdminSideSecondaryNavbar: Dispatch<SetStateAction<boolean>>,
    showSecondarySidebar: boolean,
    setShowSecondarySidebar: Dispatch<SetStateAction<boolean>>,
    modalTitle: string | undefined,
    setModalTitle: Dispatch<SetStateAction<string | undefined>>,
    modalContent: ReactNode | undefined,
    setModalContent: Dispatch<SetStateAction<ReactNode | undefined>>,
    showSmallModal: boolean,
    setShowSmallModal: Dispatch<SetStateAction<boolean>>,
    showBigModal: boolean,
    setShowBigModal: Dispatch<SetStateAction<boolean>>,
}
const AppContext = createContext<ContextValuesType | null>(null);

const ContextProvider = ({ children }: PropsWithChildren) => {
    const [isSmallClientSideScreen, setIsSmallClientSideScreen] = useState(true);
    const [showClientSideSecondaryNavbar, setShowClientSideSecondaryNavbar] = useState(false);
    const [isSmallAdminSideScreen, setIsSmallAdminSideScreen] = useState(true);
    const [showAdminSideSecondaryNavbar, setShowAdminSideSecondaryNavbar] = useState(false);
    const [showSecondarySidebar, setShowSecondarySidebar] = useState(false);
    const [modalTitle, setModalTitle] = useState<string>();
    const [modalContent, setModalContent] = useState<ReactNode>();
    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showBigModal, setShowBigModal] = useState(false);

    const contextValue: ContextValuesType = {
        isSmallClientSideScreen,
        setIsSmallClientSideScreen,
        showClientSideSecondaryNavbar,
        setShowClientSideSecondaryNavbar,
        isSmallAdminSideScreen,
        setIsSmallAdminSideScreen,
        showAdminSideSecondaryNavbar,
        setShowAdminSideSecondaryNavbar,
        showSecondarySidebar,
        setShowSecondarySidebar,
        modalTitle,
        setModalTitle,
        modalContent,
        setModalContent,
        showSmallModal,
        setShowSmallModal,
        showBigModal,
        setShowBigModal,
    };

    return (
        <AppContext.Provider
            value={contextValue}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const appContext = useContext(AppContext) as ContextValuesType;
    return appContext;
};

export default ContextProvider;
export { useAppContext }