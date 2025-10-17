import LandingPageAboutUsSection from "./LandingPageAboutUsSection"
import LandingPageCarBrands from "./LandingPageCarBrands"
import LandingPageOfferings from "./LandingPageOfferings"
import LandingPageStarter from "./LandingPageStarter"
import LandingPageUSP from "./LandingPageUSP"

const LandingPageWrapper = () => {
  return (
    <>
      <LandingPageStarter />
      <LandingPageAboutUsSection />
      <LandingPageOfferings />
      <LandingPageUSP />
      <LandingPageCarBrands />
    </>
  )
}

export default LandingPageWrapper