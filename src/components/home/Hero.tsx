import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-home.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozy, organized living space with warm natural lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <span className="inline-block text-sm font-medium tracking-wider text-primary uppercase mb-4 animate-fade-in">
            Home & Personal Comfort Essentials
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Create Your Space of{' '}
            <span className="text-primary">Comfort</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Quality essentials for your home and personal care routine. From kitchen organization to natural beauty products, 
            discover what makes every day feel a little more comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
