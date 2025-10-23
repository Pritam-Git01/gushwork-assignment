// Technical Specifications Component
export const TechnicalSpecs: React.FC = () => {
  const specs = [
    { param: 'Pipe Diameter Range', spec: '20mm to 1600mm (3/4" to 63")' },
    { param: 'Pressure Ratings', spec: 'PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16' },
    { param: 'Standard Dimension Ratio', spec: 'SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11' },
    { param: 'Operating Temperature', spec: '-40°C to +80°C (-40°F to +176°F)' },
    { param: 'Service Life', spec: '50+ Years (at 20 degrees C, PN 10)' },
    { param: 'Material Density', spec: '0.95 - 0.96 g/cm³' },
    { param: 'Certification Standards', spec: 'IS 5984, ISO 4427, ASTM D3035' },
    { param: 'Joint Type', spec: 'Butt Fusion, Electrofusion, Mechanical' },
    { param: 'Coil Lengths', spec: 'Up to 500m (for smaller diameters)' },
    { param: 'Country of Origin', spec: '🇮🇳 India' },
  ];

  return (
    <section className="bg-[#111827] px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-5 lg:max-w-[800px]">
          <h2 className="font-urbanist font-bold text-4xl md:text-5xl leading-[120%] text-white">
            Technical Specifications at a Glance
          </h2>
          <p className="font-inter text-base md:text-lg leading-[160%] text-white/80">
            Comprehensive performance data demonstrating our commitment to quality and engineering excellence.
          </p>
        </div>

        <div className="mt-12 lg:mt-14 rounded-xl overflow-hidden border border-[#374151]">
          <table className="w-full border-collapse">
            <thead className="bg-[#374151]">
              <tr>
                <th className="px-6 py-3 text-left font-inter font-medium text-sm text-white">PARAMETER</th>
                <th className="px-6 py-3 text-left font-inter font-medium text-sm text-white">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 bg-[#1F2937] border-b border-[#374151] font-inter text-base text-white">
                    {row.param}
                  </td>
                  <td className="px-6 py-4 bg-[#1F2937] border-b border-[#374151] font-inter text-base text-white">
                    {row.spec}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="mt-12 lg:mt-14 h-[52px] flex justify-center items-center gap-2 rounded-xl border border-white bg-transparent w-full lg:max-w-[325px] lg:mx-auto font-inter font-medium text-base text-white">
          <img src="/images/Download.svg" alt="download" />
          Download Full Technical Datasheet
        </button>
      </div>
    </section>
  );
};