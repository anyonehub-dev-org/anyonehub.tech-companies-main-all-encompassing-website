// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  Tv, 
  Smartphone, 
  Activity, 
  Sliders, 
  Zap, 
  Radio, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Volume2 
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

export const PhaseformSection: React.FC = () => {
  // Pad matrix state for interactive visualizer
  const [selectedPad, setSelectedPad] = useState<number | null>(7);

  // 6 Neon Palette Colors
  const neonPalettes = [
    { name: 'Cyan', border: 'border-[#00F0FF]/50', shadow: 'shadow-[#00F0FF]/30', text: 'text-[#00F0FF]', bg: 'bg-[#00F0FF]/15' },
    { name: 'Emerald', border: 'border-emerald-400/50', shadow: 'shadow-emerald-400/30', text: 'text-emerald-400', bg: 'bg-emerald-400/15' },
    { name: 'Violet', border: 'border-violet-400/50', shadow: 'shadow-violet-400/30', text: 'text-violet-400', bg: 'bg-violet-400/15' },
    { name: 'Amber', border: 'border-amber-400/50', shadow: 'shadow-amber-400/30', text: 'text-amber-400', bg: 'bg-amber-400/15' },
    { name: 'Electric Rose', border: 'border-rose-400/50', shadow: 'shadow-rose-400/30', text: 'text-rose-400', bg: 'bg-rose-400/15' },
    { name: 'Cold White', border: 'border-slate-200/50', shadow: 'shadow-white/30', text: 'text-white', bg: 'bg-white/15' },
  ];

  // 32 Pad definitions (8x4 grid) with performance zones
  const pads = Array.from({ length: 32 }, (_, i) => {
    const paletteIndex = i < 8 ? 0 : i < 16 ? 1 : i < 24 ? 2 : (i % 3) + 3;
    const labels = [
      'Sub 32Hz', 'Sub 44Hz', '808 Hit', 'Reese A', 'Neuro B', 'Growl 1', 'Growl 2', 'Wobble',
      'Punch Kick', 'Fat Kick', 'Clap Top', 'Snare 200', 'Snare Heavy', 'Rimshot', 'HiHat Cl', 'HiHat Op',
      'Stab Fm', 'Stab Gm', 'Vocal Rise', 'Chant FX', 'Sweep Up', 'Downer', 'Impact', 'Sub Drop',
      'Lead 1', 'Lead 2', 'Acid 303', 'Glitch 1', 'Glitch 2', 'Laser FX', 'Tape Stop', 'Master Kill'
    ];
    return {
      id: i,
      label: labels[i] || `PAD ${i + 1}`,
      color: neonPalettes[paletteIndex % neonPalettes.length],
    };
  });

  return (
    <article id="phaseform" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Ambient violet/amber atmospheric glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        {/* Section Header & Manifesto */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/30 text-xs font-mono text-violet-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span>SOVEREIGN CREATIVE COMPUTING // LOW-LATENCY AUDIO ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            Phaseform Studio & MIDI: GPU-Accelerated Audio Engineering and Dynamic Silicone Control.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-1">
            <p>
              Commercial digital audio workstations and stage MIDI controllers have stagnated into bloated, subscription-gated ecosystems riddled with high buffer latency, sluggish UI redraws, and cheap plastic hardware limitations.
            </p>
            <p>
              We engineered the <strong className="text-white">Phaseform</strong> ecosystem with a single standard: uncompromising performance. By coupling a dedicated Windows Digital Audio Workstation running Direct3D 11 GPU-accelerated audio visualization directly with a custom Android silicone pad controller, Phaseform provides electronic music producers with a zero-compromise hardware-software instrument designed from the ground up for dubstep, drum & bass, and heavy bass music production.
            </p>
          </div>
        </div>

        {/* 2-Product Engineering Grid: Studio (Windows) & MIDI (Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: Phaseform Studio (Windows DAW) */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-violet-500/30 hover:border-violet-500/50 transition-colors flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-violet-400 font-semibold flex items-center gap-1.5">
                  <Tv className="w-4 h-4" />
                  <span>WINDOWS DAW</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-violet-950/40 text-violet-300 border border-violet-500/30">
                  DIRECT3D 11 GPU
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Phaseform Studio (Windows x64 Native DAW)
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white">Bass Music Optimization:</strong> Specifically engineered for the extreme dynamic range, transient precision, and complex sub-bass modulation required in dubstep, drum & bass, neurofunk, and halftime sound design.
                </p>
                <p>
                  <strong className="text-white">Direct3D 11 GPU Shader Pipeline:</strong> Offloads all multi-channel waveform rasterization, real-time oscilloscopes, animated wavetables, and phase-wave contour visualizations directly to GPU shaders at 120 FPS—freeing 100% of the CPU audio thread for uninterrupted digital signal processing.
                </p>
                <p>
                  <strong className="text-white">Sub-2.4ms Low-Latency DSP:</strong> Native C++23 audio engine processing 48kHz / 32-bit floating-point stereo WAV pipelines with sub-2.4ms round-trip latency via native ASIO and WASAPI Exclusive driver backends.
                </p>
                <p>
                  <strong className="text-white">Precision Multi-Track Mixer:</strong> Deterministic sidechain routing, phase-aligned modulation matrices, and zero-drop buffer guarantees even under heavy multi-track automation loads.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-violet-300/90">
              Native C++23 DSP • Direct3D 11 GPU Shaders • Sub-2.4ms ASIO / WASAPI • 48kHz Stereo WAV
            </div>
          </div>

          {/* Column 2: Phaseform MIDI (Android Silicone Pad Controller) */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-amber-500/30 hover:border-amber-500/50 transition-colors flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>ANDROID CONTROLLER</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30">
                  8x4 SILICONE MATRIX
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Phaseform MIDI (Android Companion Controller)
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white">8x4 Blank White Silicone Pad Matrix:</strong> 32 tactile square pads with dynamic neon RGB backlighting and sub-millisecond touch-to-MIDI impulse transmission.
                </p>
                <p>
                  <strong className="text-white">Seamless Long-Press Programming Modal:</strong> Long-pressing any pad triggers an instant hardware-grade configuration wizard with zero menu-diving:
                </p>
                <ul className="pl-4 space-y-1 list-disc text-xs text-slate-400 font-sans">
                  <li><strong className="text-slate-200">Categorized 24-bit PCM WAV Library:</strong> Fast auditioning and assignment of kicks, snares, bass one-shots, stabs, and vocal stems.</li>
                  <li><strong className="text-slate-200">Real-Time DSP & Amp Modulation:</strong> Dedicated dials for Attack, Decay, Sustain, Release, Pitch Envelope, Distortion Drive, and Filter Cutoff.</li>
                  <li><strong className="text-slate-200">6-Color Neon Palette Picker:</strong> Instant pad color-coding (Cyan, Emerald, Violet, Amber, Electric Rose, Cold White) for intuitive stage zoning and live performance mapping.</li>
                </ul>
                <p>
                  <strong className="text-white">Zero-Copy FlatBuffers (.fbp) Serialization:</strong> Pad presets, velocity curves, and sample mappings serialize into compact, zero-copy FlatBuffers binaries (<code className="text-amber-300 font-mono text-xs">.fbp</code>) streamed over high-speed USB-C, rtpMIDI, and modern MIDI 2.0 Property Exchange.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-amber-300/90">
              8x4 Silicone Pad Grid • Dynamic Neon RGB • Long-Press Modal Wizard • Zero-Copy FlatBuffers (.fbp)
            </div>
          </div>
        </div>

        {/* 8x4 Interactive Tactile Pad Visualizer */}
        <div className="p-6 rounded-lg bg-[#0A0D15] border border-white/[0.08] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Phaseform MIDI // 8x4 Blank White Silicone Pad Matrix with Dynamic Neon RGB</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              LIVE TACTILE HARDWARE EMULATION
            </span>
          </div>

          {/* 32-Pad Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 pt-1">
            {pads.map((pad) => {
              const isSelected = selectedPad === pad.id;
              return (
                <button
                  key={pad.id}
                  onClick={() => setSelectedPad(pad.id)}
                  className={`aspect-square rounded-md p-2 flex flex-col justify-between transition-all duration-150 text-left relative overflow-hidden group border ${
                    isSelected
                      ? `bg-white/20 ${pad.color.border} shadow-lg ${pad.color.shadow} scale-[1.03]`
                      : 'bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.07] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-400">
                      #{pad.id + 1}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${pad.color.bg} ${pad.color.border} border`} />
                  </div>
                  <div className={`text-[10px] font-mono font-semibold truncate ${isSelected ? pad.color.text : 'text-slate-300'}`}>
                    {pad.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Pad Wizard Callout */}
          {selectedPad !== null && (
            <div className="p-4 rounded bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="space-y-0.5">
                <div className="text-white font-semibold flex items-center gap-2">
                  <span className="text-amber-400">PAD #{selectedPad + 1}:</span>
                  <span>{pads[selectedPad].label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${pads[selectedPad].color.bg} ${pads[selectedPad].color.text}`}>
                    {pads[selectedPad].color.name}
                  </span>
                </div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Long-press modal active: 24-bit PCM WAV binding, ADSR envelope, filter cutoff dial, and zero-copy .fbp binary export.
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                <span>USB-C / rtpMIDI STREAMING</span>
              </div>
            </div>
          )}
        </div>

        {/* Live Studio Distribution Callout Bar */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-violet-950/30 via-[#0A0D15] to-[#0A0D15] border border-violet-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold font-sans text-sm sm:text-base">
              <Volume2 className="w-4 h-4 text-violet-400" />
              <span>Phaseform Studio & MIDI Release Portal</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              The official home of Phaseform Studio Windows desktop installers and Phaseform MIDI companion controller APKs on anyonehub.tech.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="px-3 py-1.5 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300 font-mono text-[11px]">
              Windows 10/11 Direct3D 11
            </span>
            <span className="px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px]">
              Android AAudio APK
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

