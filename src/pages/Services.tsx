
const Services = () => {
  const services = [
    {
      icon: "💼",
      title: "Custom Portals",
      description: "We design and develop smart, scalable portals tailored to streamline your business operations. Whether it's a student management system, employee dashboard, or customer support interface, our portals are built with performance, security, and user-friendliness at the core."
    },
    {
      icon: "🌐",
      title: "Website Development",
      description: "Your website is your digital identity—and we make sure it stands out. From dynamic business sites to creative portfolios and e-commerce platforms, we build websites that are fast, responsive, and visually striking."
    },
    {
      icon: "🎓",
      title: "Training & Internships",
      description: "At WeBlaze, we are passionate about shaping the next generation of tech talent. Our industry-ready training programs and internships provide hands-on experience in real-world projects."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wider text-purple-400 font-semibold">OUR SERVICES</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gradient leading-tight">
            What We Offer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into digital reality with cutting-edge solutions and innovative approaches
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative card-gradient rounded-2xl p-8 space-y-6 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-left">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-12 border border-white/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 text-lg">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Service Required
              </label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm">
                <option value="">Select a service</option>
                <option value="custom-portals">Custom Portals</option>
                <option value="website-development">Website Development</option>
                <option value="training-internships">Training & Internships</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>
            
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-semibold text-lg transition-all duration-300 glow-effect transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
