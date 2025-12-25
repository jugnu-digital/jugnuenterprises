import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="font-serif text-2xl font-bold">
              Jugnu <span className="text-accent">Enterprises</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Your reliable apparel manufacturing partner from Ludhiana, delivering quality garment solutions since 2008.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
                MSME Registered
              </span>
              <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs font-medium">
                Est. 2008
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Capabilities", path: "/capabilities" },
                { name: "Manufacturing Process", path: "/process" },
                { name: "Why Choose Us", path: "/why-us" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>Garment Manufacturing</li>
              <li>Custom Apparel Production</li>
              <li>Bulk Orders</li>
              <li>Private Label Manufacturing</li>
              <li>Quality Control & Finishing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Basti Jodhewal, Ludhiana,<br />Punjab, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+919876543210" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@jugnuenterprises.com" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                  info@jugnuenterprises.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-secondary-foreground/80">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Jugnu Enterprises. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/60">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
