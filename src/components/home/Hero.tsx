const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src={heroImage}
          alt="Cozy, organized living space with warm natural lighting"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-[#2E4A36]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:gap-8">
          <h1
            className="font-serif text-white text-4xl md:text-5xl lg:text-8xl font-bold leading-tight mb-6 lg:mb-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Brand <br />
            <span className="text-white">Guideline</span>
          </h1>

          <div className="border-l-4 border-white pl-5 max-w-md">
            <p className="text-white">
              Comfort Ope delivers trusted, practical solutions
              designed to bring comfort and quality into everyday life.
              This brand book defines how we consistently express our promise
              across every product and platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
