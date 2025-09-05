import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GrowingImpactSection from '@/components/GrowingImpactSection';
import OurStorySection from '@/components/OurStorySection';
import ImpactStats from '@/components/ImpactStats';
import RupeeRevolutionSection from '@/components/RupeeRevolutionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <GrowingImpactSection />
        <OurStorySection />
        <ImpactStats />
        <RupeeRevolutionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
