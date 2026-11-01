// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BuddySection } from './components/BuddySection';
import { DevIoSection } from './components/DevIoSection';
import { ChapterFourPhaseForm } from './components/ChapterFourPhaseForm';
import { ChapterFiveOpenSource } from './components/ChapterFiveOpenSource';
import { ChapterSixInquiries } from './components/ChapterSixInquiries';
import { Footer } from './components/Footer';
import { RelationsModal } from './components/RelationsModal';

export default function App() {
  const [relationsModalOpen, setRelationsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Institutional Inquiry');

  const handleOpenRelationsModal = (subject: string = 'General Institutional Inquiry') => {
    setModalSubject(subject);
    setRelationsModalOpen(true);
  };

  const handleOpenWhitepaperModal = () => {
    setModalSubject('Executive Whitepaper Request - Buddy Biomimetic Mind');
    setRelationsModalOpen(true);
  };

  const handleOpenDemoModal = () => {
    setModalSubject('Robotics Laboratory Demonstration - Buddy Sensorium');
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

        {/* Section 4: Phaseform Audio Workstation (#phaseform) - Unaltered showcase ready for Phase 4 */}
        <section id="phaseform" className="scroll-mt-16">
          <ChapterFourPhaseForm />
        </section>

        {/* Section 5: Compiler Tooling & Open Source (#open-source) - Unaltered showcase ready for Phase 5 */}
        <section id="open-source" className="scroll-mt-16">
          <ChapterFiveOpenSource />
        </section>

        {/* Section 6: Inquiries & Lab Relations */}
        <section id="inquiries" className="scroll-mt-16">
          <ChapterSixInquiries />
        </section>
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
