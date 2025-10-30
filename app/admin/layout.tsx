import AdminFooter from "@/components/footer/AdminFooter"
import AdminNavbar from "@/components/navbar/AdminNavbar"
import { PropsWithChildren } from "react"

const AdminLayout = ({ children }: Readonly<PropsWithChildren>) => {
    return (
        <>
            <AdminNavbar />
            <main>
                {children}
            </main>
            <AdminFooter />
        </>
    )
}

export default AdminLayout