
import { Mail, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient">
          Contact Us
        </h1>
        <p className="text-xl text-white/80">
          Get in touch with our team. We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-gradient rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <User className="text-purple-400" size={28} />
            WeBlaze Technologies India Pvt. Ltd.
          </h2>
          
          <div className="space-y-4 text-white/80">
            <div>
              <h3 className="font-semibold text-white mb-2">Registered Office:</h3>
              <p># 2-5-257/S1,301, 3rd Floor,<br />
                 Nakkalagutta, Hanamkonda.<br />
                 Telangana State – 506001.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-2">Corporate Office:</h3>
              <p># 1-111-1/B -185,100, Ground Floor,<br />
                 Raghavendra Colony, Kondapur,<br />
                 Hyderabad. Telangana State – 500084.</p>
            </div>
          </div>
        </div>

        <div className="card-gradient rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Mail className="text-purple-400" size={28} />
            Get In Touch
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Phone Numbers:</h3>
              <div className="space-y-1 text-white/80">
                <p>+91 9849436612</p>
                <p>+91 8465067156</p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Email:</h3>
              <a 
                href="mailto:admin@weblaze.in" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                admin@weblaze.in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="card-gradient rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Send us a Message
        </h2>
        
        <form className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your phone number"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Message subject"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold transition-all glow-effect"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
