import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <HeroSection />
      
      <AboutSection />
      
      <ServicesSection />
      
      <TestimonialsSection />
      
      <ServiceAreaSection />
      
      <ContactSection />
      
      <Footer />
    </main>
  );
} 