import { Layers, Scissors, Shirt, CheckCircle, Package, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import qualityImage from "@/assets/quality-control.jpg";

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
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              From Fabric to Finished Garment
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed">
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
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-16 lg:mb-24 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual */}
                <div className="flex-1 w-full">
                  <div className="bg-muted rounded-2xl p-8 lg:p-12 relative overflow-hidden group">
                    <div className="absolute top-6 left-6 text-8xl font-bold font-serif text-primary/10 group-hover:text-accent/20 transition-colors">
                      {step.number}
                    </div>
                    <div className="relative z-10 flex items-center justify-center py-8">
                      <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                        <step.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 text-accent font-semibold">
                    <span className="w-8 h-0.5 bg-accent" />
                    Step {step.number}
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground">
                    {step.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Quality Assurance</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Quality at Every Step
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Quality control is not just a final step – it's integrated throughout our manufacturing process. Our multi-stage inspection system ensures that every garment meets our stringent quality standards.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Incoming Material Check</h4>
                    <p className="text-sm text-muted-foreground">All fabrics and materials are inspected before production begins</p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-lg flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">In-Process Inspection</h4>
                    <p className="text-sm text-muted-foreground">Regular checks during production to catch issues early</p>
                  </div>
                </div>
                <div className="bg-card p-4 rounded-lg flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Final Quality Audit</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive inspection before packaging and dispatch</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={qualityImage}
                alt="Quality control inspection"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Ready to Start Your Order?
            </h2>
            <p className="text-muted-foreground text-lg">
              Get in touch with us to discuss your manufacturing requirements. We'll guide you through the process and provide a detailed quote.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Start Your Order
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessPage;
