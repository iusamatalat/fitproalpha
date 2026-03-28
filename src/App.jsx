import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeroMessageBorder from './components/Borders/HeroMessageBorder';
import MessageSection from './components/MessageSection/MessageSection';
import OfferingBorder from './components/Borders/OfferingBorder';
import OfferingSection from './components/OfferingSection/OfferingSection';
import PlaybookBorder from './components/Borders/PlaybookBorder';
import PlaybookSection from './components/PlaybookSection/PlaybookSection';
import SuccessStoriesBorder from './components/Borders/SuccessStoriesBorder';
import SuccessStories from './components/SuccessStories/SuccessStories';
import PlatformBorder from './components/Borders/PlatformBorder';
import PlatformSection from './components/PlatformSection/PlatformSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-white selection:bg-brand-green selection:text-black overflow-x-hidden">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
