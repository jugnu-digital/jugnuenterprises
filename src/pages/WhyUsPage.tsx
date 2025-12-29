import { Award, Users, MapPin, Briefcase, TrendingUp, Shield, Clock, HeartHandshake, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-factory.jpg";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const WhyUsPage = () => {
  const advantages = [
    {
      icon: Award,
      title: "15+ Years of Experience",
      description: "Since 2008, we've been delivering quality garments, building expertise and understanding of the apparel industry that comes only with time."
    },
    {
      icon: Shield,
      title: "MSME Registered Enterprise",
      description: "Our MSME registration reflects our commitment to formal, compliant business practices. It provides assurance of our legitimacy and operational standards."
    },
    {
      icon: MapPin,
      title: "Ludhiana Manufacturing Base",
      description: "Located in India's textile capital, we have access to skilled labor, quality materials, and a robust supply chain that ensures efficient production."
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Approach",
      description: "We believe in building partnerships, not just completing transactions. Your success is our success, and we work closely to understand and meet your needs."
    },
    {
      icon: TrendingUp,
      title: "Scalable Production Capacity",
      description: "From sample orders to bulk production, our facility can scale to meet your growing demands without compromising on quality or delivery timelines."
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "We understand that timing is crucial in the apparel business. Our streamlined processes ensure your orders are delivered when promised."
    },
  ];

  const stats = [
    { value: 15, suffix: "+", label: "Years in Business" },
    { value: 1, suffix: " Lakh+", label: "Orders Completed" },
    { value: 98, suffix: "%", label: "On-Time Delivery" },
    { value: 100, suffix: "%", label: "Quality Commitment" },
  ];

  const commitments = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every garment undergoes multiple quality checks. We stand behind our work with a commitment to excellence."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "From inquiry to delivery, you'll have a dedicated point of contact who understands your project and ensures smooth execution."
    },
    {
      icon: Briefcase,
      title: "Professional Service",
      description: "Clear communication, transparent pricing, and professional conduct are the foundations of our client relationships."
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-dark opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">
              <span className="w-8 h-0.5 bg-accent" />
              Why Choose Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Your Success Is Our <span className="text-accent">Priority</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover why businesses trust Jugnu Enterprises for their apparel manufacturing needs. We bring together experience, quality, and commitment to deliver results.
            </p>
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
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="Our Advantages"
            title="What Sets Us Apart"
            description="Our competitive advantages make us the preferred choice for businesses seeking reliable apparel manufacturing."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className="bg-card p-8 rounded-2xl shadow-md hover-lift group border border-border/50 opacity-0 animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <advantage.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading 
                badge="Our Commitment"
                title="A Promise of Excellence"
              />
              <p className="text-muted-foreground leading-relaxed">
                When you partner with Jugnu Enterprises, you're not just getting a manufacturer – you're gaining a committed partner invested in your success.
              </p>

              <div className="space-y-6">
                {commitments.map((commitment, index) => (
                  <div 
                    key={commitment.title} 
                    className="flex gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors border border-transparent hover:border-border opacity-0 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <commitment.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{commitment.title}</h3>
                      <p className="text-muted-foreground text-sm">{commitment.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-lg border border-border/50 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Ready to Partner With Us?
                </h3>
                <p className="text-muted-foreground mb-8">
                  Join the businesses that trust Jugnu Enterprises for their manufacturing needs. Let's discuss how we can support your growth.
                </p>
                <div className="space-y-4">
                  <Link to="/contact" className="block">
                    <Button variant="accent" size="xl" className="w-full group">
                      <Phone className="w-5 h-5" />
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/capabilities" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      View Our Capabilities
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Trust & Credibility"
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "MSME Registered", desc: "Udyam Registration Certificate holder" },
                { title: "Proprietorship Firm", desc: "Established and legally recognized business" },
                { title: "Ludhiana Based", desc: "Operating from India's textile hub" },
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="bg-muted p-6 rounded-xl text-center hover-lift opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-accent font-bold text-lg mb-2">{item.title}</div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUsPage;
