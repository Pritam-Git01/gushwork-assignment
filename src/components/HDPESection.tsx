import React, { useState } from 'react';

interface ManufacturingStep {
  id: number;
  title: string;
  heading: string;
  content: string;
  features: string[];
  image: string;
}

export const HDPESection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps: ManufacturingStep[] = [
    {
      id: 1,
      title: 'Raw Material',
      heading: 'High-Grade Raw Material Selection',
      content: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
      features: [
        'PE100 grade material',
        'Optimal molecular weight distribution'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 2,
      title: 'Extrusion',
      heading: 'Advanced Extrusion Process',
      content: 'State-of-the-art extrusion technology ensures consistent quality and optimal material properties.',
      features: [
        'Precision temperature control',
        'Uniform material flow'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 3,
      title: 'Cooling',
      heading: 'Controlled Cooling System',
      content: 'Advanced cooling technology maintains structural integrity and dimensional accuracy.',
      features: [
        'Water bath cooling',
        'Temperature monitoring'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 4,
      title: 'Sizing',
      heading: 'Precision Sizing Process',
      content: 'Vacuum sizing ensures exact diameter specifications and wall thickness.',
      features: [
        'Automated sizing control',
        'Quality verification'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 5,
      title: 'Quality Control',
      heading: 'Comprehensive Quality Testing',
      content: 'Multiple quality checkpoints ensure every pipe meets international standards.',
      features: [
        'Pressure testing',
        'Dimensional inspection'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 6,
      title: 'Marking',
      heading: 'Product Identification',
      content: 'Clear marking system for traceability and compliance verification.',
      features: [
        'Standard markings',
        'Batch tracking codes'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 7,
      title: 'Cutting',
      heading: 'Precision Cutting Process',
      content: 'Automated cutting ensures accurate lengths and clean edges.',
      features: [
        'Length precision',
        'Clean cut edges'
      ],
      image: '/images/high-grade.svg'
    },
    {
      id: 8,
      title: 'Packaging',
      heading: 'Protective Packaging',
      content: 'Careful packaging ensures safe transportation and storage.',
      features: [
        'Protective wrapping',
        'Secure bundling'
      ],
      image: '/images/high-grade.svg'
    }
  ];

  const handlePrevious = (): void => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = (): void => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handleStepClick = (index: number): void => {
    setCurrentStep(index);
  };

  const currentStepData = steps[currentStep];

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]">
      <div className="max-w-[1240px] mx-auto">
        {/* Text Container */}
        <div className="flex flex-col gap-5 items-center lg:max-w-[800px] lg:mx-auto">
          <h6 className="font-urbanist font-bold text-4xl lg:text-[44px] leading-[120%] text-center text-black">
            Advanced HDPE Pipe Manufacturing Process
          </h6>
          <p className="font-inter text-base lg:text-lg leading-[160%] text-center text-[#4D545C]">
            Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.
          </p>
        </div>

        {/* HDPE Card */}
        <div className="mt-14 bg-white border border-[#CFD1D4] rounded-[20px] p-4 lg:p-8">
          
          {/* Chip Container - Mobile shows single step, Desktop shows all */}
          <div className="hdpe-card-chip-container">
            {/* Mobile View - Single Step */}
            <div className="lg:hidden">
              <div className="bg-[#2B3990] rounded-[32px] px-4 py-2 font-inter font-medium text-sm leading-5 text-center text-white inline-block">
                Step {currentStep + 1}/{steps.length}: {currentStepData.title}
              </div>
            </div>

            {/* Desktop View - All Steps */}
            <div className="hidden lg:flex items-center mb-8 gap-0">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  {/* Step Chip */}
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`flex justify-center items-center px-4 py-2 rounded-[32px] font-inter font-medium text-sm leading-5 text-center whitespace-nowrap flex-shrink-0 transition-colors duration-200 ${
                      index === currentStep
                        ? 'bg-[#2B3990] text-white'
                        : 'bg-white border border-[#CFD1D4] text-[#0D0D0D] hover:bg-[#F7F8F9]'
                    }`}
                    type="button"
                  >
                    {step.title}
                  </button>

                  {/* Line between steps */}
                  {index < steps.length - 1 && (
                    <div className="h-px bg-[#CFD1D4] w-full" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Screen Container */}
          <div className="lg:flex lg:items-center lg:gap-14">
            {/* Left Side - Content */}
            <div className="flex-1">
              {/* Card Container */}
              <div className="flex flex-col gap-4 mt-4 lg:mt-0">
                <p className="font-urbanist font-semibold text-[28px] leading-[160%] text-[#0D0D0D]">
                  {currentStepData.heading}
                </p>
                <p className="font-inter text-sm lg:text-base leading-5 lg:leading-6 text-[#4D545C]">
                  {currentStepData.content}
                </p>
              </div>

              {/* List Container */}
              <ul className="mt-4 list-none flex flex-col gap-3">
                {currentStepData.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="font-inter font-medium text-sm leading-5 text-[#0D0D0D] flex items-center gap-1.5"
                  >
                    <img 
                      src="/images/CheckCircle.svg" 
                      alt="" 
                      className="w-5 h-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1">
              <img 
                src={currentStepData.image} 
                className="rounded-2xl w-full mt-6 lg:mt-0" 
                alt={currentStepData.title}
              />
            </div>
          </div>

          {/* Navigation Buttons - Mobile Only */}
          <div className="mt-8 flex justify-between items-center lg:hidden">
            <button
              onClick={handlePrevious}
              className="flex justify-center items-center px-4 py-2 border border-[#CFD1D4] rounded-[32px] font-inter font-medium text-sm leading-5 text-center text-[#0D0D0D] whitespace-nowrap bg-white hover:bg-[#F7F8F9] transition-colors duration-200"
              type="button"
            >
              ← Previous
            </button>

            <div className="h-px bg-[#CFD1D4] w-full" />

            <button
              onClick={handleNext}
              className="flex justify-center items-center px-4 py-2 border border-[#CFD1D4] rounded-[32px] font-inter font-medium text-sm leading-5 text-center text-[#0D0D0D] whitespace-nowrap bg-white hover:bg-[#F7F8F9] transition-colors duration-200"
              type="button"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};