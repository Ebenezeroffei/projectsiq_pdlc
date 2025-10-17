import ClientFooterGetSpecialOffers from "./ClientFooterGetSpecialOffers"
import ClientFooterHeader from "./ClientFooterHeader"
import ClientFooterItem from "./ClientFooterItem"
import ClientFooterSection from "./ClientFooterSection"
import Copyright from "./Copyright"

const ClientFooter = () => {
    return (
        <footer className="bg-[#131313] p-4 py-10">
            <section className="gap-8 grid grid-cols-1 md:grid-cols-3">
                <ClientFooterHeader />
                <ClientFooterSection name="Navigation">
                    <ClientFooterItem name="Home" />
                    <ClientFooterItem
                        name="About Us"
                        href="/#about-us"
                    />
                    <ClientFooterItem
                        name="Browse Vehicles"
                        href="/vehicles"
                    />
                </ClientFooterSection>
                <ClientFooterSection name="Get Special Offers">
                    <ClientFooterGetSpecialOffers />
                </ClientFooterSection>
            </section>
            <Copyright />
        </footer>
    )
}

export default ClientFooter