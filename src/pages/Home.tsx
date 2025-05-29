
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Home = () => {
  const [showInternshipBox, setShowInternshipBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show internship box when scrolled down 50% of the viewport height
      if (scrollPosition > windowHeight * 0.5) {
        setShowInternshipBox(true);
      } else {
        setShowInternshipBox(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] space-y-12">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center space-y-6">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Welcome to WeBlaze
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Empowering digital transformation through innovative web solutions and cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/services"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-all glow-effect"
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-white/20 hover:border-purple-400 rounded-lg text-white font-semibold transition-all backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="text-center">
          <ArrowDown className="mx-auto animate-bounce text-white/60" size={24} />
        </div>
      </div>

      {/* Internship Interactive Box - Appears on Scroll */}
      <div className={`max-w-md mx-auto transition-all duration-700 ${
        showInternshipBox 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <div className="card-gradient rounded-lg p-6 text-center space-y-4 hover:scale-105 transition-transform cursor-pointer">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L13 8l6 .75-4.5 4.5L16 19l-6-3.5L4 19l1.5-5.75L1 8.75 7 8l3-6z"/>
            </svg>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">INTERNSHIP</h3>
            <p className="text-sm text-white/60">MAY TERM (2025)</p>
            <p className="text-white/80 italic">Applications are Open</p>
          </div>

          <div className="space-y-2 text-sm text-white/80">
            <p>3 - Months of Training</p>
            <p>Upto 9-months of Real-Time Project</p>
            <p>Minimum Stipend of Rs.10,000</p>
            <p>Mentorship from Experts</p>
            <p>Get Certifications for Training Period</p>
          </div>

          <Link
            to="/internships"
            className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-bold transition-all glow-effect"
          >
            APPLY NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
