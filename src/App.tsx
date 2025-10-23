import React, { Suspense, lazy } from 'react';
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";

// Lazy load components that are below the fold
const TechnicalSpecs = lazy(() => import("./components/TechnicalSpecs").then(module => ({ default: module.TechnicalSpecs })));
const FeaturesSection = lazy(() => import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const FAQSection = lazy(() => import("./components/FAQSection").then(module => ({ default: module.FAQSection })));
const VersatileSection = lazy(() => import("./components/VersatileSection").then(module => ({ default: module.VersatileSection })));
const HDPESection = lazy(() => import("./components/HDPESection").then(module => ({ default: module.HDPESection })));
const PerformanceSection = lazy(() => import("./components/Testimonial").then(module => ({ default: module.PerformanceSection })));
const SolutionsSection = lazy(() => import("./components/Solutions").then(module => ({ default: module.SolutionsSection })));
const ResourcesSection = lazy(() => import("./components/Resource").then(module => ({ default: module.ResourcesSection })));
const ContactSection = lazy(() => import("./components/ContactSection").then(module => ({ default: module.ContactSection })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));

// Loading skeleton component
const SectionSkeleton: React.FC<{ height?: string }> = ({ height = "400px" }) => (
  <div 
    className="w-full animate-pulse bg-gray-100 border-b border-gray-200"
    style={{ minHeight: height }}
  >
    <div className="max-w-[1240px] mx-auto px-4 lg:px-[60px] xl:px-[100px] py-12 lg:py-20">
      <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

// Main App Component
const App: React.FC = () => {
  return (
    <div className="bg-[url('/images/noise.svg')]">
      {/* Critical components - loaded immediately */}
      <Header />
      <HeroSection />
      
      {/* Below-the-fold components - lazy loaded */}
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <TechnicalSpecs />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="600px" />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <FAQSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="450px" />}>
        <VersatileSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="550px" />}>
        <HDPESection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <PerformanceSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="600px" />}>
        <SolutionsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="400px" />}>
        <ResourcesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="500px" />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="400px" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;