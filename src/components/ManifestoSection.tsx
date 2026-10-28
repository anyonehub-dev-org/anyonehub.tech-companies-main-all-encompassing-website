// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { Cpu, Smartphone, Gift, ExternalLink, ShieldAlert, CheckCircle, Terminal } from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider flex items-center gap-2">
            <span>PILLAR 01</span>
            <span className="text-slate-600">/</span>
            <span>FOUNDATIONAL THESIS & MANIFESTO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            The Industry Took the Wrong Path. We Are Rebuilding It on First Principles.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Founded and architected by Thomas Alan Slinkard Jr, Anyone-Hub LLC operates with an uncompromising engineering philosophy: production-ready code on the first pass, local-first execution, bare-metal C++20/23 and Rust/Kotlin performance, and biological parity over brute-force compute farms.
          </p>
        </div>

        {/* The Problem vs The Anyone-Hub Answer Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Industry Failure */}
          <div className="bg-[#0B0E14] border border-rose-500/20 rounded p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-rose-400 font-mono text-xs uppercase">
              <ShieldAlert className="w-4 h-4" />
              <span>THE CRISIS: DATACENTER BLOAT & RENT-SEEKING SAAS</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              The Artificial Intelligence & Developer Stack Is Broken
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">✕</span>
                <span><strong className="text-slate-300">Gigawatt Power Depletion:</strong> Frontier LLMs burn megawatts in centralized clusters, requiring entire power substations to process static transformer matrices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">✕</span>
                <span><strong className="text-slate-300">Cloud-Tethered Vulnerability:</strong> Modern applications rely on fragile APIs that introduce multi-second round-trip latency, surveillance logging, and abrupt downtime.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">✕</span>
                <span><strong className="text-slate-300">Throttled Edge Devices:</strong> High-end mobile devices and smartwatches with multi-core processors are relegated to serving as dumb web-wrapper clients.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">✕</span>
                <span><strong className="text-slate-300">Predatory Micro-Paywalls:</strong> Essential community utilities like QR generators and vCard platforms charge recurring $20/month subscriptions for basic mathematical encodings.</span>
              </li>
            </ul>
          </div>

          {/* The Anyone-Hub Answer */}
          <div className="bg-[#0D121C] border border-[#00F0FF]/30 rounded p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-[#00F0FF] font-mono text-xs uppercase">
              <CheckCircle className="w-4 h-4" />
              <span>THE THESIS: SOVEREIGN, BARE-METAL & LOCAL-FIRST</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              The Anyone-Hub Architecture: Biological Parity & Determinism
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1">✓</span>
                <span><strong className="text-white">20-Watt Biological Parity:</strong> Buddy models the 360 parcels of the human connectome and 29 subcortical organs on bare metal, running at 40 Hz with zero OS heap churn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1">✓</span>
                <span><strong className="text-white">Unthrottled Pocket Workstations:</strong> AnyOne-Hub delivers a full Bionic Linux terminal daemon, AVF pKVM hypervisor, and native Rust backend directly onto Android and Wear OS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1">✓</span>
                <span><strong className="text-white">Deterministic Audio DSP:</strong> PhaseForm-Studio and PhaseForm-Midi deliver Direct3D 11 GPU rendering and C++23 AAudio 48kHz audio processing without cloud tethers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00F0FF] mt-1">✓</span>
                <span><strong className="text-white">Permanent Zero-Paywall Utilities:</strong> Public utilities like <code className="text-[#00F0FF]">anyone-hub.me</code> and Gradle diagnostic plugins remain 100% free, private, and open-source forever.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Sovereign Beliefs Cards */}
        <div className="space-y-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            THREE INVARIANT ENGINEERING COMMITMENTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Belief 1 */}
            <div className="bg-[#0D111A] border border-white/[0.08] p-6 rounded relative hover:border-[#00F0FF]/40 transition-colors space-y-3">
              <div className="w-9 h-9 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                01. Biological Parity Over Brute-Force Megawatts
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                The human brain operates on approximately 20 watts of biochemical energy while solving real-time multimodal perception, continuous memory, and motor robotics. Static transformer tokenization is a dead end for embodied physical robotics. True general intelligence requires laminar microcircuits, continuous non-linear graph memory, and temporal synchrony.
              </p>
            </div>

            {/* Belief 2 */}
            <div className="bg-[#0D111A] border border-white/[0.08] p-6 rounded relative hover:border-emerald-500/40 transition-colors space-y-3">
              <div className="w-9 h-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                02. Unthrottled Mobile & Wearable Computing
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Modern ARM silicon in mobile devices and smartwatches contains multi-core neural engines and hardware hypervisors. We reject the paradigm where phones are merely client displays for cloud servers. AnyOne-Hub puts full compilation toolchains, Linux hypervisors, and wrist-mounted build commander monitors directly into developers’ hands.
              </p>
            </div>

            {/* Belief 3 */}
            <div className="bg-[#0D111A] border border-white/[0.08] p-6 rounded relative hover:border-violet-500/40 transition-colors space-y-3">
              <div className="w-9 h-9 rounded bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                03. Zero Predatory Paywalls & Open Infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Foundational building blocks belong to the global developer community. Our build orchestration language (ABL), Maven Central diagnostic plugins, and identity utilities (<code className="text-violet-300">anyone-hub.me</code>) are released with zero monetization traps, zero watermarks, and zero telemetry tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Global Domain Architecture Routing Bar */}
        <div className="bg-[#090C12] border border-white/[0.08] p-6 rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400">ANYONE-HUB LLC TOPOLOGICAL DOMAIN NETWORK</div>
            <div className="text-sm font-semibold text-white">Verified Production Infrastructure Endpoints</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href={COMPANY_DOMAINS.corporateApex}
              className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded text-[#00F0FF] transition-colors flex items-center gap-1.5"
            >
              <span>anyonehub.tech</span>
              <span className="text-slate-500">(Apex)</span>
            </a>
            <a
              href={COMPANY_DOMAINS.platformPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <span>anyonehub.us.kg</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={COMPANY_DOMAINS.biomimeticsDiv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <span>foundational-biomimetics.info</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={COMPANY_DOMAINS.freePublicUtility}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded text-slate-200 transition-colors flex items-center gap-1.5"
            >
              <span>anyone-hub.me</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
