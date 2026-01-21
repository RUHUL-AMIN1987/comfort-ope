import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";


const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">Blog</h1>
        <p className="text-muted-foreground text-lg">Blog form coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;