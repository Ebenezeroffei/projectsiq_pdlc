import Link from "next/link"
import { PropsWithChildren } from "react"

type ClientNavbarMenuItemProps = {
    name: string,
    href?: string
}

const ClientNavbarMenuItem = ({
    name,
    href = '/'
}: ClientNavbarMenuItemProps) => {
    return (
        <Link
            href={href}
            className="uppercase after:h-[2px] after:mt-1 after:w-0 after:block after:bg-white text-xs font-semibold text-white/80 transition-all tracking-widest duration-150 after:transition-all after:duration-500 hover:text-white hover:after:w-full min-w-[50px] text-center"
        >
            {name}
        </Link>
    )
}


const ClientNavbarMenuItems = ({ children }: Readonly<PropsWithChildren>) => {
    return (
        <section className="flex gap-4 items-center">
            {children}
        </section>
    )
}

export default ClientNavbarMenuItems
export { ClientNavbarMenuItem };