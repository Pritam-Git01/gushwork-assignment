import type React from "react";
import { useState } from "react";

interface ImageItem {
  id: number;
  url: string;
  alt: string;
}

// Hero Section Component
export const HeroSection: React.FC = () => {
  // Image gallery
  const images: ImageItem[] = [
    { id: 1, url: '/images/hero_first_image.png', alt: 'HDPE Pipes - View 1' },
    { id: 2, url: '/images/hero_second_image.jpg', alt: 'Pipeline Infrastructure - View 2' },
    { id: 3, url: '/images/hero_third_image.jpg', alt: 'Industrial Piping - View 3' },
    { id: 4, url: '/images/hero_fourth_image.jpg', alt: 'Pipeline System - View 4' },
    { id: 5, url: '/images/hero_fifth_image.jpg', alt: 'Modern Pipes - View 5' }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: 'center' });
  const [magnifierPos, setMagnifierPos] = useState({ display: 'none', top: 0, left: 0 });

  const currentImage = images[currentImageIndex];

  // Navigation handlers
  const handlePrevious = (): void => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number): void => {
    setCurrentImageIndex(index);
  };

  // Zoom functionality
  const handleMouseEnter = () => {
    setZoomStyle({ display: 'block', backgroundPosition: 'center' });
    setMagnifierPos({ ...magnifierPos, display: 'flex' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / img.width) * 100;
    const y = ((e.clientY - rect.top) / img.height) * 100;

    setZoomStyle({ display: 'block', backgroundPosition: `${x}% ${y}%` });
    setMagnifierPos({ display: 'flex', top: e.clientY - 50, left: e.clientX - 50 });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: 'none', backgroundPosition: 'center' });
    setMagnifierPos({ display: 'none', top: 0, left: 0 });
  };

  return (
    <section className="border-t border-[#E1E3E8] px-4 lg:px-[60px] xl:px-[100px]">
      <div className="max-w-[1240px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex gap-2 items-center lg:mt-8 mt-6">
          <p className="font-inter text-sm text-[#4D545C]">Products</p>
          <img src="/images/CaretRight.svg" alt="Right arrow" />
          <p className="font-inter text-sm text-black">Two For One Twister</p>
        </nav>

        {/* Hero Content */}
        <div className="mt-7 lg:mt-12 flex flex-col lg:flex-row items-start gap-14">
          {/* Left Side - Image Gallery */}
          <div className="w-full lg:flex-1 lg:max-w-[50%]">
            {/* Main Image Container */}
            <div className="relative xl:w-[530px] lg:w-[440px] lg:h-[500px] md:h-[500px] w-full h-[300px] overflow-hidden bg-gray-100">
              <img 
                src={currentImage.url} 
                className="w-full h-full rounded-3xl" 
                alt={currentImage.alt}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />

              {/* Previous Arrow */}
              <button
                onClick={handlePrevious}
                className="absolute top-1/2 left-4 transform -translate-y-1/2"
                aria-label="Previous image"
                type="button"
              >
                <img 
                  src="/images/left-arrow.png" 
                  alt="" 
                  className="lg:size-10 size-8"
                  aria-hidden="true"
                />
              </button>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                aria-label="Next image"
                type="button"
              >
                <img 
                  src="/images/right-arrow.png" 
                  alt="" 
                  className="lg:size-10 size-8"
                  aria-hidden="true"
                />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-inter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-2">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => handleThumbnailClick(index)}
                  className={`
                    relative flex-shrink-0 rounded-xl overflow-hidden
                    transition-all duration-300 ease-in-out
                    w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24
                    ${index === currentImageIndex 
                      ? 'opacity-100 scale-105' 
                      : 'opacity-40 hover:opacity-70 scale-100 hover:scale-105'
                    }
                  `}
                  type="button"
                  aria-label={`View ${image.alt}`}
                  aria-current={index === currentImageIndex ? 'true' : 'false'}
                >
                  <div className="w-full h-full bg-gray-100">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:flex-1">
            {/* Certifications */}
            <div className="flex gap-3 flex-wrap lg:flex-nowrap">
              {[
                { img: 'bis_certificate.svg', text: 'BIS Certified' },
                { img: 'iso_certificate.svg', text: 'ISO Certified' },
                { img: 'ce_certificate.svg', text: 'CE Certified' },
              ].map((cert, idx) => (
                <div key={idx} className="w-[142px] h-8 bg-[#F7F8F9] border border-[#E1E3E8] rounded-md flex justify-center items-center gap-2.5">
                  <img src={`/images/${cert.img}`} alt={`${cert.text}`} />
                  <p className="font-inter font-medium text-sm text-[#4B5563]">{cert.text}</p>
                </div>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="font-urbanist font-bold text-4xl md:text-[56px] leading-[120%] text-black mt-4 mb-4">
              Premium HDPE Pipes & Coils for Modern Infrastructure
            </h1>

            {/* Features List */}
            <ul className="flex flex-col gap-4">
              {[
                'Leak-Proof Fusion Joints',
                'Chemical Resistance',
                '50+ Year Service Life',
                'Flexible Installation',
                'Flexible Installation',
              ].map((feature, idx) => (
                <li key={idx} className="font-inter text-base flex items-center gap-1.5 h-6">
                  <img src="/images/CheckCircle.svg" alt="check" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Price Range Section */}
            <div className="mt-6 flex flex-col gap-6">
              <div className="p-4 border border-[#CFD1D4] bg-white rounded-[10px]">
                <div className="flex flex-col gap-2">
                  <p className="font-inter font-medium text-sm text-[#6A7077]">Price Range</p>
                  <p className="font-inter font-semibold text-xl text-black">₹4,80,000 - 7,90,000</p>
                </div>

                <div className="mt-5 flex flex-col md:flex-row md:flex-wrap gap-3">
                  <div className="bg-[#FEF3C7] rounded-md px-3 py-1.5 font-inter font-medium text-sm text-[#92400E]">
                    Shipping: 6-12 days
                  </div>
                  <div className="bg-[#FEF3C7] rounded-md px-3 py-1.5 font-inter font-medium text-sm text-[#92400E]">
                    Returns: If returned within 7 days
                  </div>
                  <div className="bg-[#F3F4F6] rounded-md px-3 py-1.5 font-inter font-medium text-sm text-[#0D0D0D]">
                    Certifications: ISO Certified, BIS Certified
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-3 mb-14 lg:mb-0">
                <button className="bg-[#2B3990] text-white rounded-xl h-[52px] flex justify-center items-center gap-1.5 font-inter font-medium text-base md:px-6 hover:bg-[#1f2a6b] transition-colors duration-200">
                  <span>Get Custom Quote</span>
                </button>
                <button className="bg-white border border-[#2B3990] text-[#262A2E] rounded-xl h-[52px] flex justify-center items-center gap-1.5 font-inter font-medium text-base md:px-6 hover:bg-[#F7F8F9] transition-colors duration-200">
                  <span>View Technical Specs</span>
                  <img src="/images/CaretRight-2.svg" alt="right" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>                                           
        </div>

        {/* Zoom Preview */}
        <div 
          className="absolute sm:top-[30%] top-[55%] sm:left-[50%] left-[35%] lg:size-[300px] md:size-60 size-40 bg-no-repeat bg-[length:200%] bg-center border border-black/10 shadow-lg rounded-xl z-[999] pointer-events-none"
          style={{
            display: zoomStyle.display,
            backgroundImage: `url(${currentImage.url})`,
            backgroundPosition: zoomStyle.backgroundPosition,
          }}
        />
        <div 
          className="fixed lg:w-[100px] lg:h-[100px] w-20 h-20 border border-[#B1B1B1] justify-center items-center pointer-events-none z-[9999] backdrop-blur-[2px]"
          style={{
            display: magnifierPos.display,
            top: `${magnifierPos.top}px`,
            left: `${magnifierPos.left}px`,
          }}
        >
          <img src="/images/glass.svg" alt="magnifying glass" />
        </div>

        {/* Brand Banner */}
        <div className="mt-14 lg:mt-20 mb-12 lg:mb-20 flex flex-col gap-5 overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <p className="font-inter text-sm text-center text-[#878B94]">
            Trusted by Hundreds of Companies Globally
          </p>
          <div className="flex justify-between">
            {[...Array(3)].map((_, idx) => (
              <img key={idx} src="/images/euroflex.svg" className="w-[122px] h-8" alt="euroflex" />
            ))}
            <img src="/images/euroflex.svg" className="hidden md:block w-[122px] h-8" alt="euroflex" />
            <img src="/images/euroflex.svg" className="hidden lg:block w-[122px] h-8" alt="euroflex" />
            <img src="/images/euroflex.svg" className="hidden xl:block w-[122px] h-8" alt="euroflex" />
          </div>
        </div>
      </div>
    </section>
  );
};