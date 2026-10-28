// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Navbar, MonographChapterKey } from './components/Navbar';
import { MonographHero } from './components/MonographHero';
import { ChapterOneManifesto } from './components/ChapterOneManifesto';
import { ChapterTwoBuddy } from './components/ChapterTwoBuddy';
import { ChapterThreeAnyOneHub } from './components/ChapterThreeAnyOneHub';
import { ChapterFourPhaseForm } from './components/ChapterFourPhaseForm';
import { ChapterFiveOpenSource } from './components/ChapterFiveOpenSource';
import { ChapterSixInquiries } from './components/ChapterSixInquiries';
import { Footer } from './components/Footer';
import { RelationsModal } from './components/RelationsModal';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [relationsModalOpen, setRelationsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('General Institutional Inquiry');
  const [activeChapter, setActiveChapter] = useState<MonographChapterKey>('manifesto');
  const [viewMode, setViewMode] = useState<'focused' | 'unabridged'>('focused');

  const chapterOrder: Array<{ id: MonographChapterKey; title: string; number: string }> = [
    { id: 'manifesto', title: 'Chapter I: First-Principles Engineering (Manifesto)', number: 'Ch. I' },
    { id: 'buddy', title: 'Chapter II: Foundational Biomimetics — Buddy', number: 'Ch. II' },
    { id: 'anyone-hub', title: 'Chapter III: Unthrottled Mobile Systems — AnyOne-Hub', number: 'Ch. III' },
    { id: 'phaseform', title: 'Chapter IV: Sovereign Audio Engineering — PhaseForm', number: 'Ch. IV' },
    { id: 'open-source', title: 'Chapter V: Industrial Compiler Tooling & Open Source', number: 'Ch. V' },
    { id: 'inquiries', title: 'Chapter VI: Institutional Inquiries & Lab Relations', number: 'Ch. VI' },
  ];

  const currentIndex = chapterOrder.findIndex((ch) => ch.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapterOrder[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapterOrder.length - 1 ? chapterOrder[currentIndex + 1] : null;

  const handleSelectChapter = (chapter: MonographChapterKey) => {
    setActiveChapter(chapter);
    const anchor = document.getElementById('chapter-content-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      {/* Editorial Navigation Masthead */}
      <Navbar
        activeChapter={activeChapter}
        onSelectChapter={handleSelectChapter}
        onOpenRelationsModal={handleOpenRelationsModal}
      />

      {/* Main Research Monograph Body */}
      <main className="flex-1">
        {/* Monograph Document Header & Table of Contents */}
        <MonographHero
          activeChapter={activeChapter}
          onSelectChapter={handleSelectChapter}
          onOpenWhitepaperModal={handleOpenWhitepaperModal}
        />

        {/* Modular Chapter Content Anchor & Reading Controls */}
        <div id="chapter-content-anchor" className="scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[#00F0FF] font-semibold">{chapterOrder[currentIndex].number}</span>
              <span className="text-slate-600">/</span>
              <span className="text-white truncate max-w-xs sm:max-w-md">{chapterOrder[currentIndex].title}</span>
            </div>

            {/* Reading Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#0A0D15] border border-white/[0.08] rounded">
              <button
                onClick={() => setViewMode('focused')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'focused' ? 'bg-white/[0.1] text-white font-semibold' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Focused Chapter
              </button>
              <button
                onClick={() => setViewMode('unabridged')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  viewMode === 'unabridged' ? 'bg-white/[0.1] text-white font-semibold' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Unabridged
              </button>
            </div>
          </div>

          {/* FOCUSED DIVISION VIEW (Strict Structural Separation) */}
          {viewMode === 'focused' && (
            <div>
              {activeChapter === 'manifesto' && <ChapterOneManifesto />}
              {activeChapter === 'buddy' && (
                <ChapterTwoBuddy
                  onOpenWhitepaperModal={handleOpenWhitepaperModal}
                  onOpenDemoModal={handleOpenDemoModal}
                />
              )}
              {activeChapter === 'anyone-hub' && <ChapterThreeAnyOneHub />}
              {activeChapter === 'phaseform' && <ChapterFourPhaseForm />}
              {activeChapter === 'open-source' && <ChapterFiveOpenSource />}
              {activeChapter === 'inquiries' && <ChapterSixInquiries />}

              {/* Divisional Pagination Controls */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 border-b border-white/[0.08] flex items-center justify-between gap-4 text-xs font-mono">
                {prevChapter ? (
                  <button
                    onClick={() => handleSelectChapter(prevChapter.id)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group p-2 rounded hover:bg-white/[0.03]"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 block">PREVIOUS DIVISION</span>
                      <span className="text-slate-300 font-semibold">{prevChapter.number}</span>
                    </div>
                  </button>
                ) : (
                  <div />
                )}

                {nextChapter ? (
                  <button
                    onClick={() => handleSelectChapter(nextChapter.id)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group p-2 rounded hover:bg-white/[0.03] text-right"
                  >
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">NEXT DIVISION</span>
                      <span className="text-slate-300 font-semibold">{nextChapter.number}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          )}

          {/* UNABRIDGED FULL SCROLL VIEW */}
          {viewMode === 'unabridged' && (
            <div>
              <ChapterOneManifesto />
              <ChapterTwoBuddy
                onOpenWhitepaperModal={handleOpenWhitepaperModal}
                onOpenDemoModal={handleOpenDemoModal}
              />
              <ChapterThreeAnyOneHub />
              <ChapterFourPhaseForm />
              <ChapterFiveOpenSource />
              <ChapterSixInquiries />
            </div>
          )}
        </div>
      </main>

      {/* Monograph Colophon & Legal Footer */}
      <Footer onOpenRelationsModal={handleOpenRelationsModal} />

      {/* Executive Inquiry & Whitepaper Request Dialog */}
      <RelationsModal
        isOpen={relationsModalOpen}
        onClose={() => setRelationsModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}
