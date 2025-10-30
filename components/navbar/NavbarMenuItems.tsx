import Link from "next/link"
import { PropsWithChildren } from "react"

type NavbarMenuItemProps = {
    name: string,
    href?: string,
    isLink?: boolean,
    onPressedHandler?: () => void,
}

const NavbarMenuItem = ({
    name,
    href = '/',
    isLink = true,
    onPressedHandler
}: NavbarMenuItemProps) => {
    if (isLink) return (
        <Link
            href={href}
            className="uppercase after:h-[2px] after:mt-1 after:w-0 after:block after:bg-white text-xs font-semibold text-white/80 transition-all tracking-widest duration-150 after:transition-all after:duration-500 hover:text-white hover:after:w-full min-w-[50px] text-center"
        >
            {name}
        </Link>
    )

    return (
        <span
            onClick={onPressedHandler}
            className="uppercase cursor-pointer after:h-[2px] after:mt-1 after:w-0 after:block after:bg-white text-xs font-semibold text-white/80 transition-all tracking-widest duration-150 after:transition-all after:duration-500 hover:text-white hover:after:w-full min-w-[50px] text-center"
        >
            {name}
        </span>
    )
}


const NavbarMenuItems = ({ children }: Readonly<PropsWithChildren>) => {
    return (
        <section className="flex gap-4 items-center">
            {children}
        </section>
    )
}

export default NavbarMenuItems
export { NavbarMenuItem };