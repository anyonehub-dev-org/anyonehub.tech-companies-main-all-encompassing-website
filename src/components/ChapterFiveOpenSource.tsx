// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Package, Copy, Check, ExternalLink, QrCode, Contact2, Lock } from 'lucide-react';
import { SAMPLE_GRADLE_SNIPPET, ABL_SAMPLE_SNIPPET, COMPANY_DOMAINS } from '../data/canonicalData';

export const ChapterFiveOpenSource: React.FC = () => {
  const [copiedSnippet, setCopiedSnippet] = useState<'gradle' | 'abl' | null>(null);

  const handleCopy = (text: string, type: 'gradle' | 'abl') => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(type);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  return (
    <article id="chapter-5" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Chapter Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-300 uppercase tracking-widest flex items-center gap-2">
            <span>CHAPTER V</span>
            <span className="text-slate-600">/</span>
            <span>INDUSTRIAL COMPILER INFRASTRUCTURE & OPEN SOURCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Maven Central Tooling, ABL, and Permanent Public Utilities
          </h2>
          <div className="text-xs font-mono text-slate-500">
            SECTION § 5.0 // GRADLE DIAGNOSTIC PLUGIN, ABL DSL, AND ANYONE-HUB.ME
          </div>
        </div>

        {/* Long-Form Monograph Prose */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <p>
            The software tooling ecosystem frequently hoards basic diagnostic utilities behind corporate licensing walls. Anyone-Hub LLC commits to publishing its core build orchestration tooling, diagnostic compiler plugins, and foundational utilities to the global commons with zero telemetry and zero paywalls.
          </p>

          <p>
            Our build diagnostic toolchain is published to <strong className="text-white">Maven Central</strong> under the group identifier <code className="text-white">kg.us.anyonehub</code>. It provides automated ABI inspection, dependency graph bottleneck profiling, and direct telemetry streaming for Kotlin Multiplatform and Android projects.
          </p>

          <p>
            Similarly, our community utility <strong className="text-white">anyone-hub.me</strong> stands as a permanent public service. Generating customizable vector QR codes and NTAG215-compatible vCard 3.0 digital business cards entirely in-memory, it provides individuals and developers with sovereign digital identity without recurring fees or tracking.
          </p>
        </div>

        {/* 2-Column Code & Spec Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gradle Diagnostic Plugin */}
          <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-semibold">MAVEN CENTRAL</span>
              <button
                onClick={() => handleCopy(SAMPLE_GRADLE_SNIPPET, 'gradle')}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                {copiedSnippet === 'gradle' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet === 'gradle' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <h3 className="text-base font-bold text-white">build.gradle.kts (Diagnostic Plugin)</h3>
            <pre className="p-3 bg-[#07090E] border border-white/[0.06] rounded text-[10px] font-mono text-slate-300 overflow-x-auto leading-relaxed scrollbar-none">
              {SAMPLE_GRADLE_SNIPPET}
            </pre>
            <div className="text-[11px] font-mono text-slate-500">
              COORDINATES: <span className="text-slate-300">kg.us.anyonehub.diagnostic:2.4.0</span>
            </div>
          </div>

          {/* ABL DSL */}
          <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#00F0FF] font-semibold">ANNOTATED BUILD LANGUAGE</span>
              <button
                onClick={() => handleCopy(ABL_SAMPLE_SNIPPET, 'abl')}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                {copiedSnippet === 'abl' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet === 'abl' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <h3 className="text-base font-bold text-white">module.abl (Declarative Target)</h3>
            <pre className="p-3 bg-[#07090E] border border-white/[0.06] rounded text-[10px] font-mono text-slate-300 overflow-x-auto leading-relaxed scrollbar-none">
              {ABL_SAMPLE_SNIPPET}
            </pre>
            <div className="text-[11px] font-mono text-slate-500">
              SPECIFICATION: <span className="text-slate-300">ABL v1.0 Kernel Target</span>
            </div>
          </div>
        </div>

        {/* anyone-hub.me Public Utility Spotlight */}
        <div className="p-6 sm:p-8 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <span className="text-xs font-mono text-[#00F0FF] font-semibold">PERMANENT COMMUNITY UTILITY</span>
              <h3 className="text-lg font-bold text-white mt-1">anyone-hub.me (Free Identity & QR Studio)</h3>
            </div>
            <a
              href={COMPANY_DOMAINS.freePublicUtility}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-slate-900 text-xs font-semibold rounded hover:bg-slate-200 transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Launch anyone-hub.me Utility</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans text-slate-300">
            <div className="space-y-1">
              <span className="font-mono text-white font-semibold flex items-center gap-1.5">
                <QrCode className="w-3.5 h-3.5 text-slate-400" />
                Custom Vector QR
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Render crisp SVG and PNG matrix codes with custom corner curves and embedded insignias without server latency.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-white font-semibold flex items-center gap-1.5">
                <Contact2 className="w-3.5 h-3.5 text-slate-400" />
                NFC & vCard 3.0
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Compile downloadable virtual contact cards optimized for direct writing to physical NTAG215 RFID/NFC chips.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-white font-semibold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                100% Client-Side Privacy
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Zero telemetry, zero user logging, and zero databases. All matrix encodings execute strictly inside local memory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
