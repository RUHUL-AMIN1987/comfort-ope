import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Customers' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Heart, value: '50+', label: 'Quality Products' },
];

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="inline-block text-sm font-medium tracking-wider text-primary uppercase mb-3">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Comfort for Every Home, Care for Every Person
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Comfort Ope, we believe that the little things make life better. That's why we curate 
              only the finest home and personal care essentials—products that bring genuine comfort 
              and joy to your everyday routines.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From our FDA-approved food storage solutions to our natural, ingredient-conscious beauty 
              products, every item is selected with your wellbeing in mind. We're not just a store; 
              we're your partner in creating a more comfortable life.
            </p>
            <Button asChild variant="hero">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background rounded-2xl p-6 text-center shadow-soft animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
