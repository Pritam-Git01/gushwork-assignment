// Features Section
export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: 'Bag.svg',
      title: 'Superior Chemical Resistance',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      icon: 'Needle.svg',
      title: 'Exceptional Flexibility & Durability',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      icon: 'Package.svg',
      title: 'Leak-Proof Fusion Welding',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      icon: 'GearFine.svg',
      title: 'Cost-Effective Long-Term Solution',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      icon: 'GearFine.svg',
      title: 'Environmentally Sustainable',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
    {
      icon: 'GearFine.svg',
      title: 'Certified Quality Assurance',
      desc: 'HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won\'t corrode, rust, or scale, ensuring pure water quality and extended service life in aggressive environments.'
    },
  ];

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-5">
          <h3 className="font-urbanist font-bold text-4xl md:text-[44px] leading-[120%] text-[#0D0D0D]">
            Built to Last. Engineered to Perform.
          </h3>
          <p className="font-inter text-base md:text-lg leading-[160%] text-[#6A7077]">
            From bulk bags to technical threads, Meera delivers precision solutions for every stage of your packaging process.
          </p>
        </div>

        <div className="mt-8 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-[#CFD1D4] bg-white">
              <img src={`/images/${feature.icon}`} alt={feature.title} />
              <p className="font-urbanist font-semibold text-xl leading-[120%] text-[#0D0D0D] mt-4">
                {feature.title}
              </p>
              <p className="font-inter text-sm leading-5 text-[#535A61] mt-4">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-8 lg:mt-14 w-[174px] h-[52px] flex justify-center items-center font-inter font-medium text-base text-white bg-[#2B3990] rounded-xl mx-auto">
          Request a Quote
        </button>
      </div>
    </section>
  );
};