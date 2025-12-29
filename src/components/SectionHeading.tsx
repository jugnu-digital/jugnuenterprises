interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = false, light = false }: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {badge && (
        <span className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm mb-4">
          <span className="w-8 h-0.5 bg-accent" />
          {badge}
          <span className="w-8 h-0.5 bg-accent" />
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-foreground"} leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`${light ? "text-white/80" : "text-muted-foreground"} text-lg mt-4 leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
