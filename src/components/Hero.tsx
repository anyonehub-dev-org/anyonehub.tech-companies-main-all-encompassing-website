// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React from 'react';
import { ArrowUpRight, Globe, Wrench, Code2, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const Hero: React.FC = () => {
  return (
    <section id="our-story" className="pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00F0FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        {/* Header Kicker & Company Motto */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>Bringing back the true meaning of open source.</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-sans">
            Built from Iron. Forged in Code.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed pt-1">
            An unvarnished chronicle of physical trades, catastrophic injury, self-taught systems architecture, and the founding of an uncompromised open-source engineering ecosystem.
          </p>
        </div>

        {/* The 4-Part Founder & Company Narrative */}
        <div className="space-y-8">
          {/* Part 1 */}
          <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2.5 text-white font-semibold text-base sm:text-lg font-sans">
              <div className="p-1.5 rounded bg-white/[0.05] text-[#00F0FF]">
                <Wrench className="w-4 h-4" />
              </div>
              <h3>Before the Code — Mechanics, Construction & The Injury</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              For years, my life was rooted in physical trades—heavy automotive mechanics (holding 8 GM Master Certifications as a World Class Certified Mechanic), fabrication, and construction. In that world, you learn fast that tolerances aren't negotiable; if a gear or seal is off by a fraction of a millimeter, the whole machine fails under load. Then, three years ago, a severe work injury shattered my elbow—and with my other arm taking the strain alongside it, the physical trade I had spent my life mastering was suddenly off the table.
            </p>
          </div>

          {/* Part 2 */}
          <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2.5 text-white font-semibold text-base sm:text-lg font-sans">
              <div className="p-1.5 rounded bg-white/[0.05] text-amber-400">
                <Code2 className="w-4 h-4" />
              </div>
              <h3>The Pivot — Starting from Zero Three Years Ago</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Most people in that position are forced to walk away from building things altogether. I refused to fold. If I couldn't build and diagnose complex machines with wrenches anymore, I was going to build them in software. Three years ago, I enrolled myself in school, taught myself modern software and systems architecture from scratch, and started building <strong className="text-white">Anyone-Hub</strong> from the ground up.
            </p>
          </div>

          {/* Part 3 */}
          <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2.5 text-white font-semibold text-base sm:text-lg font-sans">
              <div className="p-1.5 rounded bg-white/[0.05] text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3>Why We Exist — "Bringing Back the True Meaning of Open Source"</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              When I entered the software industry, I realized modern developer tools were broken in the exact same way bad shop tools are: bloated, locked behind predatory subscriptions, dependent on massive cloud monopolies, and stripped of real ownership. I founded Anyone-Hub LLC with a single guiding motto: <strong className="text-[#00F0FF]">"Bringing back the true meaning of open source."</strong> No artificial paywalls, no corporate gatekeeping, and no half-baked simulations—just real, production-grade code shipped into the open.
            </p>
          </div>

          {/* Part 4 */}
          <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2.5 text-white font-semibold text-base sm:text-lg font-sans">
              <div className="p-1.5 rounded bg-white/[0.05] text-cyan-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3>Where We Started vs. Where We Are Today</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              What began three years ago as a single developer hub has grown into a multi-disciplinary engineering company recognized across the open-source ecosystem—from publishing custom Kotlin Multiplatform libraries (<code className="text-[#00F0FF] font-mono text-xs px-1 py-0.5 rounded bg-white/[0.05]">Reaktor KMP</code>) and automated Gradle Project Health HTML diagnostic plugins directly to Maven Central and the Gradle Plugin Portal, to launching our flagship mobile IDE ecosystem (<strong className="text-white">Dev.io</strong>) on the Google Play Store, engineering low-latency audio/MIDI workstations (<strong className="text-white">Phaseform Studio & MIDI</strong>), and architecting a 5,000-file bare-metal C++20 synthetic brain (<strong className="text-white">Buddy</strong>) to solve the global data center energy and compute dilemma for the generations coming after us.
            </p>
          </div>
        </div>

        {/* 4 Live Domain Hub Cards ("Where We Started & Where We Are Now") */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Where We Started & Where We Are Now // 4 Live Properties</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              LIVE ECOSYSTEM DIRECTORY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: anyonehub.tech */}
            <div className="p-5 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400 font-semibold">HQ & AUDIO LAB</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                    CORPORATE APEX
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white">anyonehub.tech</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  The central headquarters for Anyone-Hub LLC, our core mission, and the official home of Phaseform Studio & Phaseform MIDI.
                </p>
              </div>
              <a
                href={COMPANY_DOMAINS.corporateApex}
                className="text-xs font-mono text-[#00F0FF] hover:underline flex items-center gap-1 pt-1"
              >
                <span>Visit corporate headquarters</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: anyonehub.us.kg */}
            <div className="p-5 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-emerald-400/40 transition-colors flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold">DEV.IO LAUNCHPAD</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/30 text-emerald-400 border border-emerald-500/20">
                    WHERE IT STARTED
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white">anyonehub.us.kg</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  The original launchpad for the Anyone-Hub developer platform, now evolving into the Dev.io mobile development OS, Build Commander, and anyone-connect ecosystem.
                </p>
              </div>
              <a
                href={COMPANY_DOMAINS.platformPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
              >
                <span>Launch developer platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: foundational-biomimetics.info */}
            <div className="p-5 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-cyan-400/40 transition-colors flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-cyan-400 font-semibold">BUDDY DIVISION</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/30 text-cyan-400 border border-cyan-500/20">
                    COGNITIVE R&D
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white">foundational-biomimetics.info</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Our dedicated research division housing Buddy, our bare-metal x86_64 C++20 biomimetic cognitive architecture built to solve the data center compute crisis.
                </p>
              </div>
              <a
                href={COMPANY_DOMAINS.biomimeticsDiv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 pt-1"
              >
                <span>Explore biomimetic research</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4: anyone-hub.me */}
            <div className="p-5 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-400 font-semibold">FREE UTILITIES</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/30 text-amber-400 border border-amber-500/20">
                    100% FREE & ZERO-PAYWALL
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white">anyone-hub.me</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Our 100% free, zero-paywall virtual business card builder, NFC tooling, and anyone-QR gen custom QR platform.
                </p>
              </div>
              <a
                href={COMPANY_DOMAINS.freePublicUtility}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1 pt-1"
              >
                <span>Access free community tools</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
