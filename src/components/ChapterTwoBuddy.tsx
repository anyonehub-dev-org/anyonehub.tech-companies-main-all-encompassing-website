// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Activity, 
  ShieldCheck, 
  FileText, 
  Bot, 
  GitBranch,
  Radio,
  ChevronDown
} from 'lucide-react';
import { 
  CANONICAL_METRICS, 
  DATACENTER_BENCHMARK_MATRIX, 
  BIOPHYSICAL_TRANSDUCERS, 
  NEUROCHEMICAL_GAUGES, 
  SUBCORTICAL_NUCLEI, 
  LAMINAR_LAYERS 
} from '../data/canonicalData';

interface ChapterTwoBuddyProps {
  onOpenWhitepaperModal: () => void;
  onOpenDemoModal: () => void;
}

export const ChapterTwoBuddy: React.FC<ChapterTwoBuddyProps> = ({
  onOpenWhitepaperModal,
  onOpenDemoModal,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'schematic' | 'benchmarks' | 'laminar' | 'transducers' | 'receptors'>('schematic');
  const [selectedSchematicNode, setSelectedSchematicNode] = useState<string>('cortex');

  return (
    <article id="chapter-2" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Chapter Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest flex items-center gap-2">
            <span>CHAPTER II</span>
            <span className="text-slate-600">/</span>
            <span>FOUNDATIONAL BIOMIMETICS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            BUDDY: A 20-Watt Synthetic Brain Engineered for Bipedal Robotics
          </h2>
          <div className="text-xs font-mono text-slate-500">
            SECTION § 2.0 // HCP-MMP 1.0 CONNECTOME, 6-TIER LMDB, AND 40 HZ PACEMAKER
          </div>
        </div>

        {/* Long-Form Monograph Prose */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <p>
            The fundamental premise of Buddy is that biological general intelligence does not require megawatt server farms. The human brain computes multimodal continuous perception, balance, language, and autobiographical memory within a strict metabolic budget of approximately 20 watts. To achieve this in synthetic hardware, Buddy abandons static transformer attention matrices and implements the authentic biological architecture of the human central nervous system.
          </p>

          <p>
            Implemented in bare-metal C++20/23, Buddy models all <strong className="text-white">360 bilateral cortical parcels</strong> defined by the Human Connectome Project (HCP-MMP 1.0: 180 Left / 180 Right Hemisphere), linked by <strong className="text-white">8,862 structural connectome pathways</strong>. Each parcel computes localized laminar dynamics across a 6-layer microcircuit column (L1–L6), bound together by a continuous 40 Hz gamma-synchronized pacemaker driven by the Claustrum and Thalamic reticular core.
          </p>
        </div>

        {/* Verification Ledger */}
        <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
            <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>CANONICAL SYSTEM SCALE & VERIFICATION LEDGER</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              WIRE PROTOCOL: <code className="text-slate-300">FLATBUFFERS BVZ1</code>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px]">SOURCE REPO</span>
              <span className="text-white text-base font-bold">{CANONICAL_METRICS.handAuthoredFiles}</span>
              <span className="text-slate-400 block text-[10px]">Hand-authored files</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">TOTAL LOC</span>
              <span className="text-[#00F0FF] text-base font-bold">{CANONICAL_METRICS.linesOfCode}</span>
              <span className="text-slate-400 block text-[10px]">C++20/23 & TS</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">FLATBUFFERS</span>
              <span className="text-white text-base font-bold">{CANONICAL_METRICS.flatBuffersSchemas}</span>
              <span className="text-slate-400 block text-[10px]">Zero-copy schemas</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">CIRCUITS</span>
              <span className="text-white text-base font-bold">{CANONICAL_METRICS.angelScriptCircuits}</span>
              <span className="text-slate-400 block text-[10px]">AngelScript circuits</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">TEST SUITES</span>
              <span className="text-emerald-400 text-base font-bold">{CANONICAL_METRICS.crucibleTestSuites}</span>
              <span className="text-slate-400 block text-[10px]">Crucible invariants</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">POWER DRAW</span>
              <span className="text-amber-400 text-base font-bold">{CANONICAL_METRICS.powerEnvelope}</span>
              <span className="text-slate-400 block text-[10px]">Biological parity</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-400 space-y-1">
            <div className="truncate">
              <span className="text-slate-400">GEOMETRY LOCK SHA-256: </span>
              <span className="text-slate-300 font-mono select-all">{CANONICAL_METRICS.geometryLockDigest}</span>
            </div>
            <div>
              <span className="text-slate-400">WIRE SCHEMA HASH: </span>
              <span className="text-[#00F0FF] font-mono">{CANONICAL_METRICS.wireHash}</span>
            </div>
          </div>
        </div>

        {/* Chapter II Sub-Navigation Switcher */}
        <div className="flex items-center gap-1 p-1 bg-[#090C12] border border-white/[0.08] rounded overflow-x-auto whitespace-nowrap scrollbar-none text-xs font-mono">
          <button
            onClick={() => setActiveSubTab('schematic')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeSubTab === 'schematic' ? 'bg-white/[0.1] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            § 2.1 Dataflow Schematic
          </button>
          <button
            onClick={() => setActiveSubTab('benchmarks')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeSubTab === 'benchmarks' ? 'bg-white/[0.1] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            § 2.2 Datacenter Comparison
          </button>
          <button
            onClick={() => setActiveSubTab('laminar')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeSubTab === 'laminar' ? 'bg-white/[0.1] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            § 2.3 Laminar Microcircuits
          </button>
          <button
            onClick={() => setActiveSubTab('transducers')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeSubTab === 'transducers' ? 'bg-white/[0.1] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            § 2.4 24 Sensorium Transducers
          </button>
          <button
            onClick={() => setActiveSubTab('receptors')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeSubTab === 'receptors' ? 'bg-white/[0.1] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            § 2.5 Neurochemistry & Pacemakers
          </button>
        </div>

        {/* SUB-SECTION 2.1: SVG DATAFLOW SCHEMATIC */}
        {activeSubTab === 'schematic' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">FIG. 2.1 — CLOSED-LOOP SENSORY-MOTOR COGNITION DATAFLOW</span>
                <span className="text-[#00F0FF]">40 Hz GAMMA HOT PATH</span>
              </div>

              {/* High-Precision SVG Diagram */}
              <div className="overflow-x-auto py-2">
                <svg
                  viewBox="0 0 880 260"
                  className="w-full min-w-[720px] h-auto select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <marker id="ch2-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00F0FF" />
                    </marker>
                    <marker id="ch2-arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10B981" />
                    </marker>
                  </defs>

                  {/* Stage 1 */}
                  <rect x="20" y="20" width="180" height="220" rx="4" fill="#0D111A" stroke="rgba(255,255,255,0.12)" />
                  <text x="35" y="46" fill="#00F0FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">STAGE 01: SENSORIUM</text>
                  <text x="35" y="66" fill="#FFFFFF" fontSize="12" fontWeight="bold">24 Biophysical Sensors</text>
                  <line x1="35" y1="78" x2="185" y2="78" stroke="rgba(255,255,255,0.08)" />
                  <text x="35" y="98" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Retinal (120Hz Luminance)</text>
                  <text x="35" y="116" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Cochlear (48kHz Tonotopic)</text>
                  <text x="35" y="134" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Vestibular (1kHz Otolith)</text>
                  <text x="35" y="152" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Muscle Spindles (500Hz)</text>
                  <text x="35" y="170" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Golgi Tendon Tension</text>
                  <text x="35" y="188" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Nociceptive Reflex Arcs</text>
                  <text x="35" y="210" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">ZERO-COPY FLATBUFFERS</text>

                  <path d="M 200 130 L 250 130" stroke="#00F0FF" strokeWidth="1.5" markerEnd="url(#ch2-arrow)" />

                  {/* Stage 2 */}
                  <rect x="260" y="20" width="180" height="220" rx="4" fill="#0D111A" stroke="rgba(255,255,255,0.12)" />
                  <text x="275" y="46" fill="#00F0FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">STAGE 02: ROUTER</text>
                  <text x="275" y="66" fill="#FFFFFF" fontSize="12" fontWeight="bold">Thalamus & Claustrum</text>
                  <line x1="275" y1="78" x2="425" y2="78" stroke="rgba(255,255,255,0.08)" />
                  <text x="275" y="98" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Claustrum (39.97 Hz)</text>
                  <text x="275" y="116" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Thalamic Reticular (TRN)</text>
                  <text x="275" y="134" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Medulla Solitary Tract</text>
                  <text x="275" y="152" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Dynamic Attention Gating</text>
                  <text x="275" y="170" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• ScriptAllocator Memory</text>
                  <text x="275" y="188" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 0 OS Heap Allocations</text>
                  <text x="275" y="210" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">SYNCHRONIZED FRAMES</text>

                  <path d="M 440 130 L 490 130" stroke="#00F0FF" strokeWidth="1.5" markerEnd="url(#ch2-arrow)" />

                  {/* Stage 3 */}
                  <rect x="500" y="20" width="180" height="220" rx="4" fill="#0D111A" stroke="#00F0FF" strokeWidth="1.2" />
                  <text x="515" y="46" fill="#00F0FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">STAGE 03: CONNECTOME</text>
                  <text x="515" y="66" fill="#FFFFFF" fontSize="12" fontWeight="bold">360 HCP Parcels</text>
                  <line x1="515" y1="78" x2="665" y2="78" stroke="rgba(255,255,255,0.08)" />
                  <text x="515" y="98" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 180 L / 180 R Bilateral</text>
                  <text x="515" y="116" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 8,862 Tract Pathways</text>
                  <text x="515" y="134" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 6-Layer Laminar (L1-L6)</text>
                  <text x="515" y="152" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 6-Tier LMDB Graph</text>
                  <text x="515" y="170" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Constant Time O(1)</text>
                  <text x="515" y="188" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Continuous Memory</text>
                  <text x="515" y="210" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">C++20/23 DETERMINISTIC</text>

                  <path d="M 680 130 L 730 130" stroke="#10B981" strokeWidth="1.5" markerEnd="url(#ch2-arrow-green)" />

                  {/* Stage 4 */}
                  <rect x="740" y="20" width="120" height="220" rx="4" fill="#0D111A" stroke="rgba(255,255,255,0.12)" />
                  <text x="752" y="46" fill="#10B981" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">STAGE 04</text>
                  <text x="752" y="66" fill="#FFFFFF" fontSize="12" fontWeight="bold">Motor Efferent</text>
                  <line x1="752" y1="78" x2="845" y2="78" stroke="rgba(255,255,255,0.08)" />
                  <text x="752" y="98" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Betz Cells</text>
                  <text x="752" y="116" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Spinal Pools</text>
                  <text x="752" y="134" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• 28 Actuators</text>
                  <text x="752" y="152" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• ZMP Balance</text>
                  <text x="752" y="170" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• VOR Reflex</text>
                  <text x="752" y="188" fill="#94A3B8" fontSize="9" fontFamily="JetBrains Mono">• Vocal Speech</text>
                  <text x="752" y="210" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono">&lt; 1.0ms LATENCY</text>
                </svg>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-normal">
                Sensory streams from 24 biophysical transducers are packaged into zero-copy FlatBuffers buffers, routed via Thalamic reticular gating at 40 Hz, processed through 360 cortical parcels and 6-tier LMDB memory, and output to motor efferents in under 1 millisecond.
              </div>
            </div>
          </div>
        )}

        {/* SUB-SECTION 2.2: BENCHMARKS TABLE */}
        {activeSubTab === 'benchmarks' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
              <div className="text-xs font-mono text-white font-semibold">
                TABLE 2.1 — ARCHITECTURAL BENCHMARK: FRONTIER LLMS VS. BUDDY SYNTHETIC MIND
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1] text-slate-400 font-mono text-[11px]">
                      <th className="py-2.5 px-3">Dimension</th>
                      <th className="py-2.5 px-3 text-rose-400">Legacy Frontier LLM</th>
                      <th className="py-2.5 px-3 text-[#00F0FF]">Buddy Synthetic Brain</th>
                      <th className="py-2.5 px-3">Physical Consequence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-slate-300">
                    {DATACENTER_BENCHMARK_MATRIX.map((row) => (
                      <tr key={row.parameter} className="hover:bg-white/[0.02]">
                        <td className="py-3 px-3 font-mono font-semibold text-white whitespace-nowrap">
                          {row.parameter}
                        </td>
                        <td className="py-3 px-3 text-rose-300 font-mono text-[11px]">
                          {row.legacyFrontierLLM}
                        </td>
                        <td className="py-3 px-3 text-[#00F0FF] font-mono text-[11px] font-semibold">
                          {row.buddyBiomimeticMind}
                        </td>
                        <td className="py-3 px-3 text-slate-400 text-xs">
                          {row.architecturalAdvantage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-SECTION 2.3: LAMINAR COLUMN */}
        {activeSubTab === 'laminar' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
              <div className="text-xs font-mono text-white font-semibold">
                TABLE 2.2 — 6-LAYER LAMINAR MICROCIRCUITS (CANONICAL HCP COLUMN L1–L6)
              </div>

              <div className="space-y-3">
                {LAMINAR_LAYERS.map((layer) => (
                  <div key={layer.layer} className="p-4 bg-[#07090E] border border-white/[0.06] rounded text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#00F0FF] font-semibold">{layer.layer}: {layer.name}</span>
                      <span className="font-mono text-slate-500">Thickness: {layer.thickness}</span>
                    </div>
                    <div className="text-slate-400">
                      <span className="text-slate-500">Cellular Composition: </span>
                      {layer.cellularComposition}
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">Dynamics: </span>
                      {layer.biophysicalDynamics}
                    </div>
                    <div className="text-emerald-400 font-mono text-[11px]">
                      LFP Spectral Band: {layer.spectralSignature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-SECTION 2.4: 24 SENSORIUM TRANSDUCERS */}
        {activeSubTab === 'transducers' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-4">
              <div className="text-xs font-mono text-white font-semibold">
                TABLE 2.3 — 24 BIOPHYSICAL SENSORIUM TRANSDUCERS (include/core_substrate/sensors/)
              </div>

              <div className="overflow-x-auto max-h-[460px] overflow-y-auto scrollbar-none">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1] text-slate-400 font-mono text-[11px] sticky top-0 bg-[#0A0D15]">
                      <th className="py-2 px-3">Transducer Name</th>
                      <th className="py-2 px-3">Modality</th>
                      <th className="py-2 px-3">Rate</th>
                      <th className="py-2 px-3">Latency</th>
                      <th className="py-2 px-3">Robotics Coupling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-slate-300">
                    {BIOPHYSICAL_TRANSDUCERS.map((t) => (
                      <tr key={t.id} className="hover:bg-white/[0.02]">
                        <td className="py-2.5 px-3">
                          <span className="font-semibold text-white block">{t.name}</span>
                          <span className="text-[10px] font-mono text-slate-500 truncate max-w-[200px] block">{t.header}</span>
                        </td>
                        <td className="py-2.5 px-3 text-slate-400 text-xs">{t.modality}</td>
                        <td className="py-2.5 px-3 font-mono text-[#00F0FF]">{t.sampleRate}</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-400">{t.latencyBudget}</td>
                        <td className="py-2.5 px-3 text-slate-300 text-xs">{t.roboticsCoupling}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-SECTION 2.5: NEUROCHEMISTRY & PACEMAKERS */}
        {activeSubTab === 'receptors' && (
          <div className="space-y-4">
            <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-6">
              <div>
                <div className="text-xs font-mono text-white font-semibold mb-3">
                  TABLE 2.4 — 16 PHARMACOLOGICAL RECEPTOR OCCUPANCY GAUGES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto scrollbar-none">
                  {NEUROCHEMICAL_GAUGES.map((g) => (
                    <div key={g.id} className="p-3 bg-[#07090E] border border-white/[0.06] rounded text-xs space-y-1">
                      <div className="flex justify-between font-mono">
                        <span className="text-white font-semibold">{g.name}</span>
                        <span className="text-[#00F0FF]">{g.baselineOccupancy}</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">{g.role}</div>
                      <div className="text-slate-500 text-[10px] font-mono">Target: {g.targetReceptor}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-white font-semibold mb-3">
                  TABLE 2.5 — 12 SUBCORTICAL PACEMAKER NUCLEI
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto scrollbar-none">
                  {SUBCORTICAL_NUCLEI.map((n) => (
                    <div key={n.id} className="p-3 bg-[#07090E] border border-white/[0.06] rounded text-xs space-y-1">
                      <div className="flex justify-between font-mono">
                        <span className="text-white font-semibold">{n.name}</span>
                        <span className="text-emerald-400">{n.pacemakerFrequency}</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">{n.biologicalFunction}</div>
                      <div className="text-slate-500 text-[10px] font-mono">Projection: {n.anatomicalTarget}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
          <button
            onClick={onOpenWhitepaperModal}
            className="px-4 py-2 bg-white text-slate-900 font-semibold rounded hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Request Full Biomimetic Whitepaper</span>
          </button>
          <button
            onClick={onOpenDemoModal}
            className="px-4 py-2 bg-[#0A0D15] text-[#00F0FF] border border-[#00F0FF]/30 rounded hover:bg-[#00F0FF]/10 transition-colors flex items-center gap-2"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Schedule Robotics Demonstration</span>
          </button>
        </div>
      </div>
    </article>
  );
};
