import { Scissors, Factory, Package, CheckCircle, Shirt, Layers, Tag, Settings, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fabricImage from "@/assets/fabric-rolls.jpg";
import garmentImage from "@/assets/garment-stack.jpg";
import threadImage from "@/assets/thread-spools.jpg";
import SectionHeading from "@/components/SectionHeading";

const CapabilitiesPage = () => {
  const capabilities = [
    {
      icon: Shirt,
      title: "Garment Manufacturing",
      description: "Complete end-to-end garment production from fabric to finished product. We handle all types of apparel including casual wear, formal wear, sportswear, and workwear.",
      features: ["Full garment production", "Multiple fabric types", "All sizes available", "Custom specifications"]
    },
    {
      icon: Scissors,
      title: "Custom Apparel Production",
      description: "Tailored manufacturing solutions designed to meet your specific requirements. From unique designs to specialized materials, we bring your vision to life.",
      features: ["Custom designs", "Prototype development", "Sample production", "Design consultation"]
    },
    {
      icon: Package,
      title: "Bulk & Private Label Manufacturing",
      description: "Scalable production capacity for large orders with private labeling options. Perfect for retailers and brands looking to expand their product lines.",
      features: ["High volume orders", "Private labeling", "Brand customization", "Packaging solutions"]
    },
    {
      icon: CheckCircle,
      title: "Quality Control & Finishing",
      description: "Comprehensive quality assurance at every stage of production. Our finishing services ensure every garment meets the highest standards.",
      features: ["Multi-stage QC", "Professional finishing", "Pressing & packaging", "Defect-free guarantee"]
    },
    {
      icon: Layers,
      title: "Fabric Sourcing",
      description: "Access to a wide range of quality fabrics through our established supplier network. We can source materials based on your specifications and budget.",
      features: ["Diverse fabric options", "Quality materials", "Competitive pricing", "Timely procurement"]
    },
    {
      icon: Settings,
      title: "Technical Support",
      description: "Expert guidance on garment construction, material selection, and production optimization. We help you make informed decisions for better results.",
      features: ["Design assistance", "Material recommendations", "Cost optimization", "Production planning"]
    },
  ];

  const productCategories = [
    "T-Shirts & Polo Shirts",
    "Casual Shirts",
    "Trousers & Jeans",
    "Jackets & Outerwear",
    "Sportswear",
    "Workwear & Uniforms",
    "Ethnic Wear",
    "Kids Wear",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4 animate-fade-in">
              <span className="w-8 h-0.5 bg-accent" />
              Our Capabilities
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Manufacturing <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive apparel manufacturing solutions tailored to your business needs. From small batches to large-scale production, we deliver quality at every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            badge="What We Offer"
            title="Comprehensive Manufacturing Services"
            description="From concept to completion, we provide end-to-end apparel manufacturing solutions."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="bg-card p-8 rounded-2xl shadow-md hover-lift group border border-border/50 opacity-0 animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <capability.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading 
                badge="Product Range"
                title="What We Manufacture"
              />
              <p className="text-muted-foreground leading-relaxed">
                Our manufacturing expertise spans across a wide range of apparel categories. Whether you need basics or specialized garments, we have the capability to deliver.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {productCategories.map((category, index) => (
                  <div
                    key={category}
                    className="flex items-center gap-3 bg-card px-4 py-3 rounded-lg hover:bg-card/80 transition-colors border border-border/50 opacity-0 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <Tag className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative group rounded-2xl overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={garmentImage}
                  alt="Finished garments ready for delivery"
                  className="rounded-2xl shadow-lg w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden group aspect-video">
                  <img src={fabricImage} alt="Fabric rolls" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="relative rounded-xl overflow-hidden group aspect-video">
                  <img src={threadImage} alt="Thread spools" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Order Quantities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              badge="Order Information"
              title="Flexible Order Quantities"
              centered
            />

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-md text-center border border-border/50 hover-lift group">
                <div className="text-5xl font-bold font-serif text-accent mb-2 group-hover:scale-110 transition-transform">200+</div>
                <div className="font-semibold text-foreground mb-2 text-lg">Sample Orders</div>
                <p className="text-muted-foreground text-sm">Perfect for testing and market evaluation</p>
              </div>
              <div className="bg-primary p-8 rounded-2xl shadow-lg text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-light opacity-100" />
                <div className="relative z-10">
                  <div className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">Most Popular</div>
                  <div className="text-5xl font-bold font-serif text-accent mb-2 group-hover:scale-110 transition-transform">10,000+</div>
                  <div className="font-semibold text-primary-foreground mb-2 text-lg">Regular Orders</div>
                  <p className="text-primary-foreground/80 text-sm">Our standard production runs</p>
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-md text-center border border-border/50 hover-lift group">
                <div className="text-5xl font-bold font-serif text-accent mb-2 group-hover:scale-110 transition-transform">1 Lakh+</div>
                <div className="font-semibold text-foreground mb-2 text-lg">Bulk Orders</div>
                <p className="text-muted-foreground text-sm">Large-scale production capacity</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="accent" size="xl" className="group">
                  <Phone className="w-5 h-5" />
                  Discuss Your Requirements
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

export default CapabilitiesPage;
