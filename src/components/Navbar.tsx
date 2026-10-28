// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import { CANONICAL_METRICS, COMPANY_DOMAINS } from '../data/canonicalData';

export type MonographChapterKey = 
  | 'manifesto' 
  | 'buddy' 
  | 'anyone-hub' 
  | 'phaseform' 
  | 'open-source' 
  | 'inquiries';

interface NavbarProps {
  activeChapter: MonographChapterKey;
  onSelectChapter: (chapter: MonographChapterKey) => void;
  onOpenRelationsModal: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeChapter,
  onSelectChapter,
  onOpenRelationsModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chapters: Array<{ id: MonographChapterKey; label: string; number: string }> = [
    { id: 'manifesto', label: 'Manifesto', number: 'Ch. I' },
    { id: 'buddy', label: 'Buddy', number: 'Ch. II' },
    { id: 'anyone-hub', label: 'AnyOne-Hub', number: 'Ch. III' },
    { id: 'phaseform', label: 'PhaseForm', number: 'Ch. IV' },
    { id: 'open-source', label: 'Open Source', number: 'Ch. V' },
    { id: 'inquiries', label: 'Inquiries', number: 'Ch. VI' },
  ];

  const handleChapterClick = (id: MonographChapterKey) => {
    onSelectChapter(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Editorial Classification Ribbon */}
      <div className="bg-[#05070B] border-b border-white/[0.06] text-[11px] font-mono text-slate-400 py-1.5 px-4 overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-semibold tracking-wider">
              ANYONE-HUB LLC
            </span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400">INSTITUTIONAL RESEARCH MONOGRAPH</span>
            <span className="text-slate-700">/</span>
            <span className="text-[#00F0FF]">{CANONICAL_METRICS.powerEnvelope} SOVEREIGN COMPUTE</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span>[BUDDY: {CANONICAL_METRICS.bilateralParcels} HCP PARCELS • {CANONICAL_METRICS.linesOfCode} LOC]</span>
            <span className="text-slate-700">•</span>
            <span>[ANYONE-HUB: PURE KOTLIN/COMPOSE + FORKED JEDI TERM]</span>
            <span className="text-slate-700">•</span>
            <span>[PHASEFORM: C++23 48kHz]</span>
          </div>

          <div className="text-[10px] font-mono text-slate-500">
            <span>VOL. I (2024–2026)</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Header */}
      <header className="sticky top-0 z-40 bg-[#07090E]/95 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Masthead Title */}
          <button
            onClick={() => handleChapterClick('manifesto')}
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group text-left"
          >
            <BookOpen className="w-4 h-4 text-[#00F0FF]" />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white font-mono">
              ANYONE-HUB<span className="text-[#00F0FF]">.TECH</span>
            </span>
          </button>

          {/* Chapter Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
            {chapters.map((ch) => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => handleChapterClick(ch.id)}
                  className={`px-3 py-1.5 rounded transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-white/[0.1] text-white border border-white/[0.15] font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-slate-500 mr-1">{ch.number}</span>
                  <span>{ch.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Outbound Actions */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={COMPANY_DOMAINS.platformPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>anyonehub.us.kg</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>
            <button
              onClick={() => onOpenRelationsModal('Institutional Relations')}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-white hover:bg-slate-200 rounded transition-colors whitespace-nowrap shrink-0"
            >
              Inquiries
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white border border-white/[0.08] rounded"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-white/[0.08] bg-[#07090E] px-4 pt-2 pb-6 space-y-3">
            <div className="flex flex-col space-y-1 pt-1 font-mono text-xs">
              {chapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterClick(ch.id)}
                    className={`px-3 py-2 text-left rounded transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-white/[0.1] text-white font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{ch.label}</span>
                    <span className="text-slate-500 text-[11px]">{ch.number}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={COMPANY_DOMAINS.platformPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 text-xs font-mono text-slate-300 border border-white/[0.1] rounded flex items-center justify-center gap-1.5"
              >
                <span>Launch anyonehub.us.kg</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRelationsModal('Mobile Inquiry');
                }}
                className="w-full py-2 text-xs font-semibold text-slate-900 bg-white rounded text-center"
              >
                Institutional Inquiries
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
