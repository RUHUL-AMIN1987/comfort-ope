import { Shield, Truck, RotateCcw, Award, Leaf, CheckCircle } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'FDA Food Grade',
    description: 'Kitchen products meet safety standards',
  },
  {
    icon: Leaf,
    title: 'BPA Free',
    description: 'Safe materials for your family',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Tested for durability & performance',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Free delivery on orders over $50',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Easy hassle-free return policy',
  },
  {
    icon: CheckCircle,
    title: 'Secure Checkout',
    description: 'Protected payment processing',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                <badge.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h4 className="font-medium text-sm text-foreground mb-1">{badge.title}</h4>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
