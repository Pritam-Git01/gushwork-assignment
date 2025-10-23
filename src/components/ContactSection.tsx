import { useState } from "react";

// Contact Form Component
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]">
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded-[20px] bg-[#2B3990] p-6 lg:p-14 lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-4 lg:max-w-[50%]">
            <h6 className="font-urbanist font-bold text-4xl lg:text-5xl leading-[120%] text-white">
              Ready to Transform Your Textile Manufacturing?
            </h6>
            <p className="font-inter text-base lg:text-lg leading-[160%] text-white/80">
              Get a personalized consultation and quote for machinery solutions tailored to your specific production requirements.
            </p>
            <hr className="border-none h-[1.5px] bg-white/20 mt-6" />
            <p className="font-inter text-sm lg:text-base leading-[160%] text-white/80">
              For immediate assistance, feel free to give us a direct call at +91-XXX-XXX-XXXX. You can also send us a quick email at info@meeraind.com
            </p>
          </div>

          <div className="mt-10 lg:mt-0 bg-[#F7F8F9] p-5 lg:p-8 rounded-2xl flex flex-col gap-4 w-full lg:max-w-sm">
            <h2 className="font-inter font-medium text-base lg:text-xl text-[#262A2E]">Contact Us Today</h2>
            <div className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="px-3 py-2.5 border border-[#E1E3E8] rounded-lg font-inter text-sm outline-none focus:ring-2 focus:ring-[#2B3990]"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="px-3 py-2.5 border border-[#E1E3E8] rounded-lg font-inter text-sm outline-none focus:ring-2 focus:ring-[#2B3990]"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="px-3 py-2.5 border border-[#E1E3E8] rounded-lg font-inter text-sm outline-none focus:ring-2 focus:ring-[#2B3990]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <div className="flex border border-[#E1E3E8] rounded-lg bg-white focus-within:ring-2 focus-within:ring-[#2B3990]">
                <select className="px-2.5 py-2.5 border-r border-[#E1E3E8] bg-white rounded-l-lg font-inter text-sm outline-none">
                  <option value="+91">+91</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="7003026616" 
                  className="flex-1 px-3 py-2.5 rounded-r-lg font-inter text-sm outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <button 
              onClick={handleSubmit}
              className="bg-[#262A2E] text-white px-3 py-3 rounded-[10px] font-inter font-medium text-sm"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};