import ClientFooterGetSpecialOffers from "./ClientFooterGetSpecialOffers"
import ClientFooterHeader from "./ClientFooterHeader"
import ClientFooterSection from "./ClientFooterSection"
import Copyright from "./Copyright"
import FooterItem from "./FooterItem"

const ClientFooter = () => {
    return (
        <footer className="bg-[#131313] ">
            <section className="gap-8 grid grid-cols-1 md:grid-cols-3 p-4 py-10">
                <ClientFooterHeader />
                <ClientFooterSection name="Navigation">
                    <FooterItem
                        name="Home"
                    />
                    <FooterItem
                        name="About Us"
                        href="/#about-us"
                    />
                    <FooterItem
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