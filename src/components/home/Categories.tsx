import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import categoryKitchen from '@/assets/category-kitchen.jpg';
import categoryOrganization from '@/assets/category-organization.jpg';
import categoryBeauty from '@/assets/category-beauty.jpg';

const categories = [
  {
    id: 1,
    name: 'Home & Kitchen',
    description: 'Vacuum sealers, storage bags & food preservation essentials',
    image: categoryKitchen,
    href: '/home-kitchen',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Home Organization',
    description: 'Under-bed organizers, storage solutions & decluttering essentials',
    image: categoryOrganization,
    href: '/organization',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Beauty & Personal Care',
    description: 'Castor oil, natural balms, skincare & wellness products',
    image: categoryBeauty,
    href: '/beauty',
    badge: 'Bestseller',
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium tracking-wider text-primary uppercase mb-3">
            Shop by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Everything for Your Comfort
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed to bring comfort and organization to every aspect of your life.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badge */}
              {category.badge && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {category.badge}
                </span>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
