import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to Comfort Ope!",
        description: "Thank you for subscribing. Check your inbox for exclusive offers.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Stay Comfortable
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for exclusive deals, new product announcements, 
            and tips on making your home more comfortable.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
              required
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-primary-foreground/60 mt-4">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
