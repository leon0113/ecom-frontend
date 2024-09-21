import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
        </div>
    )
}
