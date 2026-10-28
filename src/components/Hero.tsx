// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Cpu, Zap, Activity, HardDrive } from 'lucide-react';
import { CANONICAL_METRICS, COMPANY_DOMAINS } from '../data/canonicalData';

interface HeroProps {
  onOpenWhitepaperModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhitepaperModal }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 650;
    };

    window.addEventListener('resize', handleResize);

    // Generate topological neural nodes
    const nodeCount = Math.min(width < 768 ? 40 : 75, 90);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      phase: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        baseAlpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective synaptic pathways
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw neural parcel nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dynamicAlpha = node.baseAlpha + Math.sin(time * node.pulseSpeed + node.phase) * 0.2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${Math.max(0.08, dynamicAlpha)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden technical-grid">
      {/* 60fps Interactive Ambient Neural Mesh Canvas (pointer-events-none) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
      />

      {/* Atmospheric radial gradient spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00F0FF]/[0.035] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Institutional Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.09] rounded-full text-xs font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          <span>ANYONE-HUB LLC // DEEP-TECH R&D APEX</span>
          <span className="text-slate-600">|</span>
          <span className="text-[#00F0FF]">{CANONICAL_METRICS.powerEnvelope} SOVEREIGN COMPUTE</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto text-balance">
          Engineering Sovereign Intelligence, Local-First Developer Systems, and Zero-Latency Hardware.
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Anyone-Hub LLC is an independent deep-tech research and software engineering company building true biological-parity synthetic cognition (<span className="text-white font-semibold">Buddy</span>), next-generation mobile & wearable developer platforms (<span className="text-white font-semibold">AnyOne-Hub</span>), GPU-accelerated digital audio workstations (<span className="text-white font-semibold">PhaseForm</span>), and zero-paywall open-source infrastructure.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#pillars"
            className="px-6 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded transition-all flex items-center gap-2 shadow-lg hover:shadow-white/10"
          >
            <span>Explore 6 Product Pillars</span>
            <ArrowDown className="w-4 h-4 text-slate-900" />
          </a>

          <button
            onClick={onOpenWhitepaperModal}
            className="px-6 py-3 text-sm font-medium text-white bg-[#0D111A] hover:bg-[#131926] border border-white/[0.12] hover:border-[#00F0FF]/50 rounded transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#00F0FF]" />
            <span>Buddy Biomimetic Whitepaper</span>
          </button>

          <a
            href={COMPANY_DOMAINS.platformPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-sm font-mono text-emerald-400 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 rounded transition-all flex items-center gap-2"
          >
            <span>Launch Portal (anyonehub.us.kg)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Verified Technical Telemetry Cards */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-[#0D111A]/90 border border-white/[0.08] p-4 rounded relative group hover:border-[#00F0FF]/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-1">
              <span>CORE ARCHITECTURE</span>
              <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {CANONICAL_METRICS.linesOfCode}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Hand-authored C++20/23 & TS LOC ({CANONICAL_METRICS.handAuthoredFiles} files)
            </div>
          </div>

          <div className="bg-[#0D111A]/90 border border-white/[0.08] p-4 rounded relative group hover:border-emerald-400/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-1">
              <span>CORTICAL PARCELS</span>
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {CANONICAL_METRICS.bilateralParcels} HCP
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Human Connectome Project MMP 1.0 (180 L / 180 R)
            </div>
          </div>

          <div className="bg-[#0D111A]/90 border border-white/[0.08] p-4 rounded relative group hover:border-amber-400/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-1">
              <span>ENERGY ENVELOPE</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              {CANONICAL_METRICS.powerEnvelope}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Biological parity vs Megawatts for frontier LLMs
            </div>
          </div>

          <div className="bg-[#0D111A]/90 border border-white/[0.08] p-4 rounded relative group hover:border-violet-400/40 transition-colors">
            <div className="flex items-center justify-between text-slate-500 text-xs font-mono mb-1">
              <span>HOT-PATH DETERMINISM</span>
              <HardDrive className="w-3.5 h-3.5 text-violet-400" />
            </div>
            <div className="text-2xl font-bold font-mono text-white tabular-nums">
              0 OS Heap
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Zero heap allocations in the 40 Hz gamma loop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
