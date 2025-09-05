import { ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center parallax-container">
      {/* Parallax Background Layers */}
      <div className="parallax-bg"></div>
      
      {/* Floating Donation Dots Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-dots"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-deep-indigo leading-tight">
                Service to Humanity is{' '}
                <span className="text-golden-wheat">Service to God</span>
              </h1>
              
              <p className="text-xl text-deep-indigo/80 leading-relaxed">
                Join the <strong className="text-coral-glow">₹1 Revolution</strong> - 
                where every single rupee creates lasting change through education, 
                healthcare, and sustainability initiatives.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="donation-button text-lg px-8 py-6">
                Start Your ₹1 Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-deep-indigo text-deep-indigo hover:bg-deep-indigo hover:text-cream px-8 py-6 text-lg"
              >
                Our Story
              </Button>
            </div>

            {/* Impact Stats Preview */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-sage-green" />
                <span className="text-deep-indigo font-semibold">10,000+ Lives Touched</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-golden-wheat" />
                <span className="text-deep-indigo font-semibold">5,000+ Children Educated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-coral-glow" />
                <span className="text-deep-indigo font-semibold">₹1 = 1 Day of School</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Children learning in school - Manav Seva Charitable Trust impact"
                className="rounded-2xl shadow-strong w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border border-lavender">
                <div className="text-center">
                  <div className="text-3xl font-bold text-golden-wheat">₹1</div>
                  <div className="text-sm text-deep-indigo">Can change a life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;