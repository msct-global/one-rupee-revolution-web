import { Coins, BookOpen, Stethoscope, TreePine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rupeeIcon from '@/assets/rupee-revolution-icon.jpg';

const RupeeRevolutionSection = () => {
  const impacts = [
    {
      icon: <BookOpen className="h-6 w-6 text-coral-blush" />,
      title: "₹1 = 1 Day of School",
      description: "Provide educational materials and support for a child's learning journey"
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-strawberry-red" />,
      title: "₹1 = Health Check",
      description: "Basic health screening and preventive care for underprivileged communities"
    },
    {
      icon: <TreePine className="h-6 w-6 text-coral-blush" />,
      title: "₹1 = Plant a Sapling",
      description: "Environmental conservation through tree plantation and sustainability projects"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-strawberry-pink/20 mb-6">
            <img
              src={rupeeIcon}
              alt="₹1 Revolution Symbol"
              className="w-12 h-12 rounded-full"
            />
          </div>

          <h2 className="text-5xl font-playfair font-bold text-deep-charcoal mb-6">
            The ₹1 <span className="text-strawberry-red">Revolution</span>
          </h2>
          
          <p className="text-xl text-deep-indigo/80 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-coral-glow">"Just ₹1 don't let kids miss school and Nature die. Donate now!"</span>
            <br />
            Every small effort counts. When millions unite with just ₹1 donations, 
            we create a powerful wave of change that transforms communities forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Impact Visualization */}
          <div className="space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-deep-indigo mb-8">
              How Your ₹1 Creates Miracles
            </h3>
            
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-sage-green/10">
                  {impact.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-deep-indigo mb-2">
                    {impact.title}
                  </h4>
                  <p className="text-deep-indigo/70">
                    {impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border border-ivory">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral-glow/20 mb-4">
                <Coins className="h-8 w-8 text-coral-glow" />
              </div>
              
              <h3 className="text-3xl font-playfair font-bold text-deep-indigo mb-4">
                Start Your Impact Today
              </h3>
              
              <p className="text-deep-indigo/80 mb-8">
                Join thousands of changemakers who believe that together, we can create 
                a better, greener world. Your ₹1 is the seed of transformation.
              </p>
            </div>

            <div className="space-y-4">
              <Button className="w-full donation-button text-lg py-6">
                Donate ₹1 Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-deep-indigo/60">
                  Secure • Instant • Transparent
                </p>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mt-8 pt-8 border-t border-ivory">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-golden-wheat">₹1L+</div>
                  <div className="text-xs text-deep-indigo/60">Raised</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-coral-glow">50K+</div>
                  <div className="text-xs text-deep-indigo/60">Donors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sage-green">95%</div>
                  <div className="text-xs text-deep-indigo/60">Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl font-playfair italic text-deep-indigo max-w-4xl mx-auto">
            "Every small effort counts, and with just ₹1 donations, you can be a part of this change. 
            Together, we can create a better, greener world. Join us in making a lasting impact!"
          </blockquote>
          <cite className="text-coral-glow font-semibold mt-4 block">- Manav Seva Charitable Trust</cite>
        </div>
      </div>
    </section>
  );
};

export default RupeeRevolutionSection;