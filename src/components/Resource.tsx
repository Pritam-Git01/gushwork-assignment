import React from 'react';

interface ResourceItem {
  title: string;
  format: string;
}

export const ResourcesSection: React.FC = () => {
  const resources: ResourceItem[] = [
    {
      title: 'HDPE Pipe Installation Manual',
      format: 'PDF'
    },
    {
      title: 'Maintenance & Inspection Handbook',
      format: 'PDF'
    },
    {
      title: 'Engineering Specifications Sheet',
      format: 'PDF'
    }
  ];

  const handleDownload = (resourceTitle: string): void => {
    console.log(`Downloading: ${resourceTitle}`);
    // Add your download logic here
  };

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-b border-[#E1E3E8]">
      <div className="max-w-[1240px] mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-14 lg:mb-14">
          <h2 className="font-urbanist font-bold text-4xl lg:text-[44px] leading-[120%] text-[#0D0D0D] mb-5">
            Resources & Downloads
          </h2>
          <p className="font-inter text-base lg:text-lg leading-[160%] text-[#4D545C] max-w-[800px] mx-auto">
            Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.
          </p>
        </div>

        {/* Resources Container */}
        <div className="bg-white border border-[#CFD1D4] p-5 space-y-3 rounded-[10px] overflow-hidden">
          {resources.map((resource, index) => (
            <React.Fragment key={index + resource.title}>
              <div className="flex items-center justify-between gap-4">
                {/* Left Side - Resource Title */}
                <div className="flex-1">
                  <h3 className="font-inter font-medium text-base text-[#0D0D0D]">
                    {resource.title} ({resource.format})
                  </h3>
                </div>

                {/* Right Side - Download Button */}
                <button
                  onClick={() => handleDownload(resource.title)}
                  className="flex items-center gap-2 font-inter font-semibold text-base text-[#2B3990] hover:text-[#1f2a6b] transition-colors duration-200 flex-shrink-0"
                  type="button"
                  aria-label={`Download ${resource.title}`}
                >
                  <span>Download PDF</span>
                  <img 
                    src="/images/Download-icon.svg" 
                    alt="" 
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};