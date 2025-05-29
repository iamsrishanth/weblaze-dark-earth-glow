
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Internships = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    university: "",
    currentlyStudying: "",
    passingYear: "",
    collegeId: "",
    domain: "",
    preferredMode: "",
    registrationFee: "",
    declaration: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.declaration) {
      toast({
        title: "Declaration Required",
        description: "Please accept the declaration to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      mobileNumber: "",
      university: "",
      currentlyStudying: "",
      passingYear: "",
      collegeId: "",
      domain: "",
      preferredMode: "",
      registrationFee: "",
      declaration: false
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Internship Application - May 2025
        </h1>
        <p className="text-lg text-white/80">
          Web Development through Prompt Engineering
        </p>
      </div>

      <div className="card-gradient rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Gender *
            </label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              University / College *
            </label>
            <input
              type="text"
              name="university"
              required
              value={formData.university}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Currently Studying *
            </label>
            <select
              name="currentlyStudying"
              required
              value={formData.currentlyStudying}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Course</option>
              <option value="BE/B.Tech">BE / B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="ME/M.Tech">ME / M.Tech</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Passing Out Year *
            </label>
            <select
              name="passingYear"
              required
              value={formData.passingYear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              College Identity No. *
            </label>
            <input
              type="text"
              name="collegeId"
              required
              value={formData.collegeId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Select your Domain *
            </label>
            <select
              name="domain"
              required
              value={formData.domain}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Domain</option>
              <option value="Static Development">Static Development</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Preferred Mode *
            </label>
            <select
              name="preferredMode"
              required
              value={formData.preferredMode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Registration Fee *
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="registrationFee"
                  value="Payment of ₹1999.00"
                  checked={formData.registrationFee === "Payment of ₹1999.00"}
                  onChange={handleInputChange}
                  className="text-purple-600"
                />
                <span className="text-white">Payment of ₹1999.00</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Declaration *
            </label>
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={handleInputChange}
                className="mt-1 text-purple-600"
                required
              />
              <span className="text-white/80 text-sm">
                I hereby declare that the information provided is true and I agree to the rules of the internship.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-bold text-lg transition-all glow-effect"
          >
            Proceed for Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Internships;
