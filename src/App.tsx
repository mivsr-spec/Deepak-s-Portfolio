import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseMe } from './components/WhyChooseMe';
import { FeaturedWork } from './components/FeaturedWork';
import { VideoModal } from './components/VideoModal';
import { Workflow } from './components/Workflow';
import { Numbers } from './components/Numbers';
import { PriceEstimatorModal } from './components/PriceEstimatorModal';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [contactService, setContactService] = useState<string>('');
  const [contactEstimateDetails, setContactEstimateDetails] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setContactService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectServiceWithEstimate = (serviceTitle: string, estimateDetails: string) => {
    setContactService(serviceTitle);
    setContactEstimateDetails(estimateDetails);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#121212] font-sans antialiased selection:bg-[#FF6B4A] selection:text-white">
      <main>
        {/* 1. Hero Section */}
        <Hero
          onViewProjects={() => scrollToSection('work')}
          onGetInTouch={() => scrollToSection('contact')}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why Choose Me Section */}
        <WhyChooseMe />

        {/* 5. Featured Work Section */}
        <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Workflow / Process Section */}
        <Workflow />

        {/* 7. Numbers Section */}
        <Numbers />

        {/* 8. CTA Section */}
        <CTA
          onStartProject={() => scrollToSection('contact')}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 9. Contact Section */}
        <Contact
          initialService={contactService}
          initialEstimateDetails={contactEstimateDetails}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Player Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectService={(service) => {
          setSelectedProject(null);
          handleSelectService(service);
        }}
      />

      {/* Instant Project Cost Estimator Modal */}
      <PriceEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectServiceWithEstimate={handleSelectServiceWithEstimate}
      />
    </div>
  );
}
