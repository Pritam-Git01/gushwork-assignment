// Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="px-4 lg:px-[60px] xl:px-[100px] pt-12 lg:pt-20 xl:pt-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="p-6 lg:p-8 bg-white border border-[#CFD1D4] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-5">
          <img src="/images/footer_mobile_logo.svg" alt="logo" />
          <p className="font-urbanist font-semibold text-base lg:text-2xl leading-[120%] text-center lg:text-left text-[#0D0D0D] lg:max-w-[344px]">
            Premium <span className="text-[#2B3990]">HDPE Pipes & Fittings Manufacturer</span> in South India
          </p>
        </div>

        <div className="mt-15 flex flex-col lg:flex-row gap-6 lg:justify-between">
          <div className="flex flex-col gap-4 lg:w-[158px]">
            <p className="font-inter font-semibold text-xs text-[#0D0D0D]">About Us</p>
            <p className="font-inter font-medium text-sm text-[#535A61]">About Us</p>
          </div>
          <div className="flex flex-col gap-4 lg:w-[158px]">
            <p className="font-inter font-semibold text-xs text-[#0D0D0D]">Categories</p>
            {['Packaging Industry Solutions', 'Fishnet Manufacturing', 'PPMF/Tapes and Twines', 'FIBC and Woven Sack', 'Carpet and Rugs Industry', 'Technical Textiles'].map((item, idx) => (
              <p key={idx} className="font-inter font-medium text-sm text-[#535A61]">{item}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4 lg:w-[158px]">
            <p className="font-inter font-semibold text-xs text-[#0D0D0D]">Products</p>
            {['Two For One Twister', 'TPRS Twister Machine', 'Ring Twisting Machines', 'Covering Machines', 'Heat Setting Equipment', 'Heat Setting Equipment'].map((item, idx) => (
              <p key={idx} className="font-inter font-medium text-sm text-[#535A61]">{item}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 lg:w-[158px]">
            <p className="font-inter font-semibold text-xs text-[#0D0D0D]">Contact</p>
            <div className="flex gap-1.5 items-start">
              <img src="/images/MapPinLine.svg" alt="map" />
              <p className="font-inter text-xs text-[#535A61]">2126, Road No. 2, GIDC Sachin, Surat - 394 230 Gujarat, India</p>
            </div>
            <div className="flex gap-1.5 items-start">
              <img src="/images/Phone.svg" alt="phone" />
              <p className="font-inter text-xs text-[#535A61]">+91-XXX-XXX-XXXX</p>
            </div>
            <div className="flex gap-1.5 items-start">
              <img src="/images/EnvelopeSimple.svg" alt="mail" />
              <p className="font-inter text-xs text-[#535A61]">info@meeraind.com</p>
            </div>
            <div className="flex gap-1.5 items-start">
              <img src="/images/Headset.svg" alt="headset" />
              <p className="font-inter text-xs text-[#535A61]">support@meeraind.com</p>
            </div>
            <hr className="border-none h-px bg-[#E1E3E8] my-6" />
            <div className="flex items-center gap-6">
                <img src="/images/linkedin.svg" alt="linkedin" className="hover:opacity-80 transition-opacity duration-200 lg:size-8 size-6" />
                <img src="/images/x.svg" alt="x" className="hover:opacity-80 transition-opacity duration-200 lg:size-8 size-6" />
                <img src="/images/insta.svg" alt="insta" className="hover:opacity-80 transition-opacity duration-200 lg:size-8 size-6" />
            </div>
          </div>
        </div>

        <div className="mt-12 py-3 border-t border-[#E1E3E8] flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-60">
          <p className="font-inter text-xs text-[#535A61]">Copyright © 2025 Meera Industries Limited | All Rights Reserved</p>
          <div className="flex justify-between lg:gap-14">
            <p className="font-inter text-xs text-[#535A61]">Privacy Policy</p>
            <p className="font-inter text-xs text-[#535A61]">Terms of Service</p>
            <p className="font-inter text-xs text-[#535A61]">Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};