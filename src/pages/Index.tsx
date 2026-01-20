import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import TrustBadges from '@/components/home/TrustBadges';
import AboutPreview from '@/components/home/AboutPreview';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Categories />
        <AboutPreview />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
