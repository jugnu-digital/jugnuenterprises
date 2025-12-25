import { Award, Users, MapPin, Briefcase, TrendingUp, Shield, Clock, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-factory.jpg";

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
    { value: "15+", label: "Years in Business" },
    { value: "1000+", label: "Orders Completed" },
    { value: "98%", label: "On-Time Delivery" },
    { value: "100%", label: "Quality Commitment" },
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
      <section className="pt-32 pb-16 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              Your Success Is Our Priority
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed">
              Discover why businesses trust Jugnu Enterprises for their apparel manufacturing needs. We bring together experience, quality, and commitment to deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold font-serif text-accent mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Advantages</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground mt-4">
              Our competitive advantages make us the preferred choice for businesses seeking reliable apparel manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group border border-border"
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Commitment</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                A Promise of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you partner with Jugnu Enterprises, you're not just getting a manufacturer – you're gaining a committed partner invested in your success.
              </p>

              <div className="space-y-6">
                {commitments.map((commitment) => (
                  <div key={commitment.title} className="flex gap-4">
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

            <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Ready to Partner With Us?
              </h3>
              <p className="text-muted-foreground mb-8">
                Join the businesses that trust Jugnu Enterprises for their manufacturing needs. Let's discuss how we can support your growth.
              </p>
              <div className="space-y-4">
                <Link to="/contact" className="block">
                  <Button variant="accent" size="xl" className="w-full">
                    Get in Touch
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
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Trust & Credibility
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted p-6 rounded-xl text-center">
                <div className="text-accent font-bold text-lg mb-2">MSME Registered</div>
                <p className="text-sm text-muted-foreground">Udyam Registration Certificate holder</p>
              </div>
              <div className="bg-muted p-6 rounded-xl text-center">
                <div className="text-accent font-bold text-lg mb-2">Proprietorship Firm</div>
                <p className="text-sm text-muted-foreground">Established and legally recognized business</p>
              </div>
              <div className="bg-muted p-6 rounded-xl text-center">
                <div className="text-accent font-bold text-lg mb-2">Ludhiana Based</div>
                <p className="text-sm text-muted-foreground">Operating from India's textile hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyUsPage;
