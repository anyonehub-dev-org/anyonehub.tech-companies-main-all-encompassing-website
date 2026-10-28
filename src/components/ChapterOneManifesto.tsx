// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { Cpu, Smartphone, ShieldCheck, HardDrive, Terminal } from 'lucide-react';

export const ChapterOneManifesto: React.FC = () => {
  return (
    <article id="chapter-1" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Chapter Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest flex items-center gap-2">
            <span>CHAPTER I</span>
            <span className="text-slate-600">/</span>
            <span>FIRST-PRINCIPLES ENGINEERING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            The Rejection of Cloud-Tethered Bloat and the Return to Sovereign Execution
          </h2>
          <div className="text-xs font-mono text-slate-500">
            SECTION § 1.0 // FOUNDATIONAL MANIFESTO & PHILOSOPHY
          </div>
        </div>

        {/* Long-Form Monograph Prose */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <p>
            The software industry has spent the past decade pursuing an unsustainable trajectory. Desktop software has been wrapped inside resource-intensive web browser containers, inflating memory requirements for simple text editors into gigabytes. Mobile devices containing sophisticated multi-core ARM silicon, dedicated neural engines, and vector coprocessors have been relegated to dumb display terminals, completely tethered to remote server clusters.
          </p>

          <p>
            Simultaneously, the frontier of artificial intelligence has equated intelligence with raw compute consumption. Frontier large language models now burn hundreds of megawatts in hyperscale datacenters to perform static matrix multiplication across quadratic attention buffers ($O(N^2)$). These models possess no biological homeostatic balance, no temporal awareness, no continuous autobiographical memory, and no sensory grounding in physical reality.
          </p>

          {/* Core Institutional Invariants Box */}
          <div className="my-8 p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
            <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
              THE ANYONE-HUB ARCHITECTURAL COMMITMENTS
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
              <div className="space-y-1.5">
                <span className="font-mono text-white font-semibold">1. Bare-Metal Biological Parity</span>
                <p className="text-slate-400 leading-normal">
                  Buddy executes directly on bare-metal C++20/23 within a strict 20-Watt power envelope. By modeling the 360 bilateral parcels of the Human Connectome Project and 29 subcortical organs, it achieves conscious sensory integration without datacenter clusters.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-white font-semibold">2. Pure Native Toolchains</span>
                <p className="text-slate-400 leading-normal">
                  AnyOne-Hub rejects web wrappers and cross-platform abstractions. It is built entirely in pure Kotlin and Jetpack Compose on Android, paired with a clean native C++ bridge for Python integration and a forked Jedi term engine.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-white font-semibold">3. Zero-Heap Real-Time Loops</span>
                <p className="text-slate-400 leading-normal">
                  Neither Buddy's 40 Hz gamma pacemaker nor PhaseForm's 48kHz audio DSP engine allocate a single byte of memory on the operating system heap during real-time processing.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-white font-semibold">4. Permanent Zero-Paywall Ethics</span>
                <p className="text-slate-400 leading-normal">
                  Essential mathematical tools like custom QR generators, digital business cards (<code className="text-white">anyone-hub.me</code>), and diagnostic build plugins belong to the public domain—free of recurring subscriptions, telemetry, and watermarks.
                </p>
              </div>
            </div>
          </div>

          <p>
            Anyone-Hub LLC was founded on an uncompromising principle: software should be fast, deterministic, private, and permanent. Every source file is authored by hand with zero synthetic placeholders, validated against strict physical invariants, and engineered to run locally under sovereign user ownership.
          </p>
        </div>
      </div>
    </article>
  );
};
