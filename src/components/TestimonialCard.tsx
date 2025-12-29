import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, company, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-md border border-border relative hover-lift group">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20 group-hover:text-accent/40 transition-colors" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-gold-light rounded-full flex items-center justify-center">
          <span className="text-accent-foreground font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
