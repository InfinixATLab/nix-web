'use client';

import React, { useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";
import FeaturesGrid from "@/components/features/FeaturesGrid/FeaturesGrid";
import DownloadSection from "@/components/download/DownloadSection";
import RegisterTesterModal from "@/components/ui/RegisterTesterModal/RegisterTesterModal";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <Navbar />
            <HeroSection onGooglePlayClick={handleGooglePlayClick} />
            <AboutSection />
            <FeaturesGrid />
            <DownloadSection onGooglePlayClick={handleGooglePlayClick} />
            <Footer />
            <RegisterTesterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}