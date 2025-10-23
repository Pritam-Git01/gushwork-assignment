import React, { useRef } from 'react';

interface Testimonial {
  image: string;
  heading: string;
  content: string;
  profileName: string;
  profileTitle: string;
}

export const PerformanceSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      image: '/images/performance.svg',
      heading: 'Revolutionized our FIBC production efficiency!',
      content: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
      profileName: 'Johann Mueller',
      profileTitle: 'Production Director'
    },
    {
      image: '/images/performance.svg',
      heading: 'Revolutionized our FIBC production efficiency!',
      content: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
      profileName: 'Johann Mueller',
      profileTitle: 'Production Director'
    },
    {
      image: '/images/performance.svg',
      heading: 'Revolutionized our FIBC production efficiency!',
      content: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
      profileName: 'Johann Mueller',
      profileTitle: 'Production Director'
    },
    {
      image: '/images/performance.svg',
      heading: 'Revolutionized our FIBC production efficiency!',
      content: "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
      profileName: 'Johann Mueller',
      profileTitle: 'Production Director'
    }
  ];

  return (
    <section className="pt-12 pb-12 lg:pt-20 lg:pb-20 xl:pt-[100px] xl:pb-[100px] border-b border-[#E1E3E8]">
      {/* Text Container */}
      <div className="flex flex-col gap-5 items-center px-4 lg:px-[60px] xl:px-[100px]">
        <h6 className="font-urbanist font-bold text-4xl lg:text-[44px] leading-[120%] text-center text-[#0D0D0D]">
          Trusted Performance. Proven Results
        </h6>
        <p className="font-inter text-base lg:text-lg leading-[160%] text-center text-[#4D545C] max-w-[800px]">
          From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.
        </p>
      </div>

      {/* Swiper Container */}
      <div 
        ref={scrollRef}
        className="mt-14 lg:mt-14 overflow-x-auto flex gap-4 px-4 lg:px-[60px] xl:px-[100px] scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-5 lg:p-8 rounded-[24px] bg-[#F7F8F9] border-[1.5px] border-[#E1E3E8] w-[280px] lg:w-[420px] flex-shrink-0"
          >
            {/* Image */}
            <img 
              src={testimonial.image} 
              alt="performance" 
              className="w-8 h-6"
            />

            {/* Text Container */}
            <div className="flex flex-col mt-8 gap-4">
              <p className="font-urbanist font-semibold text-2xl lg:text-2xl leading-[120%] text-[#0D0D0D]">
                {testimonial.heading}
              </p>
              <p className="font-inter text-sm leading-5 text-[#535A61]">
                {testimonial.content}
              </p>
            </div>

            {/* Profile */}
            <div className="mt-10 lg:mt-16 flex gap-3 items-center">
              {/* Circle Avatar */}
              <div className="bg-[#E1E3E8] w-12 h-12 rounded-full flex-shrink-0" />
              
              {/* Profile Text Container */}
              <div className="flex flex-col gap-1">
                <p className="font-inter font-semibold text-base leading-6 text-[#0D0D0D]">
                  {testimonial.profileName}
                </p>
                <p className="font-inter text-xs leading-4 text-[#535A61]">
                  {testimonial.profileTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};