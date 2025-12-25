import { Scissors, Factory, Package, CheckCircle, Shirt, Layers, Tag, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fabricImage from "@/assets/fabric-rolls.jpg";

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
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Capabilities</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              Manufacturing Excellence
            </h1>
            <p className="text-white/80 text-lg mt-6 leading-relaxed">
              Comprehensive apparel manufacturing solutions tailored to your business needs. From small batches to large-scale production, we deliver quality at every scale.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border group"
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
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Product Range</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                What We Manufacture
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our manufacturing expertise spans across a wide range of apparel categories. Whether you need basics or specialized garments, we have the capability to deliver.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {productCategories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-3 bg-card px-4 py-3 rounded-lg"
                  >
                    <Tag className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={fabricImage}
                alt="Fabric rolls and materials"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Order Quantities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Order Information</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
                Flexible Order Quantities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-md text-center border border-border">
                <div className="text-4xl font-bold font-serif text-accent mb-2">50+</div>
                <div className="font-semibold text-foreground mb-2">Sample Orders</div>
                <p className="text-muted-foreground text-sm">Perfect for testing and market evaluation</p>
              </div>
              <div className="bg-primary p-8 rounded-2xl shadow-md text-center">
                <div className="text-4xl font-bold font-serif text-accent mb-2">500+</div>
                <div className="font-semibold text-primary-foreground mb-2">Regular Orders</div>
                <p className="text-primary-foreground/80 text-sm">Our standard production runs</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-md text-center border border-border">
                <div className="text-4xl font-bold font-serif text-accent mb-2">5000+</div>
                <div className="font-semibold text-foreground mb-2">Bulk Orders</div>
                <p className="text-muted-foreground text-sm">Large-scale production capacity</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  <Factory className="w-5 h-5" />
                  Discuss Your Requirements
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
