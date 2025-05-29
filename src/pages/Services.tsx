
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
    <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 py-4 sm:py-8 px-2 sm:px-0">
      {/* Hero Section */}
      <div className="text-center space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-purple-400 font-semibold">OUR SERVICES</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-tight">
            What We Offer
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          Transforming ideas into digital reality with cutting-edge solutions and innovative approaches
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 px-4 sm:px-0">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative card-gradient rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-left text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 mx-4 sm:mx-0">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 text-base sm:text-lg">
              Let's discuss how we can help transform your digital presence and achieve your business goals.
            </p>
          </div>
          
          <form className="space-y-4 sm:space-y-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-white/90">
                Service Required
              </label>
              <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm text-sm sm:text-base">
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm resize-none text-sm sm:text-base"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>
            
            <div className="text-center pt-2 sm:pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 glow-effect transform hover:scale-105"
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
