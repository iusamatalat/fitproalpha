import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar/Navbar';
import Hero from './components/LandingPage/Hero/Hero';
import HeroMessageBorder from './components/LandingPage/Borders/HeroMessageBorder';
import MessageSection from './components/LandingPage/MessageSection/MessageSection';
import OfferingBorder from './components/LandingPage/Borders/OfferingBorder';
import OfferingSection from './components/LandingPage/OfferingSection/OfferingSection';
import PlaybookBorder from './components/LandingPage/Borders/PlaybookBorder';
import PlaybookSection from './components/LandingPage/PlaybookSection/PlaybookSection';
import SuccessStoriesBorder from './components/LandingPage/Borders/SuccessStoriesBorder';
import SuccessStories from './components/LandingPage/SuccessStories/SuccessStories';
import PlatformBorder from './components/LandingPage/Borders/PlatformBorder';
import PlatformSection from './components/LandingPage/PlatformSection/PlatformSection';
import TestimonialsSection from './components/LandingPage/TestimonialsSection/TestimonialsSection';
import FAQSection from './components/LandingPage/FAQSection/FAQSection';
import Footer from './components/LandingPage/Footer/Footer';
import FreeVSL from './components/VSLs/Communities/free/free';
import PaidVSL from './components/VSLs/Communities/paid/paid';
import PremiumVSL from './components/VSLs/Communities/premium/permium';
import PlaybookVSL from './components/VSLs/playbook/playbook';

const LandingPage = () => (
  <main className="flex-1">
    <Hero />
    <HeroMessageBorder />
    <MessageSection />
    <OfferingBorder />
    <OfferingSection />
    <PlaybookBorder />
    <PlaybookSection />
    <SuccessStoriesBorder />
    <SuccessStories />
    <PlatformBorder />
    <PlatformSection />
    <TestimonialsSection />
    <FAQSection />
  </main>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-white selection:bg-brand-green selection:text-black overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/free-community" element={<FreeVSL />} />
        <Route path="/premium-community" element={<PaidVSL />} />
        <Route path="/alpha-elite" element={<PremiumVSL />} />
        <Route path="/playbook" element={<PlaybookVSL />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
