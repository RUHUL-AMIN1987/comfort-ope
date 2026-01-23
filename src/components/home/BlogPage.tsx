import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Smart Home Organization Ideas for a Clutter-Free Life",
    excerpt:
      "Discover practical and stylish home organization tips that help you save space and live stress-free.",
    category: "Home Organization",
    date: "July 12, 2026",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1200",
    href: "/blog/home-organization-tips",
  },
  {
    id: 2,
    title: "Kitchen Storage Essentials Every Modern Home Needs",
    excerpt:
      "From vacuum sealers to smart containers—here’s how to keep your kitchen fresh and organized.",
    category: "Home & Kitchen",
    date: "July 8, 2026",
    image:
      "https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/kitchen-storage-essentials",
  },
  {
    id: 3,
    title: "Natural Beauty & Self-Care: Why Less Is More",
    excerpt:
      "Learn how natural beauty products can improve your daily self-care routine safely and effectively.",
    category: "Beauty & Personal Care",
    date: "July 2, 2026",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200",
    href: "/blog/natural-beauty-self-care",
  },
];

const BlogPage = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium tracking-wider text-primary uppercase mb-3">
            Our Blog
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Comfort Living Journal
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and inspiration for a more comfortable, organized, and
            beautiful lifestyle.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={post.href}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span className="uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Read More
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

export default BlogPage;
