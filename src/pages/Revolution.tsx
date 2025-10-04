import Navigation from '@/components/Navigation';
import RupeeRevolutionSection from '@/components/RupeeRevolutionSection';
import Footer from '@/components/Footer';

const Revolution = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <RupeeRevolutionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Revolution;
