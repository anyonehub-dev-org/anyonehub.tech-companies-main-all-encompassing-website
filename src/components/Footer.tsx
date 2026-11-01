// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React from 'react';
import { ExternalLink, Terminal, Mail, MapPin } from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

interface FooterProps {
  onOpenRelationsModal?: (subject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRelationsModal }) => {
  return (
    <footer id="ecosystem-links" className="border-t border-white/[0.08] bg-[#05070B] text-slate-400 text-xs py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Top Tier: Colophon, Ecosystem Domains & Official Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Colophon */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
              <Terminal className="w-4 h-4 text-[#00F0FF]" />
              <span>ANYONE-HUB LLC</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs font-sans">
              An independent engineering company building bare-metal biomimetic cognition, mobile developer systems, low-latency audio workstations, and permanent open-source infrastructure.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Missouri, United States</span>
            </div>
          </div>

          {/* Column 2: 4 Verified Live Domains */}
          <div className="space-y-3 font-mono">
            <div className="text-xs uppercase text-white font-semibold">
              Live Ecosystem Domains
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={COMPANY_DOMAINS.corporateApex}
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="text-[#00F0FF]">anyonehub.tech</span>
                  <span className="text-[11px] text-slate-500">Corporate & Audio</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_DOMAINS.platformPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="text-emerald-400">anyonehub.us.kg</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_DOMAINS.biomimeticsDiv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="text-cyan-400">foundational-biomimetics.info</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_DOMAINS.freePublicUtility}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span className="text-amber-400">anyone-hub.me</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Verified Desks */}
          <div className="space-y-3 font-mono">
            <div className="text-xs uppercase text-white font-semibold">
              Official Communications
            </div>
            <ul className="space-y-2.5 text-[11px] text-slate-400">
              <li>
                <span className="text-slate-500 block text-[10px]">ENGINEERING & OPEN SOURCE:</span>
                <a
                  href="mailto:anyone-hub.dev@zohomail.com"
                  className="text-white hover:text-[#00F0FF] flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>anyone-hub.dev@zohomail.com</span>
                </a>
              </li>
              <li>
                <span className="text-slate-500 block text-[10px]">BIOMIMETICS & R&D DESK:</span>
                <a
                  href="mailto:any1-hub@foundational-biomimetics.info"
                  className="text-white hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>any1-hub@foundational-biomimetics.info</span>
                </a>
              </li>
              {onOpenRelationsModal && (
                <li className="pt-1">
                  <button
                    onClick={() => onOpenRelationsModal('Institutional Relations')}
                    className="text-xs font-mono text-[#00F0FF] hover:underline"
                  >
                    Open Institutional Inquiries Form →
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Legal Copyright (Cleaned — No Full Middle/Last Name, No Jr., No Fake All-Caps Badges) */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500">
          <div>
            © 2024–2026 Anyone-Hub LLC. All rights reserved. Founded and architected by Tom @ Anyone-Hub.
          </div>
          <div className="text-slate-600 text-[10px]">
            anyonehub.tech • Production Release Phase 1
          </div>
        </div>
      </div>
    </footer>
  );
};
