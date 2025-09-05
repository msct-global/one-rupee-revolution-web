import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-sage-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-coral-glow" />
              <div>
                <div className="font-playfair text-xl font-bold">Manav Seva</div>
                <div className="text-sm opacity-75">Charitable Trust</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Service to humanity is service to God. Join us in creating lasting change 
              through education, healthcare, and sustainability initiatives.
            </p>
            <div className="bg-coral-glow/20 p-4 rounded-lg">
              <p className="font-semibold text-coral-glow mb-2">Join the ₹1 Revolution</p>
              <Button className="donation-button w-full">
                Donate ₹1 Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-coral-glow transition-colors">About Us</Link></li>
              <li><Link to="/impact" className="text-white/80 hover:text-coral-glow transition-colors">Our Impact</Link></li>
              <li><Link to="/revolution" className="text-white/80 hover:text-coral-glow transition-colors">₹1 Revolution</Link></li>
              <li><Link to="/get-involved" className="text-white/80 hover:text-coral-glow transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-coral-glow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2">
              <li className="text-white/80">Education for All</li>
              <li className="text-white/80">Healthcare Support</li>
              <li className="text-white/80">Sustainability Initiatives</li>
              <li className="text-white/80">Disaster Relief</li>
              <li className="text-white/80">Community Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>info@manavseva.org</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Follow Our Journey</p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coral-glow/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coral-glow/20 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coral-glow/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-coral-glow/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2024 Manav Seva Charitable Trust. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-white/80 hover:text-coral-glow">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-coral-glow">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-coral-glow">Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;