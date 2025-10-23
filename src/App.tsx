import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HDPESection } from "./components/HDPESection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ResourcesSection } from "./components/Resource";
import { SolutionsSection } from "./components/Solutions";
import { TechnicalSpecs } from "./components/TechnicalSpecs";
import { PerformanceSection } from "./components/Testimonial";
import { VersatileSection } from "./components/VersatileSection";

// Main App Component
const App: React.FC = () => {
  return (
    <div className="bg-[url('/images/noise.svg')]">
      <Header />
        <HeroSection />
        <TechnicalSpecs />
        <FeaturesSection />
        <FAQSection />
        <VersatileSection />
        <HDPESection />
        <PerformanceSection />
        <SolutionsSection />
        <ResourcesSection />
        <ContactSection />
        <Footer />
    </div>
  );
};

export default App;