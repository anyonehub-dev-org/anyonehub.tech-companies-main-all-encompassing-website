// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { 
  QrCode, 
  Contact2, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  Infinity, 
  Lock, 
  Download 
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const AnyoneHubMeSection: React.FC = () => {
  return (
    <section id="anyone-hub-me" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span>PILLAR 06</span>
              <span className="text-slate-600">/</span>
              <span>COMMUNITY PUBLIC UTILITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              anyone-hub.me: 100% Free Open-Source Digital Identity.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Foundational digital identity tools belong to the public. We built <code className="text-white">anyone-hub.me</code> as a permanent community utility: generating high-resolution custom QR codes and virtual business cards with zero paywalls, zero watermarks, and zero subscriptions forever.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={COMPANY_DOMAINS.freePublicUtility}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded flex items-center gap-2 transition-all shadow-lg"
            >
              <span>Launch anyone-hub.me Utility</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Dignified Institutional Spotlight Card */}
        <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-10 space-y-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#07090E] p-6 rounded border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Custom High-Res QR Engine
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Render mathematically exact, scalable vector QR codes with customizable corner radiuses, color gradients, and embedded logos without quality degradation or server round-trips.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#07090E] p-6 rounded border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <Contact2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                NFC & vCard 3.0 Profile Studio
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generate rich downloadable <code className="text-slate-300">.vcf</code> virtual business cards configured and payload-optimized for instant programming onto physical NTAG215 NFC wristbands and cards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#07090E] p-6 rounded border border-white/[0.06] space-y-3">
              <div className="w-9 h-9 rounded bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                100% Client-Side Privacy
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero telemetry, zero user tracking, and zero server-side database storage. All cryptographic matrix calculations and vCard compilations occur purely inside your browser memory.
              </p>
            </div>
          </div>

          {/* Institutional Commitment Strip */}
          <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                PERMANENT PUBLIC GUARANTEE: ZERO WATERMARKS • ZERO TRACKING • ZERO PAYWALLS
              </span>
            </div>

            <a
              href={COMPANY_DOMAINS.freePublicUtility}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline flex items-center gap-1.5 shrink-0"
            >
              <span>Visit anyone-hub.me</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
