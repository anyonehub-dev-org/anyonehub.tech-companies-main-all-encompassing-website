// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  Package, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink, 
  FileCode2, 
  GitPullRequest, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SAMPLE_GRADLE_SNIPPET, ABL_SAMPLE_SNIPPET } from '../data/canonicalData';

export const MavenOssSection: React.FC = () => {
  const [copiedSnippet, setCopiedSnippet] = useState<'gradle' | 'abl' | null>(null);

  const handleCopy = (text: string, type: 'gradle' | 'abl') => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(type);
    setTimeout(() => setCopiedSnippet(null), 2500);
  };

  return (
    <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span>PILLAR 05</span>
              <span className="text-slate-600">/</span>
              <span>OPEN-SOURCE COMPILER & MAVEN CENTRAL INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Industrial Build Engineering & Maven Central Tooling.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We publish our foundational compilation engines, diagnostic Gradle plugins, and build language specifications directly to Maven Central for the global Android and Kotlin Multiplatform ecosystem.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.08] px-3.5 py-2 rounded shrink-0">
            <Package className="w-3.5 h-3.5 text-slate-300" />
            <span>GROUP ID: kg.us.anyonehub</span>
          </div>
        </div>

        {/* 2-Column Showcase (ABL DSL + Gradle Diagnostic Plugin) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tool 1: Anyone-Hub Gradle Diagnostic Build Plugin */}
          <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Package className="w-4 h-4" />
                  <span>MAVEN CENTRAL PUBLISHED</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.04] text-slate-300 border border-white/[0.1] rounded">
                  v2.4.0 STABLE
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Anyone-Hub Gradle Diagnostic Build Plugin
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Published to Maven Central under <code className="text-slate-200">kg.us.anyonehub</code> and <code className="text-slate-200">io.github.anyonehub-dev</code>. Delivers automated dependency graph bottleneck detection, ABI compatibility verification, and real-time build telemetry piping to AnyOne-Hub IDE and Wear OS Build Commander.
                </p>
              </div>

              {/* Code Snippet Box with Copy Button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>build.gradle.kts (Kotlin DSL)</span>
                  <button
                    onClick={() => handleCopy(SAMPLE_GRADLE_SNIPPET, 'gradle')}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedSnippet === 'gradle' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Snippet</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="bg-[#07090E] border border-white/[0.08] rounded p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed scrollbar-none">
                  {SAMPLE_GRADLE_SNIPPET}
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>TARGET: <span className="text-slate-300">Android & Kotlin Multiplatform</span></span>
              <span>LICENSE: <span className="text-white">Apache-2.0</span></span>
            </div>
          </div>

          {/* Tool 2: ABL (Annotated Build Language) */}
          <div className="bg-[#0A0D15] border border-white/[0.08] rounded-lg p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
                  <FileCode2 className="w-4 h-4" />
                  <span>COMPILATION & ORCHESTRATION DSL</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 rounded">
                  ABL v1.0 SPEC
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  ABL (Annotated Build Language)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Our custom declarative build orchestration language engineered for multi-toolchain compilation pipelines (C++23, Rust, Kotlin Compose). Embeds strict architectural invariants, zero-copy wire schema verification, and SHA-256 geometry locks directly into the compile target.
                </p>
              </div>

              {/* Code Snippet Box with Copy Button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>module.abl (Declarative Target)</span>
                  <button
                    onClick={() => handleCopy(ABL_SAMPLE_SNIPPET, 'abl')}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedSnippet === 'abl' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Snippet</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="bg-[#07090E] border border-white/[0.08] rounded p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed scrollbar-none">
                  {ABL_SAMPLE_SNIPPET}
                </pre>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>EXECUTOR: <span className="text-slate-300">TerminalDaemonService</span></span>
              <span>SAFETY: <span className="text-[#00F0FF]">Crucible Invariant Gates</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
