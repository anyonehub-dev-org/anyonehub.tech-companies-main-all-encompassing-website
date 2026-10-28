// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React from 'react';
import { 
  Sliders, 
  Cpu, 
  Radio, 
  Tv, 
  Smartphone, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Workflow,
  CheckCircle2
} from 'lucide-react';

export const PhaseFormSection: React.FC = () => {
  const latencyBenchmarks = [
    { stack: 'PhaseForm-Midi (Android C++23 AAudio via USB AOA)', roundTrip: '2.4 ms', jitter: '< 0.15 ms', verdict: 'Deterministic Bass Production Standard' },
    { stack: 'PhaseForm-Studio (Windows C++23 Direct3D 11 / WASAPI Exclusive)', roundTrip: '3.1 ms', jitter: '< 0.20 ms', verdict: 'Zero-Jitter 48kHz WAV Pipeline' },
    { stack: 'Standard Android Java AudioTrack API (Legacy)', roundTrip: '55–85 ms', jitter: '± 12.0 ms', verdict: 'Unacceptable High-Latency Churn' },
    { stack: 'macOS CoreAudio Default Buffer (128 samples @ 48kHz)', roundTrip: '4.8 ms', jitter: '< 0.40 ms', verdict: 'Industry Studio Baseline' },
  ];

  return (
    <section id="phaseform" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-violet-400 uppercase tracking-wider flex items-center gap-2">
              <span>PILLAR 04</span>
              <span className="text-slate-600">/</span>
              <span>PHASEFORM AUDIO SUITE</span>
              <span className="text-slate-600">/</span>
              <span className="text-amber-400">NATIVE C++23 DSP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Native C++23 Audio DSP & GPU-Accelerated Live Performance.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Engineered specifically for heavy bass music, dubstep, and drum & bass production. PhaseForm breaks the traditional DAW bottleneck with Direct3D 11 GPU-rendered UI and microsecond-level C++23 AAudio mobile synchronization.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded shrink-0">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>48kHz DETERMINISTIC STEREO DSP</span>
          </div>
        </div>

        {/* 2-Product Engineering Breakdown (Studio + Midi) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product 1: PhaseForm-Studio */}
          <div className="bg-[#0A0D15] border border-violet-500/30 rounded-lg p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-violet-500/10 text-violet-300 border border-violet-500/30 rounded">
                WINDOWS C++23 DESKTOP
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">PhaseForm-Studio (Desktop DAW)</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Native C++23 digital audio workstation with Direct3D 11 GPU-accelerated UI rendering. Decouples complex multi-channel waveform rasterization from the audio thread, allowing zero-drop audio processing at high track counts.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/[0.08] text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Direct3D 11 GPU UI:</strong> 120fps oscilloscope and spectrum displays rendered directly on GPU shaders, reserving 100% of CPU cycles for audio DSP.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Deterministic 48kHz WAV Engine:</strong> High-precision phase-aligned modulation matrix for complex wavetable FM synthesis and sub-bass shaping.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Zero-Jitter Buffer Scheduling:</strong> WASAPI Exclusive and ASIO kernel streaming guarantees deterministic sample-accurate automation.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex justify-between text-[11px] font-mono text-slate-500">
              <span>PLATFORM: <span className="text-slate-300">Windows 10/11 x64</span></span>
              <span>RENDER: <span className="text-violet-400">Direct3D 11</span></span>
            </div>
          </div>

          {/* Product 2: PhaseForm-Midi */}
          <div className="bg-[#0A0D15] border border-amber-500/30 rounded-lg p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">
                ANDROID C++23 AAUDIO
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">PhaseForm-Midi (Mobile Controller)</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Ultra-low-latency performance companion running native C++23 code over Android's AAudio API. Connects to PhaseForm-Studio over high-speed USB AOA or low-latency Wi-Fi UDP for live stage manipulation.
              </p>
            </div>

            <div className="space-y-2.5 pt-2 border-t border-white/[0.08] text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Dual Transport Synchronization:</strong> Seamless automatic failover between wired USB (AOA/MIDI) and localized Wi-Fi UDP packet streaming.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Multi-Touch XY Modulation:</strong> High-polling touch surface for continuous filter cutoff and resonance modulation with tactile haptic clicks.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-300"><strong className="text-white">Bidirectional Telemetry:</strong> Live 60fps audio waveform and RMS gain reduction streamed from DAW back to the phone screen.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex justify-between text-[11px] font-mono text-slate-500">
              <span>TRANSPORT: <span className="text-slate-300">USB AOA / Wi-Fi UDP</span></span>
              <span>ENGINE: <span className="text-amber-400">C++23 AAudio</span></span>
            </div>
          </div>
        </div>

        {/* High-Precision Desktop-to-Mobile Telemetry Schematic */}
        <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>PhaseForm Real-Time DSP Telemetry Pipeline</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-violet-500/10 text-violet-300 border border-violet-500/30 rounded">
                  2.4 MS ROUND-TRIP LATENCY
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Direct3D 11 audio render graph synchronized over high-throughput binary protocols.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>DETERMINISTIC AUDIO PIPELINE</span>
            </div>
          </div>

          <div className="overflow-x-auto py-2">
            <svg
              viewBox="0 0 940 240"
              className="w-full min-w-[760px] h-auto select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="audio-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
                <marker id="audio-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8B5CF6" />
                </marker>
                <marker id="amber-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#F59E0B" />
                </marker>
              </defs>

              <rect width="940" height="240" fill="url(#audio-grid)" rx="6" />

              {/* Studio DAW Node */}
              <rect x="30" y="30" width="280" height="180" rx="6" fill="#0D111A" stroke="#8B5CF6" strokeWidth="1.5" />
              <text x="50" y="60" fill="#8B5CF6" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                PHASEFORM-STUDIO (WINDOWS)
              </text>
              <text x="50" y="82" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                Native C++23 DAW Engine
              </text>
              <line x1="50" y1="96" x2="290" y2="96" stroke="rgba(255,255,255,0.1)" />
              <text x="50" y="118" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Direct3D 11 GPU Shader Pipeline</text>
              <text x="50" y="138" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 48kHz Stereo WAV Audio Engine</text>
              <text x="50" y="158" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• WASAPI Exclusive & ASIO Streaming</text>
              <text x="50" y="178" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Modular Synth & FX Graph Matrix</text>

              {/* Bidirectional Bridge */}
              <path d="M 310 100 L 410 100" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#audio-arrow)" />
              <text x="325" y="88" fill="#8B5CF6" fontSize="9" fontFamily="JetBrains Mono">
                Waveform Telemetry
              </text>

              <rect x="420" y="55" width="160" height="130" rx="6" fill="#07090E" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <text x="435" y="80" fill="#F8FAFC" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
                ZERO-LATENCY PIPE
              </text>
              <line x1="435" y1="92" x2="565" y2="92" stroke="rgba(255,255,255,0.08)" />
              <text x="435" y="110" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• USB AOA / USB-MIDI</text>
              <text x="435" y="128" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Wi-Fi UDP Binary Packets</text>
              <text x="435" y="146" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Jitter: &lt; 0.15 ms</text>
              <text x="435" y="166" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono">ROUND-TRIP: 2.4 ms</text>

              <path d="M 580 140 L 680 140" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#amber-arrow)" />
              <text x="590" y="130" fill="#F59E0B" fontSize="9" fontFamily="JetBrains Mono">
                Macro & XY Influx
              </text>

              {/* Mobile Controller Node */}
              <rect x="690" y="30" width="220" height="180" rx="6" fill="#0D111A" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="710" y="60" fill="#F59E0B" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                PHASEFORM-MIDI (ANDROID)
              </text>
              <text x="710" y="82" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                C++23 AAudio Controller
              </text>
              <line x1="710" y1="96" x2="890" y2="96" stroke="rgba(255,255,255,0.1)" />
              <text x="710" y="118" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Multi-Touch XY Modulation Pad</text>
              <text x="710" y="138" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 120fps Parameter Faders</text>
              <text x="710" y="158" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Bass Wobble / LFO Encoders</text>
              <text x="710" y="178" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Bidirectional Waveform Feed</text>
            </svg>
          </div>

          {/* Latency Benchmark Comparison Table */}
          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <div className="text-xs font-mono text-slate-400">AUDIO ENGINE LATENCY BENCHMARK MATRIX</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] text-slate-400 font-mono text-[11px]">
                    <th className="py-2 px-3">Audio Stack Configuration</th>
                    <th className="py-2 px-3">Round-Trip Latency</th>
                    <th className="py-2 px-3">Temporal Jitter</th>
                    <th className="py-2 px-3">Performance Class</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-slate-300">
                  {latencyBenchmarks.map((b, idx) => (
                    <tr key={b.stack} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3 font-semibold text-white">{b.stack}</td>
                      <td className="py-2.5 px-3 font-mono text-emerald-400 font-bold">{b.roundTrip}</td>
                      <td className="py-2.5 px-3 font-mono text-slate-400">{b.jitter}</td>
                      <td className="py-2.5 px-3 text-xs text-slate-400">{b.verdict}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
