import { Layers, Scissors, Shirt, CheckCircle, Package, Truck, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import qualityImage from "@/assets/quality-control.jpg";
import sewingImage from "@/assets/sewing-machine.jpg";
import qualityInspectionImage from "@/assets/quality-inspection.jpg";
import SectionHeading from "@/components/SectionHeading";

const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: Layers,
      title: "Fabric Sourcing",
      description: "We source premium quality fabrics from trusted suppliers based on your specifications. Our procurement team ensures the right materials at competitive prices.",
      details: ["Material selection", "Quality verification", "Supplier coordination", "Timely procurement"]
    },
    {
      number: "02",
      icon: Scissors,
      title: "Cutting & Preparation",
      description: "Precision cutting using modern equipment ensures minimal wastage and accurate sizing. Each piece is prepared according to the pattern specifications.",
      details: ["Pattern making", "Precision cutting", "Size grading", "Material optimization"]
    },
    {
      number: "03",
      icon: Shirt,
      title: "Stitching & Assembly",
      description: "Our skilled workforce uses industrial sewing machines to assemble garments with precision. Each stage is monitored for quality and consistency.",
      details: ["Expert stitching", "Quality seams", "Consistent sizing", "Production monitoring"]
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Quality Inspection",
      description: "Multi-point quality checks ensure every garment meets our standards. We inspect stitching, measurements, and overall finish at multiple stages.",
      details: ["Visual inspection", "Measurement check", "Stitch quality", "Defect screening"]
    },
    {
      number: "05",
      icon: Package,
      title: "Finishing & Packaging",
      description: "Professional finishing including pressing, trimming, and folding. Garments are packaged according to your specifications and branding requirements.",
      details: ["Steam pressing", "Thread trimming", "Tagging & labeling", "Custom packaging"]
    },
    {
      number: "06",
      icon: Truck,
      title: "Dispatch & Delivery",
      description: "Careful packaging and timely dispatch ensure your order reaches you in perfect condition. We coordinate logistics for hassle-free delivery.",
      details: ["Secure packaging", "Order verification", "Logistics coordination", "Timely delivery"]
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">
              <span className="w-8 h-0.5 bg-accent" />
              Our Process
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              From Fabric to <span className="text-accent">Finished Garment</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our streamlined manufacturing process ensures quality at every step, delivering garments that meet the highest standards of craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-16 lg:mb-24 opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Visual */}
                <div className={`flex-1 w-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="bg-muted rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover-lift">
                    <div className="absolute top-6 left-6 text-8xl font-bold font-serif text-primary/10 group-hover:text-accent/20 transition-colors duration-500">
                      {step.number}
                    </div>
                    <div className="relative z-10 flex items-center justify-center py-8">
                      <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300 group-hover:scale-110">
                        <step.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </div>
                    {/* Connection line for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 space-y-6 ${index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-2 text-accent font-semibold ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="w-8 h-0.5 bg-accent" />
                    Step {step.number}
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <ul className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:justify-items-end" : ""}`}>
                    {step.details.map((detail) => (
                      <li key={detail} className={`flex items-center gap-2 text-sm text-foreground ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <SectionHeading 
                badge="Quality Assurance"
                title="Quality at Every Step"
              />
              <p className="text-muted-foreground leading-relaxed">
                Quality control is not just a final step – it's integrated throughout our manufacturing process. Our multi-stage inspection system ensures that every garment meets our stringent quality standards.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Incoming Material Check", desc: "All fabrics and materials are inspected before production begins" },
                  { title: "In-Process Inspection", desc: "Regular checks during production to catch issues early" },
                  { title: "Final Quality Audit", desc: "Comprehensive inspection before packaging and dispatch" },
                ].map((item, index) => (
                  <div 
                    key={item.title} 
                    className="bg-card p-4 rounded-lg flex items-start gap-4 hover-lift opacity-0 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative group rounded-2xl overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={qualityInspectionImage}
                  alt="Quality control inspection"
                  className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden group aspect-video">
                  <img src={sewingImage} alt="Precision stitching" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-sm font-medium">Precision Stitching</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden group aspect-video">
                  <img src={qualityImage} alt="Quality check" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-sm font-medium">Quality Checks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <SectionHeading 
              title="Ready to Start Your Order?"
              description="Get in touch with us to discuss your manufacturing requirements. We'll guide you through the process and provide a detailed quote."
              centered
              light
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  <Phone className="w-5 h-5" />
                  Start Your Order
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessPage;
