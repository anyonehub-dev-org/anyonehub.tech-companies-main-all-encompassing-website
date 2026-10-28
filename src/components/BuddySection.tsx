// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Activity, 
  Database, 
  ShieldCheck, 
  FileText, 
  Sliders, 
  Terminal, 
  Bot, 
  GitBranch,
  Radio,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { 
  CANONICAL_METRICS, 
  DATACENTER_BENCHMARK_MATRIX, 
  BIOPHYSICAL_TRANSDUCERS, 
  NEUROCHEMICAL_GAUGES, 
  SUBCORTICAL_NUCLEI, 
  LAMINAR_LAYERS,
  COMPANY_DOMAINS
} from '../data/canonicalData';

interface BuddySectionProps {
  onOpenWhitepaperModal: () => void;
  onOpenDemoModal: () => void;
}

export const BuddySection: React.FC<BuddySectionProps> = ({
  onOpenWhitepaperModal,
  onOpenDemoModal,
}) => {
  const [activeTab, setActiveTab] = useState<
    'architecture' | 'comparison' | 'transducers' | 'neurochemistry' | 'laminar'
  >('architecture');

  const [selectedSchematicNode, setSelectedSchematicNode] = useState<string>('cortex');
  const [searchTransducer, setSearchTransducer] = useState('');
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  const filteredTransducers = BIOPHYSICAL_TRANSDUCERS.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTransducer.toLowerCase()) ||
      t.modality.toLowerCase().includes(searchTransducer.toLowerCase()) ||
      t.header.toLowerCase().includes(searchTransducer.toLowerCase())
  );

  return (
    <section id="buddy" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative technical-grid">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider flex items-center gap-2">
              <span>PILLAR 02</span>
              <span className="text-slate-600">/</span>
              <span>FLAGSHIP DEEP-TECH R&D</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">BARE-METAL C++20/23 SYNTHETIC MIND</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              BUDDY: Foundational Biomimetic Synthetic Brain
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A biologically grounded, non-transformer synthetic nervous system engineered for bipedal humanoid robotics and autonomous sovereign edge intelligence. Modeled directly on the 360 bilateral parcels of the Human Connectome Project, 6-tier LMDB associative memory, and a 40 Hz gamma-locked pacemaker.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenWhitepaperModal}
              className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded flex items-center gap-2 transition-all shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Whitepaper (PDF)</span>
            </button>
            <button
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20 border border-[#00F0FF]/30 rounded flex items-center gap-2 transition-all"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Schedule Robotics Demo</span>
            </button>
          </div>
        </div>

        {/* System Scale & Verification Ledger */}
        <div className="bg-[#0A0D15] border border-white/[0.1] rounded-lg p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>CANONICAL SYSTEM SCALE & VERIFICATION LEDGER</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              SCHEMA PROTOCOL: <span className="text-slate-300">FLATBUFFERS BVZ1</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-left">
            <div>
              <div className="text-xs font-mono text-slate-400">SOURCE REPO</div>
              <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                {CANONICAL_METRICS.handAuthoredFiles}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Hand-authored files</div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">CORE CODEBASE</div>
              <div className="text-xl font-bold font-mono text-[#00F0FF] tabular-nums mt-0.5">
                {CANONICAL_METRICS.linesOfCode}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">LOC (C++20/23 & TS)</div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">WIRE SCHEMAS</div>
              <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                {CANONICAL_METRICS.flatBuffersSchemas}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Zero-copy FlatBuffers</div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">SYNAPTIC CIRCUITS</div>
              <div className="text-xl font-bold font-mono text-white tabular-nums mt-0.5">
                {CANONICAL_METRICS.angelScriptCircuits}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">AngelScript microcircuits</div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">TEST SUITES</div>
              <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mt-0.5">
                {CANONICAL_METRICS.crucibleTestSuites}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Crucible zero-regression</div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">ENERGY BUDGET</div>
              <div className="text-xl font-bold font-mono text-amber-400 tabular-nums mt-0.5">
                {CANONICAL_METRICS.powerEnvelope}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Total steady-state draw</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="truncate max-w-full">
              <span className="text-slate-400">GEOMETRY LOCK SHA-256: </span>
              <span className="text-slate-300 select-all font-mono">
                {CANONICAL_METRICS.geometryLockDigest}
              </span>
            </div>
            <div className="shrink-0">
              <span className="text-slate-400">WIRE HASH: </span>
              <span className="text-[#00F0FF] font-mono">{CANONICAL_METRICS.wireHash}</span>
            </div>
          </div>
        </div>

        {/* Multi-Panel Enterprise Dossier Navigation Tabs */}
        <div className="flex items-center gap-1 p-1 bg-[#090C12] border border-white/[0.08] rounded-lg overflow-x-auto whitespace-nowrap scrollbar-none">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 text-xs font-medium rounded transition-colors flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-white/[0.1] text-white border border-white/[0.15]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>01. System Dataflow Schematic</span>
          </button>

          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 text-xs font-medium rounded transition-colors flex items-center gap-2 ${
              activeTab === 'comparison'
                ? 'bg-white/[0.1] text-white border border-white/[0.15]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>02. Datacenter Crisis Comparison</span>
          </button>

          <button
            onClick={() => setActiveTab('laminar')}
            className={`px-4 py-2 text-xs font-medium rounded transition-colors flex items-center gap-2 ${
              activeTab === 'laminar'
                ? 'bg-white/[0.1] text-white border border-white/[0.15]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>03. 6-Layer Laminar Column (L1–L6)</span>
          </button>

          <button
            onClick={() => setActiveTab('transducers')}
            className={`px-4 py-2 text-xs font-medium rounded transition-colors flex items-center gap-2 ${
              activeTab === 'transducers'
                ? 'bg-white/[0.1] text-white border border-white/[0.15]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-emerald-400" />
            <span>04. 24 Sensorium Transducers (Humanoid)</span>
          </button>

          <button
            onClick={() => setActiveTab('neurochemistry')}
            className={`px-4 py-2 text-xs font-medium rounded transition-colors flex items-center gap-2 ${
              activeTab === 'neurochemistry'
                ? 'bg-white/[0.1] text-white border border-white/[0.15]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-violet-400" />
            <span>05. Neurochemistry & Pacemakers</span>
          </button>
        </div>

        {/* TAB 1: SYSTEM DATAFLOW SCHEMATIC (Crisp High-Precision SVG + Interactive Node Inspector) */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Closed-Loop Cognition Dataflow Architecture</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 rounded">
                      40 Hz GAMMA LOCKED
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Click any architectural module in the schematic to inspect its bare-metal substrate interfaces, C++ headers, and memory guarantees.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>HOT PATH: ZERO OS HEAP ALLOCATIONS</span>
                </div>
              </div>

              {/* High-Precision SVG Schematic */}
              <div className="overflow-x-auto py-4">
                <svg
                  viewBox="0 0 960 380"
                  className="w-full min-w-[780px] h-auto select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines */}
                  <defs>
                    <pattern id="arch-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    </pattern>
                    <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                    </linearGradient>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00F0FF" />
                    </marker>
                    <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10B981" />
                    </marker>
                  </defs>

                  <rect width="960" height="380" fill="url(#arch-grid)" rx="6" />

                  {/* Stage 1: 24 Biophysical Sensorium Transducers */}
                  <g
                    onClick={() => setSelectedSchematicNode('transducers')}
                    className="cursor-pointer transition-opacity hover:opacity-90"
                  >
                    <rect
                      x="30"
                      y="40"
                      width="180"
                      height="300"
                      rx="6"
                      fill="#0D111A"
                      stroke={selectedSchematicNode === 'transducers' ? '#00F0FF' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={selectedSchematicNode === 'transducers' ? '2' : '1'}
                    />
                    <text x="50" y="70" fill="#00F0FF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                      STAGE 01: SENSORIUM
                    </text>
                    <text x="50" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      24 Biophysical
                    </text>
                    <text x="50" y="110" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      Transducers
                    </text>
                    <line x1="50" y1="124" x2="190" y2="124" stroke="rgba(255,255,255,0.1)" />

                    <text x="50" y="145" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Retinal (120Hz Luminance)</text>
                    <text x="50" y="165" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Cochlear (48kHz Tonotopic)</text>
                    <text x="50" y="185" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Vestibular (1kHz Otolith)</text>
                    <text x="50" y="205" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Muscle Spindles (500Hz)</text>
                    <text x="50" y="225" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Golgi Tendon Organs</text>
                    <text x="50" y="245" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Baro & Chemoreceptors</text>
                    <text x="50" y="265" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Nociceptive Reflex Arcs</text>
                    <text x="50" y="285" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Haptic & Shear Friction</text>

                    <rect x="50" y="302" width="140" height="22" rx="3" fill="rgba(0,240,255,0.1)" />
                    <text x="60" y="316" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">
                      INSPECTION ACTIVE [CLICK]
                    </text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <path d="M 210 190 L 260 190" stroke="#00F0FF" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2: Medulla / Thalamic 40Hz Router & Claustrum */}
                  <g
                    onClick={() => setSelectedSchematicNode('thalamus')}
                    className="cursor-pointer transition-opacity hover:opacity-90"
                  >
                    <rect
                      x="270"
                      y="40"
                      width="180"
                      height="300"
                      rx="6"
                      fill="#0D111A"
                      stroke={selectedSchematicNode === 'thalamus' ? '#00F0FF' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={selectedSchematicNode === 'thalamus' ? '2' : '1'}
                    />
                    <text x="290" y="70" fill="#00F0FF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                      STAGE 02: PACEMAKER
                    </text>
                    <text x="290" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      Thalamus & Claustrum
                    </text>
                    <text x="290" y="110" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      40 Hz Gamma Router
                    </text>
                    <line x1="290" y1="124" x2="430" y2="124" stroke="rgba(255,255,255,0.1)" />

                    <text x="290" y="145" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Claustrum (39.97 Hz)</text>
                    <text x="290" y="165" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Thalamic Reticular (TRN)</text>
                    <text x="290" y="185" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Dynamic Attention Gating</text>
                    <text x="290" y="205" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Medulla Solitary Tract</text>
                    <text x="290" y="225" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 16 Neurochemical Gauges</text>
                    <text x="290" y="245" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Locus Coeruleus / Raphe</text>
                    <text x="290" y="265" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Zero OS Heap ScriptAlloc</text>
                    <text x="290" y="285" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• FlatBuffers 0xe0eca0f4</text>

                    <rect x="290" y="302" width="140" height="22" rx="3" fill="rgba(0,240,255,0.1)" />
                    <text x="300" y="316" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">
                      INSPECTION ACTIVE [CLICK]
                    </text>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <path d="M 450 190 L 500 190" stroke="#00F0FF" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 3: 360 Bilateral HCP Cortical Parcels & 6-Tier LMDB */}
                  <g
                    onClick={() => setSelectedSchematicNode('cortex')}
                    className="cursor-pointer transition-opacity hover:opacity-90"
                  >
                    <rect
                      x="510"
                      y="40"
                      width="200"
                      height="300"
                      rx="6"
                      fill="#0D111A"
                      stroke={selectedSchematicNode === 'cortex' ? '#00F0FF' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={selectedSchematicNode === 'cortex' ? '2' : '1'}
                    />
                    <text x="530" y="70" fill="#00F0FF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                      STAGE 03: CONNECTOME
                    </text>
                    <text x="530" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      360 HCP Parcels
                    </text>
                    <text x="530" y="110" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      & 6-Tier LMDB Memory
                    </text>
                    <line x1="530" y1="124" x2="690" y2="124" stroke="rgba(255,255,255,0.1)" />

                    <text x="530" y="145" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 180 Left / 180 Right Parcels</text>
                    <text x="530" y="165" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 8,862 Connectome Pathways</text>
                    <text x="530" y="185" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 6-Layer Laminar (L1–L6)</text>
                    <text x="530" y="205" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Hippocampus DG/CA3/CA1</text>
                    <text x="530" y="225" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Basal Ganglia Motor Gate</text>
                    <text x="530" y="245" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• T1-T6 Collinear Tiers</text>
                    <text x="530" y="265" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Constant-Time O(1) Graph</text>
                    <text x="530" y="285" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Continuous Learning</text>

                    <rect x="530" y="302" width="160" height="22" rx="3" fill="rgba(0,240,255,0.1)" />
                    <text x="540" y="316" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono">
                      INSPECTION ACTIVE [CLICK]
                    </text>
                  </g>

                  {/* Arrow 3 -> 4 */}
                  <path d="M 710 190 L 760 190" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow-emerald)" />

                  {/* Stage 4: Corticospinal & Autonomic Efferents (Bipedal Actuation) */}
                  <g
                    onClick={() => setSelectedSchematicNode('efferents')}
                    className="cursor-pointer transition-opacity hover:opacity-90"
                  >
                    <rect
                      x="770"
                      y="40"
                      width="160"
                      height="300"
                      rx="6"
                      fill="#0D111A"
                      stroke={selectedSchematicNode === 'efferents' ? '#10B981' : 'rgba(255,255,255,0.12)'}
                      strokeWidth={selectedSchematicNode === 'efferents' ? '2' : '1'}
                    />
                    <text x="790" y="70" fill="#10B981" fontSize="11" fontFamily="JetBrains Mono" fontWeight="600">
                      STAGE 04: EFFERENTS
                    </text>
                    <text x="790" y="92" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      Corticospinal &
                    </text>
                    <text x="790" y="110" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                      Motor Robotics
                    </text>
                    <line x1="790" y1="124" x2="910" y2="124" stroke="rgba(255,255,255,0.1)" />

                    <text x="790" y="145" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Anterior Horn Motor Pools</text>
                    <text x="790" y="165" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• 28 Bipedal Joint Actuators</text>
                    <text x="790" y="185" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Cerebellar Forward Models</text>
                    <text x="790" y="205" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• VOR Gaze Stabilization</text>
                    <text x="790" y="225" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Monosynaptic Stretch Refl.</text>
                    <text x="790" y="245" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Real-time ZMP Walking</text>
                    <text x="790" y="265" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Vocal Laryngeal Speech</text>
                    <text x="790" y="285" fill="#94A3B8" fontSize="10" fontFamily="JetBrains Mono">• Sub-1ms Latency Loop</text>

                    <rect x="790" y="302" width="120" height="22" rx="3" fill="rgba(16,185,129,0.1)" />
                    <text x="800" y="316" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono">
                      INSPECTION ACTIVE [CLICK]
                    </text>
                  </g>
                </svg>
              </div>

              {/* Node Inspector Detailed Drawer */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] bg-[#07090E] p-4 rounded border border-white/[0.06]">
                {selectedSchematicNode === 'transducers' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#00F0FF] font-bold">
                        [INSPECTOR: STAGE 01 // 24 BIOPHYSICAL SENSORIUM TRANSDUCERS]
                      </span>
                      <span className="font-mono text-slate-500">include/core_substrate/sensors/</span>
                    </div>
                    <p className="text-slate-300">
                      Raw physical transducers modeled after human sensory anatomy. Converts optical photons, acoustic sound pressure, mechanical strain, visceral vagal pressures, and joint encoder telemetry into zero-copy FlatBuffers wire buffers serialized directly into the Thalamic core router.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono text-slate-400">
                      <div>SAMPLING: <span className="text-white">Up to 48kHz (Audio) / 1kHz (IMU)</span></div>
                      <div>LATENCY: <span className="text-emerald-400">1.0ms – 8.3ms max</span></div>
                      <div>FORMAT: <span className="text-white">BVZ1 FlatBuffers Zero-Copy</span></div>
                      <div>EMBODIMENT: <span className="text-white">Bipedal Humanoid Robotics</span></div>
                    </div>
                  </div>
                )}

                {selectedSchematicNode === 'thalamus' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#00F0FF] font-bold">
                        [INSPECTOR: STAGE 02 // 40 HZ CLAUSTRUM & THALAMIC PACEMAKER]
                      </span>
                      <span className="font-mono text-slate-500">include/core_substrate/pacemaker/</span>
                    </div>
                    <p className="text-slate-300">
                      Synchronizes all 360 cortical parcels into coherent 25-millisecond conscious perceptual frames via a 39.97 Hz Claustrum gamma clock. Routes sensory streams through the Thalamic Reticular Nucleus (TRN) for dynamic attentional filtering without allocating a single byte on the OS heap.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono text-slate-400">
                      <div>CLOCK LOCK: <span className="text-white">39.97 Hz Gamma Synchrony</span></div>
                      <div>HEAP CHURN: <span className="text-emerald-400">0 Allocations in Hot Path</span></div>
                      <div>ATTENTION: <span className="text-white">TRN Reticular Gating</span></div>
                      <div>ALLOCATOR: <span className="text-white">ScriptAllocator (Pre-bounded)</span></div>
                    </div>
                  </div>
                )}

                {selectedSchematicNode === 'cortex' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#00F0FF] font-bold">
                        [INSPECTOR: STAGE 03 // 360 HCP PARCELS & 6-TIER LMDB MEMORY]
                      </span>
                      <span className="font-mono text-slate-500">include/core_substrate/cortex/</span>
                    </div>
                    <p className="text-slate-300">
                      Full bilateral cortical architecture adhering to the Human Connectome Project (HCP-MMP 1.0: 180 Left / 180 Right Hemisphere). Backed by 8,862 structural pathways, 6 laminar layers (L1–L6), and a 6-tier LMDB non-linear associative graph memory for continuous lifelong autobiographical retention.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono text-slate-400">
                      <div>PARCELS: <span className="text-white">360 Bilateral HCP-MMP 1.0</span></div>
                      <div>CONNECTIVITY: <span className="text-white">8,862 Canonical Pathways</span></div>
                      <div>MEMORY ENGINE: <span className="text-[#00F0FF]">6-Tier LMDB Graph (O(1))</span></div>
                      <div>CIRCUITS: <span className="text-white">365 Synaptic AngelScript Nodes</span></div>
                    </div>
                  </div>
                )}

                {selectedSchematicNode === 'efferents' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-emerald-400 font-bold">
                        [INSPECTOR: STAGE 04 // CORTICOSPINAL & AUTONOMIC MOTOR EFFERENTS]
                      </span>
                      <span className="font-mono text-slate-500">include/core_substrate/motor/</span>
                    </div>
                    <p className="text-slate-300">
                      Translates cortical Layer 5 Betz giant cell outputs into monosynaptic alpha motor neuron drive and autonomic vagal regulation. Controls 28 harmonic-drive actuators on humanoid limbs with real-time zero-moment point (ZMP) stability calculations and sub-millisecond cerebellar predictive error correction.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono text-slate-400">
                      <div>ACTUATION: <span className="text-white">28 Joint Harmonic Drives</span></div>
                      <div>POSTURE: <span className="text-white">Real-Time ZMP Gait Engine</span></div>
                      <div>REFLEX ARCS: <span className="text-emerald-400">&lt; 1.0 ms Monosynaptic</span></div>
                      <div>SPEECH: <span className="text-white">Vocal Laryngeal 48kHz Output</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DATACENTER CRISIS COMPARISON TABLE */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8 space-y-6">
              <div className="max-w-2xl">
                <h3 className="text-base font-bold text-white">
                  Datacenter Compute Crisis vs. Biomimetic Sovereign Parity
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Why scaling static transformer matrix multiplication in megawatt datacenters is a dead end for embodied robotics, and how Buddy achieves biological parity on 20 watts of local power.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.12] text-slate-400 font-mono">
                      <th className="py-3 px-4 uppercase text-[11px]">Architectural Dimension</th>
                      <th className="py-3 px-4 uppercase text-[11px] text-rose-400">
                        Legacy Frontier LLMs (OpenAI, Anthropic, Google)
                      </th>
                      <th className="py-3 px-4 uppercase text-[11px] text-[#00F0FF]">
                        BUDDY Biomimetic Mind (Anyone-Hub LLC)
                      </th>
                      <th className="py-3 px-4 uppercase text-[11px] text-slate-300">
                        Sovereign Engineering Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-slate-300">
                    {DATACENTER_BENCHMARK_MATRIX.map((row) => (
                      <tr key={row.parameter} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-mono font-semibold text-white whitespace-nowrap">
                          {row.parameter}
                        </td>
                        <td className="py-3.5 px-4 text-rose-300 font-mono">
                          {row.legacyFrontierLLM}
                        </td>
                        <td className="py-3.5 px-4 text-[#00F0FF] font-mono font-semibold">
                          {row.buddyBiomimeticMind}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-400">
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

        {/* TAB 3: 6-LAYER LAMINAR MICROCIRCUIT COLUMN (L1–L6) */}
        {activeTab === 'laminar' && (
          <div className="space-y-6">
            <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>6-Layer Laminar Cortical Microcircuit Column (L1–L6)</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded">
                      CEREBRAL CORTICAL COLUMN
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Every one of Buddy's 360 bilateral parcels implements this physiological 6-layer canonical microcircuit, computing localized dendritic plateaus and recurrent attractor states.
                  </p>
                </div>

                <div className="text-xs font-mono text-slate-500">
                  STANDARD COLUMN THICKNESS: <span className="text-white">2.50 mm</span>
                </div>
              </div>

              {/* Interactive Layer Selector Rails */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-2">
                  {LAMINAR_LAYERS.map((layer, idx) => (
                    <button
                      key={layer.layer}
                      onClick={() => setSelectedLayerIndex(idx)}
                      className={`w-full text-left p-3 rounded border transition-all flex items-center justify-between ${
                        selectedLayerIndex === idx
                          ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-white'
                          : 'bg-[#07090E] border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-mono font-bold">{layer.layer}</div>
                        <div className="text-xs text-slate-300">{layer.name}</div>
                      </div>
                      <div className="text-[11px] font-mono text-slate-500">
                        {layer.thickness}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Layer Detail Inspector */}
                <div className="lg:col-span-8 bg-[#07090E] border border-white/[0.1] rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div>
                      <span className="text-xs font-mono text-[#00F0FF] uppercase">
                        {LAMINAR_LAYERS[selectedLayerIndex].layer}
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        {LAMINAR_LAYERS[selectedLayerIndex].name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-400">DEPTH DEPTH</div>
                      <div className="text-sm font-mono font-semibold text-white">
                        {LAMINAR_LAYERS[selectedLayerIndex].thickness}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1">CELLULAR COMPOSITION</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {LAMINAR_LAYERS[selectedLayerIndex].cellularComposition}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-1">BIOPHYSICAL DYNAMICS</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {LAMINAR_LAYERS[selectedLayerIndex].biophysicalDynamics}
                    </p>
                  </div>

                  <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">SPECTRAL LFP SIGNATURE:</span>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {LAMINAR_LAYERS[selectedLayerIndex].spectralSignature}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: 24 BIOPHYSICAL SENSORIUM TRANSDUCERS (ROBOTICS EMBODIMENT) */}
        {activeTab === 'transducers' && (
          <div className="space-y-6">
            <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 lg:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>24 Biophysical Sensorium Transducers Matrix</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                      BIPEDAL ROBOTICS SUITE
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Complete listing of all 24 C++20/23 sensorium transducers located in <code className="text-slate-300">include/core_substrate/sensors/</code>.
                  </p>
                </div>

                <div className="w-full md:w-64">
                  <input
                    type="text"
                    value={searchTransducer}
                    onChange={(e) => setSearchTransducer(e.target.value)}
                    placeholder="Search 24 transducers..."
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.12] text-slate-400 font-mono text-[11px]">
                      <th className="py-2.5 px-3">Transducer Name</th>
                      <th className="py-2.5 px-3">Modality & Dynamics</th>
                      <th className="py-2.5 px-3">Rate</th>
                      <th className="py-2.5 px-3">Latency</th>
                      <th className="py-2.5 px-3">Robotics Actuator Coupling</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-slate-300">
                    {filteredTransducers.map((t) => (
                      <tr key={t.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3">
                          <div className="font-semibold text-white">{t.name}</div>
                          <div className="font-mono text-[10px] text-slate-400 truncate max-w-[220px]">
                            {t.header}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-xs text-slate-400">
                          {t.modality}
                        </td>
                        <td className="py-3 px-3 font-mono text-[#00F0FF] whitespace-nowrap">
                          {t.sampleRate}
                        </td>
                        <td className="py-3 px-3 font-mono text-emerald-400 whitespace-nowrap">
                          {t.latencyBudget}
                        </td>
                        <td className="py-3 px-3 text-xs text-slate-300">
                          {t.roboticsCoupling}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: 16 NEUROCHEMICAL GAUGES & 12 SUBCORTICAL NUCLEI */}
        {activeTab === 'neurochemistry' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: 16 Receptor Occupancy Gauges */}
              <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="text-xs font-mono text-[#00F0FF] font-semibold">
                    16 RECEPTOR OCCUPANCY GAUGES
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    PHARMACOLOGICAL PARITY
                  </div>
                </div>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2 scrollbar-none">
                  {NEUROCHEMICAL_GAUGES.map((gauge) => (
                    <div key={gauge.id} className="bg-[#07090E] p-3 rounded border border-white/[0.06] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{gauge.name}</span>
                        <span className="font-mono text-[#00F0FF] font-bold">{gauge.baselineOccupancy}</span>
                      </div>
                      <div className="w-full bg-white/[0.08] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#00F0FF] to-blue-500 h-full rounded-full"
                          style={{ width: gauge.baselineOccupancy }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Range: {gauge.dynamicRange}</span>
                        <span className="truncate max-w-[200px]">{gauge.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 12 Subcortical Nuclei */}
              <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="text-xs font-mono text-emerald-400 font-semibold">
                    12 SUBCORTICAL NUCLEI & PACEMAKERS
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    40 Hz GAMMA HOT PATH
                  </div>
                </div>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2 scrollbar-none">
                  {SUBCORTICAL_NUCLEI.map((nucleus) => (
                    <div key={nucleus.id} className="bg-[#07090E] p-3 rounded border border-white/[0.06] space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{nucleus.name}</span>
                        <span className="font-mono text-emerald-400 font-semibold">{nucleus.pacemakerFrequency}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Target: <span className="text-slate-300 font-mono">{nucleus.anatomicalTarget}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        {nucleus.biologicalFunction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
