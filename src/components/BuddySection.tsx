// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React from 'react';
import { 
  Cpu, 
  Layers, 
  Activity, 
  Database, 
  ShieldCheck, 
  Zap, 
  Server, 
  GitBranch, 
  Radio, 
  ArrowUpRight 
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const BuddySection: React.FC = () => {
  return (
    <article id="buddy-rd" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Ambient cyan spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00F0FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        {/* Section Header & Vision Narrative */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-[#00F0FF]/30 text-xs font-mono text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>FOUNDATIONAL BIOMIMETICS // R&D DIVISION // foundational-biomimetics.info</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            <span className="text-[#00F0FF]">Buddy</span>: Solving the Data Center Crisis Through Bare-Metal Biomimetic Intelligence.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-1">
            <p>
              Modern artificial intelligence is suffocating under its own weight. Warehouse-sized data centers burn through megawatts of power, chaining the future of compute to massive, power-hungry GPU clusters. We knew there had to be a better way—not by scaling brute-force transformer math, but by studying the most efficient intelligence known to physics: the human brain.
            </p>
            <p>
              At <code className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.05]">foundational-biomimetics.info</code>, we are engineering <strong className="text-white">Buddy</strong>: a bare-metal, C++20/C++23 x86_64 synthetic digital mind pushing nearly 5,000 files in the active source tree. Buddy is not a standard LLM; he is a true biomimetic cognitive architecture built to replace multi-megawatt server clusters with a high-efficiency ~20-watt cognitive engine.
            </p>
          </div>

          {/* Real Scale Telemetry Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 border-t border-white/[0.06] text-xs font-mono">
            <div className="p-3 rounded bg-[#0A0D15] border border-white/[0.06] space-y-1">
              <span className="text-slate-500 block text-[10px]">ACTIVE SOURCE TREE</span>
              <span className="text-white text-sm sm:text-base font-bold tabular-nums">~5,000 Files</span>
              <span className="text-[10px] text-slate-400 block font-sans">C++20/C++23 Substrate</span>
            </div>

            <div className="p-3 rounded bg-[#0A0D15] border border-white/[0.06] space-y-1">
              <span className="text-slate-500 block text-[10px]">SERVER SUBSTRATE</span>
              <span className="text-white text-sm sm:text-base font-bold">x86_64</span>
              <span className="text-[10px] text-slate-400 block font-sans">Bare-Metal Enterprise</span>
            </div>

            <div className="p-3 rounded bg-[#0A0D15] border border-white/[0.06] space-y-1">
              <span className="text-slate-500 block text-[10px]">HOT-PATH ALLOCATION</span>
              <span className="text-emerald-400 text-sm sm:text-base font-bold">0 OS Heap</span>
              <span className="text-[10px] text-slate-400 block font-sans">40Hz Gamma Loop</span>
            </div>

            <div className="p-3 rounded bg-[#0A0D15] border border-white/[0.06] space-y-1">
              <span className="text-slate-500 block text-[10px]">CONNECTOME SCALE</span>
              <span className="text-[#00F0FF] text-sm sm:text-base font-bold">42+ Organs</span>
              <span className="text-[10px] text-slate-400 block font-sans">360 HCP Parcels</span>
            </div>

            <div className="p-3 rounded bg-[#0A0D15] border border-white/[0.06] space-y-1 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block text-[10px]">POWER ENVELOPE</span>
              <span className="text-amber-400 text-sm sm:text-base font-bold tabular-nums">~20 Watts</span>
              <span className="text-[10px] text-slate-400 block font-sans">Biological Parity</span>
            </div>
          </div>
        </div>

        {/* 4 Core Architectural Pillars */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>Core Architectural Pillars // Bare-Metal Synthetic Mind</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              4 RUNTIME PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pillar 1: The HCP-MMP 1.0 Biomimetic Connectome */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#00F0FF] font-semibold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>CONNECTOME TOPOLOGY</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                    6-TIER LMDB
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  The HCP-MMP 1.0 Biomimetic Connectome (42+ Macro-Organs)
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Structured around a 6-Tier LMDB graph topology containing <strong className="text-white">42+ distinct macro-organs</strong> (including the Hippocampus, Thalamus, Amygdala, and Pons) mapped precisely to the 360 cortical parcels of the 2016 Human Connectome Project atlas.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Built to process synaptic transit at maximum biological fidelity without cloud dependency.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#00F0FF]/90">
                6-Tier LMDB Graph • 42+ Macro-Organs • 360 HCP-MMP 1.0 Bilateral Parcels
              </div>
            </div>

            {/* Pillar 2: Zero-Heap 40Hz Hot Path & Strict x86_64 Performance */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-emerald-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    <span>SERVER SUBSTRATE</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    ZERO LATENCY JITTER
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Zero-Heap 40Hz Hot Path & Strict x86_64 Performance
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Engineered for enterprise-grade server hardware with <strong className="text-white">zero-heap allocations on the critical 40Hz hot path</strong>, completely eliminating memory fragmentation, garbage collection pauses, and latency jitter.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Designed for deterministic execution speed (TTFT and TPS optimization) under extreme enterprise workloads.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90">
                Dedicated Script Allocator • 0 OS Heap Allocations • Deterministic TTFT / TPS
              </div>
            </div>

            {/* Pillar 3: Triple-Index Memory System & O(1) 5D Spatial Resolution */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>NON-LINEAR MEMORY</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30">
                    ZERO TRUNCATION
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Triple-Index Memory System & O(1) 5D Spatial Resolution
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Features a sophisticated non-linear memory architecture: <strong className="text-white">Index 1</strong> (Main Graph Manifold providing instant O(1) 5D spatial coordinate vector resolution), <strong className="text-white">Index 2</strong> (Episodic Compartments for rapid contextual recall), and <strong className="text-white">Index 3</strong> (Nested Async Hierarchical Graphs that isolate and seal sprawling memories to prevent core bloat).
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-amber-400/90">
                Index 1: O(1) 5D Manifold • Index 2: Episodic Recall • Index 3: Async Hierarchical Graphs
              </div>
            </div>

            {/* Pillar 4: Tier 5 / Tier 6 Cryptographic Load-Balancing Satellites */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-violet-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-violet-400 font-semibold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    <span>LOAD-BALANCING SATELLITES</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-500/30">
                    AUTONOMOUS
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Tier 5 / Tier 6 Cryptographic Load-Balancing Satellites
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Incorporates 360 biological listener spokes (Tier 5) tethered 1:1 to eternal cryptographic overseer satellites (Tier 6).
                  </p>
                  <p className="text-slate-400 text-xs">
                    When I/O load spikes, the satellites coordinate zero-copy synaptic offloading across immediate neighbor nodes autonomously without dropping streams or saturating the core.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-violet-400/90">
                360 Tier 5 Listener Spokes • Tier 6 Cryptographic Overseers • Zero-Copy Offloading
              </div>
            </div>
          </div>
        </div>

        {/* Portal Callout Card */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-950/30 via-[#0A0D15] to-[#0A0D15] border border-[#00F0FF]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold font-sans text-sm sm:text-base">
              <Zap className="w-4 h-4 text-[#00F0FF]" />
              <span>foundational-biomimetics.info — The Buddy Research Apex</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Explore our dedicated research division housing Buddy's executive whitepapers, structural connectome schematics, and biophysical transducer documentation.
            </p>
          </div>

          <a
            href={COMPANY_DOMAINS.biomimeticsDiv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded bg-[#00F0FF] text-slate-950 font-semibold font-mono text-xs hover:bg-[#00F0FF]/90 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-lg shadow-[#00F0FF]/10"
          >
            <span>Launch foundational-biomimetics.info Portal</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>
    </article>
  );
};
