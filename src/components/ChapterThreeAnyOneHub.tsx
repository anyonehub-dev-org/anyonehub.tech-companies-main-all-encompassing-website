// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { 
  Code2, 
  Terminal, 
  Watch, 
  Share2, 
  Cpu, 
  Workflow, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const ChapterThreeAnyOneHub: React.FC = () => {
  return (
    <article id="chapter-3" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Chapter Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
            <span>CHAPTER III</span>
            <span className="text-slate-600">/</span>
            <span>UNTHROTTLED MOBILE DEVELOPER SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            AnyOne-Hub: Pure Kotlin, Forked Jedi Term, and Native C++ Python Bridge
          </h2>
          <div className="text-xs font-mono text-slate-500">
            SECTION § 3.0 // ANDROID IDE, REAKTOR NODE GRAPH, AND WEARABLE TELEMETRY
          </div>
        </div>

        {/* Long-Form Monograph Prose */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <p>
            AnyOne-Hub is an unthrottled integrated developer environment engineered exclusively for Android. Unlike contemporary mobile development tools that rely on fragile web-wrapper runtimes or simulated browser sandboxes, AnyOne-Hub is architected with <strong className="text-white">pure Kotlin and Jetpack Compose</strong> from the metal up.
          </p>

          <p>
            To deliver genuine high-performance language runtimes without compromising Android's native execution guarantees, AnyOne-Hub implements a <strong className="text-white">clean, dedicated native C++ bridge exclusively for Python integration</strong>. This gives data scientists and mobile engineers access to native Python execution directly on device, bypassing sluggish interpretation layers while preserving memory safety.
          </p>

          <p>
            For interactive terminal emulation, rather than layering external distribution root filesystems or heavy container virtualization, AnyOne-Hub features a deeply optimized terminal engine built by <strong className="text-white">forking the Jedi term source directly over to Android</strong>. This native port delivers sub-millisecond ANSI escape sequence parsing, custom font glyph rasterization, and seamless PTY process coupling directly inside Jetpack Compose.
          </p>
        </div>

        {/* 3-Pillar Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* App 1 */}
          <div className="p-6 bg-[#0A0D15] border border-emerald-500/30 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-semibold">FLAGSHIP IDE</span>
              <Code2 className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white">AnyOne-Hub (Android)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              100% pure Kotlin & Jetpack Compose UI. Features dual custom code editors, the Reaktor visual node-graph editor, forked Jedi term engine, and a clean C++ bridge for native Python integration.
            </p>
            <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
              ARCHITECTURE: <span className="text-slate-300">Pure Compose + C++</span>
            </div>
          </div>

          {/* App 2 */}
          <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 font-semibold">P2P NETWORK</span>
              <Share2 className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white">AnyOne-Connect</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Encrypted peer-to-peer engineering collaboration network, developer social graph, and spatial radius-filtered hardware marketplace for procuring microcontrollers and fabrication parts.
            </p>
            <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
              DISCOVERY: <span className="text-slate-300">Spatial Radius Mesh</span>
            </div>
          </div>

          {/* App 3 */}
          <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 font-semibold">WEARABLE COMPANION</span>
              <Watch className="w-4 h-4 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-white">Build Commander (Wear OS)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Wrist-mounted CI/CD and local build monitor streaming real-time compilation telemetry, build failure diagnostics, and remote rebuild triggers directly from a smartwatch.
            </p>
            <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
              TELEMETRY: <span className="text-slate-300">Live Build Pipe</span>
            </div>
          </div>
        </div>

        {/* Clean Architectural Specification Table */}
        <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
          <div className="text-xs font-mono text-white font-semibold">
            TABLE 3.1 — ANYONE-HUB TECHNICAL ARCHITECTURE SPECIFICATION
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">FRONTEND & UI STACK</span>
              <span className="text-emerald-400 font-semibold text-sm">Pure Kotlin / Jetpack Compose</span>
              <p className="text-slate-400 text-[11px] font-sans">
                Native declarative UI with zero HTML/DOM or WebView layers, achieving 120fps fluid editing on Android.
              </p>
            </div>

            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">PYTHON INTEGRATION</span>
              <span className="text-white font-semibold text-sm">Native C++ Bridge</span>
              <p className="text-slate-400 text-[11px] font-sans">
                Clean, low-overhead C++ JNI bridge engineered exclusively to embed and execute Python runtimes directly.
              </p>
            </div>

            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">TERMINAL ENGINE</span>
              <span className="text-[#00F0FF] font-semibold text-sm">Forked Jedi Term (Direct Android Port)</span>
              <p className="text-slate-400 text-[11px] font-sans">
                Direct source fork of Jedi term compiled natively to Android for authentic, high-speed PTY shell execution.
              </p>
            </div>

            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">VISUAL PROGRAMMING</span>
              <span className="text-slate-200 font-semibold text-sm">Reaktor Node-Graph Editor</span>
              <p className="text-slate-400 text-[11px] font-sans">
                Interactive node-graph visual dataflow canvas for procedural asset generation and modular compilation targets.
              </p>
            </div>
          </div>
        </div>

        {/* Portal Outbound CTA */}
        <div className="pt-2 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400">APPLICATION DISTRIBUTION:</span>
          <a
            href={COMPANY_DOMAINS.platformPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1.5"
          >
            <span>Launch Portal & Release Distribution (anyonehub.us.kg)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
