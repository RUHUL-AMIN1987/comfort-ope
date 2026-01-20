import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">About Us</h1>
        <p className="text-muted-foreground text-lg">Our story coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
