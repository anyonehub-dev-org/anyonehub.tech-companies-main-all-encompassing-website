// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DevIoSection } from './components/DevIoSection';
import { BuddySection } from './components/BuddySection';
import { PhaseformSection } from './components/PhaseformSection';
import { OpenSourceSection } from './components/OpenSourceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RelationsModal } from './components/RelationsModal';

export default function App() {
  const [relationsModalOpen, setRelationsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Corporate Inquiry');

  const handleOpenRelationsModal = (subject: string = 'General Corporate Inquiry') => {
    setModalSubject(subject);
    setRelationsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#00F0FF]/20 selection:text-[#00F0FF]">
      {/* Sticky Section Navigation Bar */}
      <Navbar onOpenRelationsModal={handleOpenRelationsModal} />

      {/* Main Single-Page Sequential Sections */}
      <main className="flex-1">
        {/* Section 1: Hero & 3-Year Origin Chronicle (#our-story) */}
        <Hero />

        {/* Section 2: Dev.io & Mobile Platform (#dev-io) */}
        <section id="dev-io" className="scroll-mt-16">
          <DevIoSection />
        </section>

        {/* Section 3: Buddy Biomimetic R&D (#buddy-rd) */}
        <section id="buddy-rd" className="scroll-mt-16">
          <BuddySection />
        </section>

        {/* Section 4: Phaseform Audio Workstation (#phaseform) */}
        <section id="phaseform" className="scroll-mt-16">
          <PhaseformSection />
        </section>

        {/* Section 5: Compiler Tooling & Open Source (#open-source) */}
        <section id="open-source" className="scroll-mt-16">
          <OpenSourceSection
            onOpenMaintainerModal={() => handleOpenRelationsModal('Open-Source Maintainer Application')}
          />
        </section>

        {/* Contact Us & Maintainer Dispatch Box (#contact) */}
        <ContactSection />
      </main>

      {/* Cleaned Preserved Colophon & Legal Footer (#ecosystem-links) */}
      <Footer onOpenRelationsModal={handleOpenRelationsModal} />

      {/* Relations Modal */}
      <RelationsModal
        isOpen={relationsModalOpen}
        onClose={() => setRelationsModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}
