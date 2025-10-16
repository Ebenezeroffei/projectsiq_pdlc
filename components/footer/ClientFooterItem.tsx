import Link from "next/link"

type ClientFooterItemProps = {

}

const ClientFooterItem = ({ }: ClientFooterItemProps) => {
    return (
        <p>
            <Link
                href={'/'}
                className="uppercase tracking-widest text-xs font-semibold text-white/60 transition-all duration-150 hover:text-white"
            >
                Home
            </Link>
        </p>
    )
}

export default ClientFooterItem;