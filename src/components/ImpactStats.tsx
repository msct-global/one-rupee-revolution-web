import { GraduationCap, Heart, Stethoscope, Leaf, Users, TrendingUp } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-sage-green" />,
      number: "5,000+",
      label: "Children Educated",
      description: "Quality learning opportunities provided",
      bgColor: "bg-sage-green/10",
      borderColor: "border-sage-green"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-coral-glow" />,
      number: "50,000+",
      label: "Health Consultations",
      description: "Free medical camps & assistance",
      bgColor: "bg-coral-glow/10",
      borderColor: "border-coral-glow"
    },
    {
      icon: <Leaf className="h-8 w-8 text-sage-green" />,
      number: "100+",
      label: "Green Projects",
      description: "Environmental conservation initiatives",
      bgColor: "bg-sage-green/10",
      borderColor: "border-sage-green"
    },
    {
      icon: <Users className="h-8 w-8 text-deep-indigo" />,
      number: "10,000+",
      label: "Lives Touched",
      description: "Direct beneficiaries of our programs",
      bgColor: "bg-deep-indigo/10",
      borderColor: "border-deep-indigo"
    },
    {
      icon: <Heart className="h-8 w-8 text-coral-glow" />,
      number: "₹1,00,000+",
      label: "₹1 Donations",
      description: "Collective micro-donations received",
      bgColor: "bg-golden-wheat/10",
      borderColor: "border-golden-wheat"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-golden-wheat" />,
      number: "95%",
      label: "Impact Rate",
      description: "Funds directly reaching beneficiaries",
      bgColor: "bg-golden-wheat/10",
      borderColor: "border-golden-wheat"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-deep-indigo mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-deep-indigo/70 max-w-3xl mx-auto">
            Every ₹1 donation creates a ripple effect of positive change across communities. 
            See how your contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`impact-card hover:scale-105 transition-all duration-300 ${stat.bgColor} ${stat.borderColor} border-l-4`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white shadow-soft">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-deep-indigo mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-deep-indigo mb-2">
                    {stat.label}
                  </div>
                  <div className="text-deep-indigo/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-glow/20 to-golden-wheat/20 rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-playfair font-bold text-deep-indigo mb-4">
              Ready to multiply these numbers?
            </h3>
            <p className="text-deep-indigo/80 mb-6">
              Your ₹1 can be the catalyst that changes someone's life forever.
            </p>
            <button className="donation-button">
              Join the ₹1 Revolution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;