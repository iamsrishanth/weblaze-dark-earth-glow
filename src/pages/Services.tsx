
const Services = () => {
  const services = [
    {
      icon: "💼",
      title: "Custom Portals",
      description: "We design and develop smart, scalable portals tailored to streamline your business operations. Whether it's a student management system, employee dashboard, or customer support interface, our portals are built with performance, security, and user-friendliness at the core. Empower your organization with tools that make data management and collaboration seamless."
    },
    {
      icon: "🌐",
      title: "Website Development",
      description: "Your website is your digital identity—and we make sure it stands out. From dynamic business sites to creative portfolios and e-commerce platforms, we build websites that are fast, responsive, and visually striking. Our development process combines modern design trends with functionality to deliver an online presence that truly represents your brand."
    },
    {
      icon: "🎓",
      title: "Training & Internships",
      description: "At WeBlaze, we are passionate about shaping the next generation of tech talent. Our industry-ready training programs and internships provide hands-on experience in real-world projects. We mentor students and early professionals in web development, design thinking, and emerging tech—equipping them with the skills and confidence to lead in the digital world."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-6">
        <p className="text-sm uppercase tracking-wider text-white/60">SERVICES</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Explore Our Services
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="card-gradient rounded-lg p-8 space-y-6 hover:scale-105 transition-transform text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-white/80 leading-relaxed text-left">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="card-gradient rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">
            Let's discuss how we can help transform your digital presence and achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold transition-all glow-effect"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
