import { useRef } from "react";

// Versatile Applications Carousel
export const VersatileSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const items = [
    { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.' },
    { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.' },
    { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.' },
    { title: 'Fishnet Manufacturing', desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.' },
  ];

  return (
    <section className="py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center px-4 lg:px-[60px] xl:px-[100px]">
          <div className="flex flex-col gap-5 lg:flex-1 lg:pr-[40px]">
            <h5 className="font-urbanist font-bold text-4xl md:text-[44px] leading-[120%] text-[#0D0D0D]">
              Versatile Applications Across Industries
            </h5>
            <p className="font-inter text-base md:text-lg leading-[160%] text-[#4D545C]">
              From technical textiles to packaging materials, our precision-engineered machinery delivers superior performance across diverse applications.
            </p>
          </div>

          <div className="flex gap-3 lg:gap-4 mt-5 lg:mt-0 px-4 lg:px-0">
            <img 
              src="/images/left-nav.svg" 
              className="cursor-pointer w-[68px] h-[68px]" 
              alt="left"
              onClick={() => scroll('left')}
            />
            <img 
              src="/images/right-nav.svg" 
              className="cursor-pointer w-[68px] h-[68px]" 
              alt="right"
              onClick={() => scroll('right')}
            />
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="mt-12 flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-[60px] xl:px-[100px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="min-w-[320px] lg:min-w-[420px] h-[320px] lg:h-[420px] rounded-[24px] bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.579217) 40.23%, rgba(0, 0, 0, 0.8) 75.96%), url(/images/worker-mobile.svg)`
              }}
            >
              <div className="absolute bottom-6 lg:bottom-8 left-[18px] lg:left-6 w-[283px]">
                <p className="font-urbanist font-medium text-[20px] lg:text-[26px] leading-[120%] text-white">
                  {item.title}
                </p>
                <p className="mt-2 lg:mt-2.5 font-inter text-xs lg:text-base leading-[18px] lg:leading-6 text-white/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
