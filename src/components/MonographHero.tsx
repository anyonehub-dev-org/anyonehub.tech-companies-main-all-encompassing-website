// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { ArrowUpRight, BookOpen, FileText, ChevronRight } from 'lucide-react';
import { CANONICAL_METRICS, COMPANY_DOMAINS } from '../data/canonicalData';
import { MonographChapterKey } from './Navbar';

interface MonographHeroProps {
  activeChapter: MonographChapterKey;
  onSelectChapter: (chapter: MonographChapterKey) => void;
  onOpenWhitepaperModal: () => void;
}

export const MonographHero: React.FC<MonographHeroProps> = ({
  activeChapter,
  onSelectChapter,
  onOpenWhitepaperModal,
}) => {
  const chapters: Array<{
    id: MonographChapterKey;
    title: string;
    section: string;
    subtitle: string;
    tag: string;
  }> = [
    {
      id: 'manifesto',
      title: 'Chapter I. First-Principles Engineering (Manifesto)',
      section: '§ 1.0',
      subtitle: 'Rejection of datacenter bloat & return to sovereign, local-first computing.',
      tag: 'MANIFESTO',
    },
    {
      id: 'buddy',
      title: 'Chapter II. Foundational Biomimetics — Buddy',
      section: '§ 2.0',
      subtitle: 'Bare-metal C++20/23 synthetic mind (360 HCP parcels, 40Hz, 20W).',
      tag: 'FLAGSHIP R&D',
    },
    {
      id: 'anyone-hub',
      title: 'Chapter III. Unthrottled Mobile Systems — AnyOne-Hub',
      section: '§ 3.0',
      subtitle: 'Pure Kotlin & Compose, native C++ Python bridge, forked Jedi term.',
      tag: 'MOBILE & WEARABLE',
    },
    {
      id: 'phaseform',
      title: 'Chapter IV. Sovereign Audio Engineering — PhaseForm',
      section: '§ 4.0',
      subtitle: 'Direct3D 11 GPU DAW & C++23 AAudio controller with 2.4 ms latency.',
      tag: 'C++23 AUDIO DSP',
    },
    {
      id: 'open-source',
      title: 'Chapter V. Industrial Compiler Tooling & Open Source',
      section: '§ 5.0',
      subtitle: 'ABL compilation language, Maven Central Gradle plugin, anyone-hub.me.',
      tag: 'OPEN SOURCE',
    },
    {
      id: 'inquiries',
      title: 'Chapter VI. Institutional Inquiries & Lab Relations',
      section: '§ 6.0',
      subtitle: 'Direct founder dispatch, robotics lab relations, and capital desk.',
      tag: 'COMMUNICATIONS',
    },
  ];

  return (
    <section className="pt-12 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Monograph Document Header */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-widest">
            <span>ANYONE-HUB LLC</span>
            <span className="text-slate-600">/</span>
            <span className="text-[#00F0FF]">RESEARCH MONOGRAPH VOL. I</span>
            <span className="text-slate-600">/</span>
            <span>2024–2026 ARCHITECTURAL LEDGER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.18] text-balance font-sans">
            First-Principles Engineering, Biomimetic Cognition, and Sovereign Developer Systems.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-sans pt-1">
            An institutional treatise on bare-metal C++20/23 biological parity (<strong className="text-white">Buddy</strong>), pure Kotlin and Jetpack Compose mobile developer toolchains (<strong className="text-white">AnyOne-Hub</strong>), Direct3D 11 GPU-accelerated audio engineering (<strong className="text-white">PhaseForm</strong>), and permanent zero-paywall software infrastructure.
          </p>

          {/* Monograph Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block text-[10px]">FOUNDER & ARCHITECT</span>
              <span className="text-slate-200">Thomas Alan Slinkard Jr</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">LEGAL HEADQUARTERS</span>
              <span className="text-slate-200">Missouri, United States</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">SYNTHETIC ARCHITECTURE</span>
              <span className="text-slate-200">360 Bilateral HCP Parcels</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">POWER ENVELOPE</span>
              <span className="text-[#00F0FF] font-semibold">{CANONICAL_METRICS.powerEnvelope} Biological Parity</span>
            </div>
          </div>
        </div>

        {/* Modular Chapter Selector (Strict Structural Separation, Zero Monolithic Lump) */}
        <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>DIVISIONAL CHAPTER SELECTION // MODULAR STUDY</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              SELECT CHAPTER TO READ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {chapters.map((ch) => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    onSelectChapter(ch.id);
                    const el = document.getElementById('chapter-content-anchor');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-4 rounded border text-left transition-all space-y-1.5 ${
                    isActive
                      ? 'bg-white/[0.08] border-white/30 shadow-md text-white'
                      : 'bg-[#07090E] border-white/[0.06] text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className={isActive ? 'text-[#00F0FF] font-semibold' : 'text-slate-500'}>
                      {ch.section}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-slate-400">
                      {ch.tag}
                    </span>
                  </div>
                  <div className={`font-semibold font-sans text-sm ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {ch.title}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-normal font-sans">
                    {ch.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
            <button
              onClick={onOpenWhitepaperModal}
              className="text-xs font-mono text-[#00F0FF] hover:underline flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Executive Technical Whitepaper (PDF)</span>
            </button>

            <a
              href={COMPANY_DOMAINS.platformPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1.5"
            >
              <span>Launch Platform Application Portal (anyonehub.us.kg)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
