import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import Pricing from "@/components/pricing/Pricing";
import Footer from "@/components/footer/Footer";
import FeaturesGrid from "@/components/features/FeaturesGrid/FeaturesGrid";
import DownloadSection from "@/components/download/DownloadSection";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <AboutSection />
            <FeaturesGrid />
            <Pricing />
            <DownloadSection />
            <Footer />
        </> 
    );
}