import { CheckCircle, Award, Users, Target, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/manufacturing-detail.jpg";
import qualityImage from "@/assets/quality-control.jpg";
import SectionHeading from "@/components/SectionHeading";

const AboutPage = () => {
  const values = [
    { icon: CheckCircle, title: "Quality First", description: "Every garment undergoes rigorous quality checks to ensure excellence." },
    { icon: Users, title: "Client Partnership", description: "We work closely with clients to understand and exceed their expectations." },
    { icon: Target, title: "Precision", description: "Attention to detail in every stitch, cut, and finish." },
    { icon: Award, title: "Integrity", description: "Ethical manufacturing practices and transparent business dealings." },
  ];

  const milestones = [
    { year: "2008", title: "Founded", description: "Jugnu Enterprises established in Ludhiana's textile hub" },
    { year: "2012", title: "MSME Registration", description: "Officially registered as Micro Enterprise" },
    { year: "2016", title: "Expansion", description: "Increased production capacity to serve more clients" },
    { year: "2020", title: "Modernization", description: "Upgraded machinery and quality control systems" },
    { year: "2024", title: "Digital Presence", description: "Enhanced digital capabilities for better client service" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">
              <span className="w-8 h-0.5 bg-accent" />
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Crafting Quality Since <span className="text-accent">2008</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Jugnu Enterprises is a trusted name in apparel manufacturing, delivering consistent quality and reliable service from the heart of India's textile industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeading 
                badge="Our Story"
                title="A Legacy of Excellence in Garment Manufacturing"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Jugnu Enterprises began its journey in Basti Jodhewal, Ludhiana – the textile capital of North India. What started as a small manufacturing unit has grown into a comprehensive apparel production facility serving clients across the region.
                </p>
                <p>
                  Our location in Ludhiana provides us with unique advantages – access to skilled labor, quality raw materials, and a rich tradition of textile manufacturing. We leverage these strengths to deliver garments that meet the highest standards of quality and craftsmanship.
                </p>
                <p>
                  As an MSME registered micro enterprise, we maintain the agility to adapt to client needs while upholding the quality standards that larger manufacturers promise. This balance of flexibility and quality has been the cornerstone of our success.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={manufacturingImage}
                alt="Our manufacturing facility"
                className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-serif text-xl font-bold text-foreground">Ludhiana</div>
                    <div className="text-sm text-muted-foreground">Textile Hub of India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Our Values"
            title="What Drives Us Forward"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-card p-8 rounded-2xl shadow-md text-center hover-lift border border-border/50 opacity-0 animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Our Journey"
            title="Milestones Along the Way"
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent md:-translate-x-0.5" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-md inline-block hover-lift border border-border/50">
                      <div className="text-accent font-bold text-lg">{milestone.year}</div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 z-10 animate-pulse-glow" />
                  
                  <div className="md:hidden flex-1 ml-12">
                    <div className="bg-card p-6 rounded-xl shadow-md hover-lift">
                      <div className="text-accent font-bold text-lg">{milestone.year}</div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={qualityImage}
                alt="Quality control at Jugnu Enterprises"
                className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <SectionHeading 
                badge="Our Commitment"
                title="Quality Without Compromise"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Jugnu Enterprises, quality is not just a goal – it's our fundamental commitment. Every garment that leaves our facility undergoes stringent quality checks to ensure it meets our high standards.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients based on trust, transparency, and consistent delivery. Our approach is simple: understand your needs, exceed your expectations, and earn your continued trust.
                </p>
                <p>
                  Whether you're a retailer looking for quality stock, a brand seeking a manufacturing partner, or a business exploring private label options, we're here to support your growth with reliable, quality-focused manufacturing services.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="accent" size="lg" className="mt-4 group">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
