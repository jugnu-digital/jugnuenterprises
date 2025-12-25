import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, CheckCircle, Factory, Scissors, Package, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-factory.jpg";
import manufacturingImage from "@/assets/manufacturing-detail.jpg";
import fabricImage from "@/assets/fabric-rolls.jpg";

const HomePage = () => {
  const whyChooseUs = [
    { icon: Award, title: "15+ Years Experience", description: "Trusted industry expertise since 2008" },
    { icon: CheckCircle, title: "Quality Focused", description: "Rigorous quality control at every step" },
    { icon: Factory, title: "Skilled Workforce", description: "Trained professionals delivering excellence" },
    { icon: Package, title: "Timely Delivery", description: "On-time delivery, every time" },
  ];

  const capabilities = [
    { icon: Scissors, title: "Apparel Manufacturing", description: "Full-scale garment production with modern equipment" },
    { icon: Factory, title: "Custom Production", description: "Tailored solutions for your specific requirements" },
    { icon: Package, title: "Bulk Orders", description: "Scalable production capacity for large orders" },
    { icon: CheckCircle, title: "Quality Control", description: "Comprehensive finishing and inspection" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              MSME Registered | Established 2008
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Reliable Apparel Manufacturing Partner from{" "}
              <span className="text-accent">Ludhiana</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Delivering quality garment manufacturing solutions since 2008. Your trusted partner for premium apparel production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted Manufacturing Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Jugnu Enterprises has been at the forefront of apparel manufacturing in Ludhiana's renowned textile hub since 2008. As an MSME registered enterprise, we combine traditional craftsmanship with modern production techniques to deliver quality garments that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, ethical manufacturing practices, and client satisfaction has made us a preferred partner for businesses seeking reliable garment production solutions.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="mt-4">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={manufacturingImage}
                alt="Garment manufacturing at Jugnu Enterprises"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-gold">
                <div className="text-4xl font-bold font-serif">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Excellence in Every Stitch
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              We bring together experience, quality, and reliability to deliver manufacturing solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={fabricImage}
                alt="Fabric rolls at Jugnu Enterprises warehouse"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Capabilities</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Manufacturing Expertise
              </h2>
              
              <div className="space-y-6">
                {capabilities.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/capabilities">
                <Button variant="default" size="lg">
                  View All Capabilities
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Looking for a Reliable Manufacturing Partner?
            </h2>
            <p className="text-white/80 text-lg">
              Let's work together to bring your apparel vision to life. Get in touch with us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  Get a Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/?text=Hello, I would like to inquire about your manufacturing services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
