import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-dark">
      <div className="text-center px-4">
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="accent" size="xl">
            <Home className="w-5 h-5" />
            Return to Home
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
