import React from 'react';

interface SolutionCard {
  title: string;
  description: string;
  image: string;
}

export const SolutionsSection: React.FC = () => {
  const solutions: SolutionCard[] = [
    {
      title: 'HDPE Fittings & Accessories',
      description: 'Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.',
      image: '/images/engineer.svg'
    },
    {
      title: 'Professional Installation Services',
      description: 'Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.',
      image: '/images/engineer-2.svg'
    },
    {
      title: 'PE-RT Heating Pipes',
      description: 'Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.',
      image: '/images/engineer.svg'
    }
  ];

  const handleLearnMore = (title: string): void => {
    console.log(`Learn more about: ${title}`);
    // Add your navigation logic here
  };

  const handleTalkToExpert = (): void => {
    console.log('Talk to an expert clicked');
    // Add your contact logic here
  };

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-14 lg:mb-14">
          <h2 className="font-urbanist font-bold text-4xl lg:text-[44px] leading-[120%] text-[#0D0D0D] mb-5">
            Complete Piping Solutions Portfolio
          </h2>
          <p className="font-inter text-base lg:text-lg leading-[160%] text-[#4D545C] max-w-[800px] mx-auto">
            From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.
          </p>
        </div>

        {/* Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white border border-[#CFD1D4] rounded-[20px] p-6 flex flex-col"
            >
              {/* Card Content */}
              <div className="flex flex-col gap-4 mb-6">
                <h3 className="font-urbanist font-semibold text-[28px] leading-[120%] text-[#0D0D0D]">
                  {solution.title}
                </h3>
                <p className="font-inter text-sm leading-5 text-[#4D545C]">
                  {solution.description}
                </p>
              </div>

              <div className='mt-auto'>
                {/* Card Image */}
              <div className="mb-5">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Learn More Button */}
              <button
                onClick={() => handleLearnMore(solution.title)}
                className="w-full bg-[#2B39900D] border border-[#2B39903D] text-[#2B3990] font-inter font-medium text-sm py-2 rounded-xl hover:bg-[#2B39901A] transition-colors duration-200"
                type="button"
              >
                Learn More
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-14 lg:mt-14 bg-white border border-[#CFD1D4] rounded-[10px] p-5 lg:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h3 className="font-urbanist font-semibold text-[26px] leading-[120%] text-[#0D0D0D] mb-3">
              Didn't find what <span className="text-[#2B3990]">you're looking for?</span>
            </h3>
            <p className="font-inter text-base text-[#262A2E]">
              Talk to our experts for custom solutions and tailored guidance.
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <button
            onClick={handleTalkToExpert}
            className="bg-[#2B3990] text-white font-inter font-medium text-sm px-6 py-3 rounded-[10px] flex items-center gap-2 hover:bg-[#1f2a6b] transition-colors duration-200 flex-shrink-0"
            type="button"
          >
            <img
              src="/images/PhoneCall.svg"
              alt=""
              className="w-5 h-5"
              aria-hidden="true"
            />
            <span>Talk to an Expert</span>
          </button>
        </div>
      </div>
    </section>
  );
};