import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PriceCalculator from '@/components/PriceCalculator';
import Tracking from '@/components/Tracking';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <PriceCalculator />
      <Tracking />
      <Features />
      <Footer />
    </div>
  );
}
