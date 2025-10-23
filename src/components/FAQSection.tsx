import { useState } from "react";

// FAQ Accordion Component
export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the purpose of a laser cutter for sheet metal?',
      answer: 'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'
    },
    {
      question: 'What is the purpose of a laser cutter for sheet metal?',
      answer: 'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'
    },
    {
      question: 'What is the purpose of a laser cutter for sheet metal?',
      answer: 'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.'
    },
  ];

  return (
    <section className="px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20 xl:py-[100px] border-t border-b border-[#E1E3E8]">
      <div className="max-w-[1240px] mx-auto">
        <h4 className="font-urbanist font-bold text-4xl md:text-[44px] leading-[120%] text-[#111827]">
          <span className="text-[#2B3990]">Frequently</span> Asked Questions
        </h4>

        <div className="mt-9 lg:mt-14 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-[#E1E3E8] bg-white">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <p className="font-inter font-medium text-base text-black">{faq.question}</p>
                <img 
                  src={openIndex === idx ? '/images/accordian-open.svg' : '/images/accordian-close.svg'} 
                  alt="toggle" 
                />
              </div>
              {openIndex === idx && (
                <p className="mt-4 font-inter text-base text-[#535A61]">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Request Catalogue */}
        <div className="mt-14 p-5 border border-[#CFD1D4] bg-[#F7F8F9] rounded-[10px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <p className="font-urbanist font-semibold text-[26px] leading-[120%] text-[#0D0D0D]">
              Want us to email the entire catalogue?
            </p>
            <p className="mt-3 font-inter text-base text-[#262A2E]">
              Enter your email and an expert will share the catalogue with you.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col gap-3 lg:w-[349px]">
            <input 
              type="text" 
              placeholder="Email Address"
              className="flex-1 rounded-lg bg-white px-3 py-2.5 border border-[#E1E3E8] font-inter text-sm placeholder:text-[#959BA4]"
            />
            <button className="bg-[#2B3990] rounded-[10px] px-4 py-2.5 font-inter font-medium text-sm text-white">
              Request Catalogue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};