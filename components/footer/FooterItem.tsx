import Link from "next/link"

type FooterItemProps = {
    name: string,
    href?: string,
    isLink?: boolean,
    onPressedHandler?: () => void
}

const FooterItem = ({
    name,
    href = '/',
    isLink = true,
    onPressedHandler
}: FooterItemProps) => {
    if (isLink) return (
        <Link
            href={href}
            className="uppercase tracking-widest text-xs font-semibold text-white/60 transition-all duration-150 hover:text-white"
        >
            {name}
        </Link>

    )

    return (
        <span
            onClick={onPressedHandler}
            className="uppercase cursor-pointer tracking-widest text-xs font-semibold text-white/60 transition-all duration-150 hover:text-white"
        >
            {name}
        </span>
    )
}

export default FooterItem;