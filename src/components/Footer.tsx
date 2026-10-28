// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { Mail, MapPin, ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';
import { CONTACT_CHANNELS, COMPANY_DOMAINS } from '../data/canonicalData';

interface FooterProps {
  onOpenRelationsModal: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRelationsModal }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05070B] text-slate-400 text-xs py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 text-left">
        {/* Top Tier: Monograph Colophon & Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Colophon */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
              <BookOpen className="w-4 h-4 text-[#00F0FF]" />
              <span>ANYONE-HUB LLC</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs font-sans">
              An institutional research monograph detailing bare-metal biomimetic cognition, pure Kotlin and Jetpack Compose mobile engineering, and permanent open-source infrastructure.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              HEADQUARTERS: <span className="text-slate-300">{CONTACT_CHANNELS.headquarters}</span>
            </div>
          </div>

          {/* Canonical Web Endpoints */}
          <div className="space-y-3 font-mono">
            <div className="text-xs uppercase text-white font-semibold">
              DOMAINS & APEX PORTALS
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href={COMPANY_DOMAINS.corporateApex} className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>anyonehub.tech</span>
                  <span className="text-slate-600">(Corporate Apex)</span>
                </a>
              </li>
              <li>
                <a href={COMPANY_DOMAINS.platformPortal} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
                  <span>anyonehub.us.kg</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={COMPANY_DOMAINS.biomimeticsDiv} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                  <span>foundational-biomimetics.info</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={COMPANY_DOMAINS.freePublicUtility} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:underline flex items-center gap-1">
                  <span>anyone-hub.me</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Official Communications */}
          <div className="space-y-3 font-mono">
            <div className="text-xs uppercase text-white font-semibold">
              OFFICIAL CONTACT DESKS
            </div>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>
                <span className="text-slate-500 block text-[10px]">FOUNDER DIRECT:</span>
                <a href={`mailto:${CONTACT_CHANNELS.founderDirect}`} className="text-white hover:text-[#00F0FF]">
                  {CONTACT_CHANNELS.founderDirect}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">GENERAL & INFO:</span>
                <a href={`mailto:${CONTACT_CHANNELS.general}`} className="text-slate-300 hover:text-[#00F0FF]">
                  {CONTACT_CHANNELS.general}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">DIRECT ENGINEERING:</span>
                <a href={`mailto:${CONTACT_CHANNELS.engineering}`} className="text-slate-300 hover:text-emerald-400">
                  {CONTACT_CHANNELS.engineering}
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">ROBOTICS & BIOMIMETICS:</span>
                <a href={`mailto:${CONTACT_CHANNELS.biomimeticsLab}`} className="text-slate-300 hover:text-[#00F0FF]">
                  {CONTACT_CHANNELS.biomimeticsLab}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Legal Copyright & Invariants */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © 2024–2026 Anyone-Hub LLC. All rights reserved. Founded & architected by Thomas Alan Slinkard Jr.
          </div>

          <div className="flex items-center gap-3 text-slate-500">
            <span>SOVEREIGN MONOGRAPH</span>
            <span>•</span>
            <span>ZERO PAYWALL ETHICS</span>
            <span>•</span>
            <span className="text-emerald-400">VERIFIED ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
