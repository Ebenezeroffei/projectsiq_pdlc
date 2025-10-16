import ClientFooter from "@/components/footer/ClientFooter"
import ClientNavbar from "@/components/navbar/ClientNavbar"
import { PropsWithChildren } from "react"

const ClientLayout = ({
    children
}: Readonly<PropsWithChildren>) => {
    return (
        <>
            <ClientNavbar />
            <main>
                {children}
            </main>
            <ClientFooter />
        </>
    )
}

export default ClientLayout