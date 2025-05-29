
const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          About WeBlaze
        </h1>
        <p className="text-xl text-white/80">
          Pioneering the future of web development and digital innovation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-gradient rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-white/80 leading-relaxed">
            At WeBlaze, we are dedicated to transforming businesses through innovative web solutions. 
            We believe in the power of technology to create meaningful connections and drive growth in the digital era.
          </p>
        </div>

        <div className="card-gradient rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-white/80 leading-relaxed">
            To be the leading force in digital transformation, empowering businesses and individuals 
            with cutting-edge web technologies and exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="card-gradient rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Why Choose WeBlaze?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Innovation</h3>
            <p className="text-white/70">
              We stay ahead of the curve with the latest technologies and development practices.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Excellence</h3>
            <p className="text-white/70">
              Quality is at the heart of everything we do, from code to customer service.
            </p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Partnership</h3>
            <p className="text-white/70">
              We work closely with our clients to understand and exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
