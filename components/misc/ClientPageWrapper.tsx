import { PropsWithChildren } from "react"


const ClientPageWrapper = ({
    children
}: Readonly<PropsWithChildren>) => {
    return (
        <section className="bg-[#1a1a1a] py-16 px-8">
            {children}
        </section>
    )
}

export default ClientPageWrapper