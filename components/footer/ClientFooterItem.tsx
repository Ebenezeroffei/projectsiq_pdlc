import Link from "next/link"

type ClientFooterItemProps = {
    name: string,
    href?: string,
}

const ClientFooterItem = ({
    name,
    href = '/'
}: ClientFooterItemProps) => {
    return (
        <p>
            <Link
                href={href}
                className="uppercase tracking-widest text-xs font-semibold text-white/60 transition-all duration-150 hover:text-white"
            >
                {name}
            </Link>
        </p>
    )
}

export default ClientFooterItem;