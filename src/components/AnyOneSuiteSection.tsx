// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  Terminal, 
  Smartphone, 
  Watch, 
  Share2, 
  Cpu, 
  Layers, 
  ExternalLink, 
  ShieldCheck, 
  Code2, 
  HardDrive,
  Workflow,
  Radio
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const AnyOneSuiteSection: React.FC = () => {
  const [activeApp, setActiveApp] = useState<'ide' | 'connect' | 'commander'>('ide');

  return (
    <section id="anyone-suite" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <span>PILLAR 03</span>
              <span className="text-slate-600">/</span>
              <span>ANYONE-HUB 3-APP DEVELOPER ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Unthrottled Engineering on Mobile, Desktop, and Wearables.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We reject the premise that mobile devices and smartwatches are passive consumption clients. AnyOne-Hub transforms standard consumer hardware into sovereign Linux compilation stations, visual node-graph synthesizers, and wrist-mounted build commanders.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={COMPANY_DOMAINS.platformPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-mono text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 rounded flex items-center gap-2 transition-all shadow-md"
            >
              <span>Launch Platform Portal (anyonehub.us.kg)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-App Interactive Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* App 1: AnyOne-Hub IDE */}
          <div
            onClick={() => setActiveApp('ide')}
            className={`cursor-pointer p-6 rounded-lg border transition-all text-left space-y-4 ${
              activeApp === 'ide'
                ? 'bg-[#0D1612] border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                : 'bg-[#0A0D15] border-white/[0.08] hover:border-emerald-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                FLAGSHIP IDE
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">AnyOne-Hub (Android IDE)</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                95% Pure Kotlin Jetpack Compose UI with headless Rust backend. Features dual custom code editors, Reaktor node-graph engine, Bionic Linux terminal daemon, and AVF pKVM virtualization.
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06] flex justify-between">
              <span>BACKEND: <span className="text-slate-300">Headless Rust</span></span>
              <span>HYPERVISOR: <span className="text-emerald-400">AVF pKVM</span></span>
            </div>
          </div>

          {/* App 2: AnyOne-Connect */}
          <div
            onClick={() => setActiveApp('connect')}
            className={`cursor-pointer p-6 rounded-lg border transition-all text-left space-y-4 ${
              activeApp === 'connect'
                ? 'bg-[#0D1612] border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                : 'bg-[#0A0D15] border-white/[0.08] hover:border-emerald-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                P2P NETWORK
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">AnyOne-Connect (Network & Market)</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Encrypted peer-to-peer engineering bridge, spatial radius-filtered hardware/component marketplace for makers and robotics fabricators, and real-time team collaboration mesh.
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06] flex justify-between">
              <span>PROTOCOL: <span className="text-slate-300">P2P Encrypted</span></span>
              <span>EXCHANGE: <span className="text-emerald-400">Spatial Market</span></span>
            </div>
          </div>

          {/* App 3: Build Commander Wear OS */}
          <div
            onClick={() => setActiveApp('commander')}
            className={`cursor-pointer p-6 rounded-lg border transition-all text-left space-y-4 ${
              activeApp === 'commander'
                ? 'bg-[#0D1612] border-emerald-500/50 shadow-lg shadow-emerald-950/20'
                : 'bg-[#0A0D15] border-white/[0.08] hover:border-emerald-500/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Watch className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                WEAR OS
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">Build Commander (Wear OS)</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Wrist-mounted telemetry monitor streaming live <code className="text-slate-300">TerminalLogPipe</code> output from local or CI/CD compilation tasks with remote rebuild triggers and thermal alerts.
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06] flex justify-between">
              <span>TELEMETRY: <span className="text-slate-300">TerminalLogPipe</span></span>
              <span>TRIGGER: <span className="text-emerald-400">Wrist Rebuild</span></span>
            </div>
          </div>
        </div>

        {/* High-Precision SVG System Topology Diagram */}
        <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>AnyOne-Hub System Architecture & IPC Topology</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                  AVF pKVM ISOLATION
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero-copy Cap'n Proto IPC connecting Jetpack Compose frontends to headless Rust compilation daemons and the Android Virtualization Framework hypervisor.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>LINUX DAEMON SERVICE VERIFIED</span>
            </div>
          </div>

          <div className="overflow-x-auto py-2">
            <svg
              viewBox="0 0 940 320"
              className="w-full min-w-[760px] h-auto select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="suite-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
                <marker id="suite-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10B981" />
                </marker>
              </defs>

              <rect width="940" height="320" fill="url(#suite-grid)" rx="6" />

              {/* Box 1: UI Layer (Jetpack Compose) */}
              <rect x="30" y="40" width="240" height="240" rx="6" fill="#0D111A" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="50" y="70" fill="#10B981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                LAYER 01: MOBILE CLIENT
              </text>
              <text x="50" y="94" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Kotlin Jetpack Compose
              </text>
              <line x1="50" y1="108" x2="250" y2="108" stroke="rgba(255,255,255,0.1)" />
              <text x="50" y="132" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Dual Custom Code Editors</text>
              <text x="50" y="154" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Reaktor Node-Graph Editor</text>
              <text x="50" y="176" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Terminal Viewport UI</text>
              <text x="50" y="198" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• AnyOne-Connect P2P UI</text>
              <text x="50" y="220" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Spatial Hardware Market</text>
              <text x="50" y="250" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono">
                95% PURE KOTLIN COMPOSE
              </text>

              {/* IPC Arrow 1 -> 2 */}
              <path d="M 270 160 L 330 160" stroke="#10B981" strokeWidth="2" markerEnd="url(#suite-arrow)" />
              <text x="272" y="145" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">
                Cap'n Proto IPC
              </text>

              {/* Box 2: Native Daemon Substrate */}
              <rect x="340" y="40" width="260" height="240" rx="6" fill="#0D111A" stroke="#10B981" strokeWidth="1.5" />
              <text x="360" y="70" fill="#10B981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                LAYER 02: BARE-METAL SUBSTRATE
              </text>
              <text x="360" y="94" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Headless Rust & Bionic
              </text>
              <line x1="360" y1="108" x2="580" y2="108" stroke="rgba(255,255,255,0.1)" />
              <text x="360" y="132" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• TerminalDaemonService (Bionic)</text>
              <text x="360" y="154" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• ABL Build Orchestration Engine</text>
              <text x="360" y="176" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Zero-Copy Pipe Multiplexing</text>
              <text x="360" y="198" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• Local Clang/LLVM/Rust Toolchain</text>
              <text x="360" y="220" fill="#94A3B8" fontSize="11" fontFamily="JetBrains Mono">• TerminalLogPipe Telemetry Server</text>
              <text x="360" y="250" fill="#00F0FF" fontSize="10" fontFamily="JetBrains Mono">
                ZERO HEAP JNI SERIALIZATION
              </text>

              {/* IPC Arrow 2 -> 3 */}
              <path d="M 600 110 L 660 110" stroke="#10B981" strokeWidth="2" markerEnd="url(#suite-arrow)" />
              <text x="602" y="95" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">
                KVM ioctl
              </text>

              {/* Box 3: AVF Hypervisor */}
              <rect x="670" y="40" width="240" height="110" rx="6" fill="#0D111A" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="690" y="66" fill="#00F0FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
                LAYER 03: HYPERVISOR
              </text>
              <text x="690" y="86" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                AVF pKVM Linux MicroVM
              </text>
              <text x="690" y="108" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Hardware Protected MicroVM</text>
              <text x="690" y="126" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Unthrottled Linux Rootfs</text>

              {/* IPC Arrow 2 -> 4 */}
              <path d="M 600 210 L 660 210" stroke="#10B981" strokeWidth="2" markerEnd="url(#suite-arrow)" />
              <text x="602" y="195" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">
                BLE / Wi-Fi UDP
              </text>

              {/* Box 4: Wear OS Build Commander */}
              <rect x="670" y="170" width="240" height="110" rx="6" fill="#0D111A" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="690" y="196" fill="#E2E8F0" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
                LAYER 04: WEARABLE COMPANION
              </text>
              <text x="690" y="216" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                Build Commander (Wear OS)
              </text>
              <text x="690" y="238" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Wrist TerminalLogPipe Stream</text>
              <text x="690" y="256" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Remote Rebuild Trigger Engine</text>
            </svg>
          </div>

          {/* Interactive Feature Deep Dive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs">
            <div className="p-3 bg-[#07090E] rounded border border-white/[0.06] space-y-1">
              <span className="font-mono text-emerald-400 font-semibold">REAKTOR NODE GRAPH</span>
              <p className="text-slate-400">
                Visual dataflow programming for procedural build targets, shader pipelines, and real-time DSP audio networks within AnyOne-Hub.
              </p>
            </div>

            <div className="p-3 bg-[#07090E] rounded border border-white/[0.06] space-y-1">
              <span className="font-mono text-[#00F0FF] font-semibold">BIONIC TERMINAL DAEMON</span>
              <p className="text-slate-400">
                Direct integration with Android's Bionic libc, spawning isolated pseudoterminals (<code className="text-slate-300">pts/</code>) with full bash and zsh toolchains.
              </p>
            </div>

            <div className="p-3 bg-[#07090E] rounded border border-white/[0.06] space-y-1">
              <span className="font-mono text-slate-300 font-semibold">SPATIAL HARDWARE MARKET</span>
              <p className="text-slate-400">
                Radius-filtered local hardware procurement in AnyOne-Connect for microcontrollers, sensors, 3D prints, and robotics components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
