import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, CheckCircle, Factory, Scissors, Package, Award, Shield, Clock, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-factory.jpg";
import manufacturingImage from "@/assets/manufacturing-detail.jpg";
import fabricImage from "@/assets/fabric-rolls.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";

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

  const stats = [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Orders Delivered" },
    { value: 98, suffix: "%", label: "On-Time Delivery" },
    { value: 50, suffix: "+", label: "Happy Clients" },
  ];

  const testimonials = [
    {
      quote: "Jugnu Enterprises has been our trusted manufacturing partner for over 5 years. Their quality and consistency are unmatched.",
      author: "Rajesh Kumar",
      company: "Fashion Retail Co.",
    },
    {
      quote: "Excellent communication and they always deliver on time. Our go-to partner for bulk orders.",
      author: "Amit Sharma",
      company: "Textile Traders",
    },
    {
      quote: "The quality control is exceptional. Every garment meets our exact specifications.",
      author: "Priya Patel",
      company: "Brand Solutions",
    },
  ];

  const processSteps = [
    { icon: Sparkles, label: "Inquiry" },
    { icon: Scissors, label: "Sample" },
    { icon: Factory, label: "Production" },
    { icon: Shield, label: "Quality Check" },
    { icon: Package, label: "Delivery" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5 text-white/90 text-sm animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              MSME Registered | Established 2008
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Reliable Apparel Manufacturing Partner from{" "}
              <span className="text-gradient bg-gradient-to-r from-accent to-gold-light bg-clip-text text-transparent">Ludhiana</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Delivering quality garment manufacturing solutions since 2008. Your trusted partner for premium apparel production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Stats Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-navy-light to-primary opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center opacity-0 animate-counter"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold font-serif text-accent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeading 
                badge="About Us"
                title="Your Trusted Manufacturing Partner"
              />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Jugnu Enterprises has been at the forefront of apparel manufacturing in Ludhiana's renowned textile hub since 2008. As an MSME registered enterprise, we combine traditional craftsmanship with modern production techniques to deliver quality garments that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, ethical manufacturing practices, and client satisfaction has made us a preferred partner for businesses seeking reliable garment production solutions.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="mt-4 group">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={manufacturingImage}
                alt="Garment manufacturing at Jugnu Enterprises"
                className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-gold z-20 animate-pulse-glow">
                <div className="text-4xl font-bold font-serif">15+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Why Choose Us"
            title="Excellence in Every Stitch"
            description="We bring together experience, quality, and reliability to deliver manufacturing solutions that drive your business forward."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-md hover-lift group border border-border/50 opacity-0 animate-zoom-in"
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

      {/* Process Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Our Process"
            title="Simple & Streamlined"
            description="From inquiry to delivery, we make the manufacturing process smooth and efficient."
            centered
          />

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            {processSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-foreground mt-2">{step.label}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/process">
              <Button variant="outline" size="lg" className="group">
                View Full Process
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={fabricImage}
                alt="Fabric rolls at Jugnu Enterprises warehouse"
                className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <SectionHeading 
                badge="Our Capabilities"
                title="Manufacturing Expertise"
              />
              
              <div className="space-y-6">
                {capabilities.map((item, index) => (
                  <div 
                    key={item.title} 
                    className="flex gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors border border-transparent hover:border-border opacity-0 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
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
                <Button variant="default" size="lg" className="group">
                  View All Capabilities
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from businesses who have partnered with us."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
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
            <SectionHeading 
              title="Looking for a Reliable Manufacturing Partner?"
              description="Let's work together to bring your apparel vision to life. Get in touch with us today for a free consultation and quote."
              centered
              light
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  Get a Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/919316478958?text=Hello, I would like to inquire about your manufacturing services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="xl" className="group">
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
