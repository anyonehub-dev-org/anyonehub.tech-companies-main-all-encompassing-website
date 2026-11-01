// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Users, 
  Radio, 
  Watch, 
  ArrowUpRight, 
  Smartphone,
  Layers
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const DevIoSection: React.FC = () => {
  return (
    <article id="dev-io" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Ambient emerald spotlight */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-emerald-500/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        {/* Section Header & Evolution Narrative */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FLAGSHIP MOBILE ECOSYSTEM // GOOGLE PLAY ROLLOUT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            From Anyone-Hub to <span className="text-emerald-400">Dev.io</span>: Built to Compile Without the Bloat.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-1">
            <p>
              When we started three years ago on <code className="text-emerald-300 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.05]">anyonehub.us.kg</code>, every other mobile development tool on the market was either a glorified text pad or tried to brute-force an entire virtualized Linux OS kernel onto a phone just to run a build. Both approaches fail the engineer: one can't compile real code, and the other burns through battery and RAM before you even write a line.
            </p>
            <p>
              As we evolved the original Anyone-Hub platform into <strong className="text-white">Dev.io</strong> for our Google Play Store launch, we took a mechanic's approach: strip out every ounce of unnecessary weight and engineer the exact runtime machinery required to compile, inject, and preview production software directly on Android hardware—no cloud dependency, and no bloated OS kernel required.
            </p>
          </div>
        </div>

        {/* 4 Core Engineering Pillars */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Core Runtime Machinery // Zero-Bloat Native Architecture</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              4 ENGINEERING PILLARS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Pillar 1: Custom ABL Annotated Compiler & DI Runtime System */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-emerald-500/30 hover:border-emerald-500/50 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>THE CENTERPIECE</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    ZERO-REFLECT DI
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Custom ABL Annotated Compiler & DI Runtime System
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Instead of relying on sluggish reflection or heavyweight third-party dependency injection frameworks that choke mobile builds, we architected our own <strong className="text-white">Custom ABL Annotated Compiler & DI Runtime System</strong> from the ground up.
                  </p>
                  <p className="text-slate-400 text-xs">
                    It processes annotations, resolves dependency graphs, and wires runtime execution paths deterministically during compilation—giving Dev.io lightning-fast build orchestration and zero-overhead runtime resolution directly on the device.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90">
                Kotlin 2.4.0 • Custom ABL DI Runtime • Compile-Time Graph Resolution
              </div>
            </div>

            {/* Pillar 2: The Flagship anyones-editor & Live Compose @Preview */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-cyan-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>FLAGSHIP EDITOR</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                    C++20 ACCELERATED
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  The Flagship anyones-editor & Live Compose @Preview Hot-Reload
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    One unified, purpose-built flagship code editor (<strong className="text-white">anyones-editor</strong>) backed by a high-speed native C++20 <code className="text-[#00F0FF] font-mono text-xs px-1 py-0.5 rounded bg-white/[0.05]">SumTree</code> piece-table buffer designed for zero-latency editing across massive source trees.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Paired directly with the embedded Kotlin 2.4.0 PSI compiler frontend, Compose compiler plugin, and live <code className="text-white font-mono text-xs">@Preview</code> RPC hot-reload engine so UI mutations render live on-device without a desktop host.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-cyan-400/90">
                Native C++20 SumTree Buffer • Embedded PSI Frontend • Compose RPC Preview
              </div>
            </div>

            {/* Pillar 3: Custom JediTerm Fork & Direct-to-Compile PTY */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-amber-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>DIRECT PTY RUNTIME</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30">
                    NO HYPERVISOR
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Custom JediTerm Fork & Direct-to-Compile PTY Environment
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Built on our own customized <strong className="text-white">JediTerm fork</strong> connected to a lean, direct PTY execution layer.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Rather than emulating an entire OS kernel or hypervisor, we engineered the PTY environment specifically to execute builds and drive our cross-compiled, self-dexed Android toolchains (<code className="text-slate-300 font-mono text-xs">kotlinc-dexed.jar</code>, <code className="text-slate-300 font-mono text-xs">r8-dexed.jar</code>, <code className="text-slate-300 font-mono text-xs">javac-v21-aarch64.dex.jar</code>) pulled on demand at runtime.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-amber-400/90">
                JediTerm Android Fork • Direct PTY Terminal Engine • Self-Dexed Toolchains
              </div>
            </div>

            {/* Pillar 4: Hardened Real-Time CRDT Collaboration */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-emerald-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>REAL-TIME MULTI-DEV</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    SUPABASE RLS
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                  Hardened Real-Time CRDT Collaboration
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  <p>
                    Live multi-developer coding sessions powered by conflict-free replicated data types (CRDTs) and locked down with strict Supabase Row-Level Security—enforcing verified session host invites and granular <code className="text-emerald-300 font-mono text-xs">host</code>, <code className="text-emerald-300 font-mono text-xs">editor</code>, and <code className="text-emerald-300 font-mono text-xs">viewer</code> permissions in real time.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Deterministic state reconciliation ensures zero merge conflicts during synchronized pair programming across mobile and workstation endpoints.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90">
                CRDT State Synchronization • Supabase Row-Level Security • Granular RBAC
              </div>
            </div>
          </div>
        </div>

        {/* The Companion Ecosystem Sub-Section */}
        <div className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>COMPANION APPLICATIONS // EXTENDED WORKFLOW</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              The Dev.io Companion Ecosystem
            </h3>
            <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
              Engineering doesn't stop at the editor. Dev.io extends across your entire workflow with two dedicated companion applications built with the same zero-bloat philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Companion 1: anyone-connect */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-cyan-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5" />
                    <span>DEVELOPER BRIDGE</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                    BURN-ON-EXIT
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">
                  anyone-connect — Zero-Compromise Developer Messaging Bridge
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  A standalone and IDE-integrated encrypted communication bridge built for developers who refuse corporate telemetry. Features real-time WebSocket channels, direct messaging, and <strong className="text-white">Burn-on-Exit</strong> ephemeral session wiping.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-cyan-400/90">
                Encrypted WebSockets • Burn-on-Exit Ephemeral State • Zero Corporate Telemetry
              </div>
            </div>

            {/* Companion 2: Build Commander */}
            <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-emerald-400/40 transition-colors flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Watch className="w-3.5 h-3.5" />
                    <span>WEAR OS & MOBILE WATCHDOG</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    LIVE PIPELINE
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-sans">
                  Build Commander — Remote Build Telemetry & Pipeline Watchdog
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Real-time build control and task telemetry that streams active compilation logs, diagnostic states, and instant pass/fail alerts straight to your phone or Wear OS watch so you're never chained to a desk waiting on a build.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90">
                Wear OS & Android Client • Live Task Telemetry Streaming • Instant Remote Rebuilds
              </div>
            </div>
          </div>
        </div>

        {/* Direct Action / Ecosystem Callout Bar */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-emerald-950/30 via-[#0A0D15] to-[#0A0D15] border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold font-sans text-sm sm:text-base">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Dev.io Mobile IDE & Companion Ecosystem</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Active Google Play Store rollout underway. Access direct downloads, installation packages, and developer ecosystem builds on anyonehub.us.kg.
            </p>
          </div>

          <a
            href={COMPANY_DOMAINS.platformPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded bg-emerald-500 text-slate-950 font-semibold font-mono text-xs hover:bg-emerald-400 transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-lg shadow-emerald-500/10"
          >
            <span>Launch anyonehub.us.kg Portal</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </div>
    </article>
  );
};

