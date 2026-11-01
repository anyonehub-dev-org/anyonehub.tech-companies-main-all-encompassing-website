// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { 
  FileCode2, 
  Package, 
  QrCode, 
  ArrowUpRight, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Globe,
  Users,
  Mail,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

interface OpenSourceSectionProps {
  onOpenMaintainerModal?: () => void;
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({ onOpenMaintainerModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@anyonehub.tech');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    if (onOpenMaintainerModal) {
      e.preventDefault();
      onOpenMaintainerModal();
      return;
    }
    const target = document.getElementById('contact');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Ambient amber atmospheric glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-left">
        {/* Section Header & Open-Source Ethos */}
        <div className="space-y-4 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-mono text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>PROVEN IN THE OPEN // MAVEN CENTRAL & COMMUNITY INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            Bringing Back the True Meaning of Open Source: Shipped Code, Zero Paywalls.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-1">
            <p>
              Too many companies use "open source" as a marketing bait-and-switch—crippling core features behind enterprise paywalls or abandoning community repositories once they get traction. At Anyone-Hub LLC, open source isn't a funnel; it's the foundation of why we started. Every library, build diagnostic tool, and public utility we publish is engineered to production standards from day one and released without artificial limits, trackers, or subscription traps.
            </p>
          </div>
        </div>

        {/* 3 Core Open-Source Pillars */}
        <div className="space-y-6">
          {/* Pillar 1: Automated Gradle Project Health & Diagnostic Plugin */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-amber-500/30 hover:border-amber-500/50 transition-colors flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-amber-400 font-semibold flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4" />
                  <span>BUILD DIAGNOSTICS</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-500/30">
                  GRADLE PLUGIN PORTAL & MAVEN
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                Automated Gradle Project Health & Diagnostic Plugin
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Built from the ground up to solve multi-module Gradle bloat, our custom diagnostic plugin performs deep static analysis across your entire project dependency tree and generates a comprehensive, standalone <strong className="text-white">Project Health HTML Diagnostic Report</strong>. It automatically pinpoints unused dependencies, transitive conflicts, duplicate classes, dead resources, and build bottlenecks in a single pass.
              </p>

              {/* Verified Code Block */}
              <div className="rounded bg-[#07090E] border border-white/[0.08] p-4 text-xs font-mono text-slate-300 space-y-1 overflow-x-auto">
                <div className="text-slate-500">// build.gradle.kts - Automated HTML Project Health & Dependency Diagnostic</div>
                <div><span className="text-violet-400">plugins</span> &#123;</div>
                <div className="pl-4">id(<span className="text-emerald-300">"kg.us.anyonehub.diagnostic"</span>) version <span className="text-amber-300">"2.4.0"</span></div>
                <div>&#125;</div>
                <div className="pt-2 text-violet-400">anyoneHubDiagnostic &#123;</div>
                <div className="pl-4"><span className="text-slate-400">generateHtmlReport</span> = <span className="text-[#00F0FF]">true</span></div>
                <div className="pl-4"><span className="text-slate-400">auditDependencies</span> = <span className="text-[#00F0FF]">true</span></div>
                <div className="pl-4"><span className="text-slate-400">detectDeadResources</span> = <span className="text-[#00F0FF]">true</span></div>
                <div className="pl-4"><span className="text-slate-400">reportOutputDir</span> = layout.buildDirectory.dir(<span className="text-emerald-300">"reports/project-health"</span>)</div>
                <div>&#125;</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-amber-300/90">
              Automated HTML Health Reports • Dependency Graph Auditing • Dead-Code & Bloat Detection
            </div>
          </div>

          {/* 2-Column Grid for Pillar 2 (Reaktor KMP) and Pillar 3 (anyone-hub.me) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 2: Reaktor KMP Library Suite */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#00F0FF] font-semibold flex items-center gap-1.5">
                    <Package className="w-4 h-4" />
                    <span>MAVEN CENTRAL PUBLISHED</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                    KMP SUITE
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  Reaktor KMP — Kotlin Multiplatform Library Suite
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Published directly to Maven Central, the <strong className="text-white">Reaktor KMP</strong> project provides production-grade Kotlin Multiplatform modules engineered for high-concurrency state management, reactive data flows, and zero-boilerplate cross-platform architecture across Android, JVM, and native targets.
                </p>

                {/* Verified Maven Coordinate Box */}
                <div className="rounded bg-[#07090E] border border-white/[0.08] p-3 text-[11px] font-mono text-slate-300 space-y-1">
                  <span className="text-slate-500 text-[10px] block">VERIFIED MAVEN CENTRAL NAMESPACES:</span>
                  <code className="text-[#00F0FF] block">io.github.anyonehub-dev</code>
                  <code className="text-emerald-400 block text-[10px] pt-1">
                    implementation("io.github.anyonehub-dev:reaktor-core:1.2.0")
                  </code>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#00F0FF]/90">
                Maven Central Published • Kotlin Multiplatform (KMP) • High-Concurrency Reactive Core
              </div>
            </div>

            {/* Pillar 3: anyone-hub.me & anyone-QR gen */}
            <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-white/[0.08] hover:border-emerald-400/40 transition-colors flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <QrCode className="w-4 h-4" />
                    <span>PUBLIC UTILITIES</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
                    ZERO PAYWALL
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                  anyone-hub.me & anyone-QR gen — Zero-Paywall Public Utilities
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Simple utilities shouldn't hold your data hostage or charge a monthly fee just to keep a QR code alive. At <strong className="text-white">anyone-hub.me</strong>, we built and host a 100% free virtual business card builder, custom logo-embedded static QR code generator (<code className="text-emerald-300 font-mono text-xs">anyone-QR gen</code>), and NTAG215 NFC NDEF payload programming tools for the entire community.
                </p>

                <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Tracking • No Expiration Date • Zero Paywalls</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400/90">
                Static Logo-Embedded QR Generation • Virtual Business Cards • NTAG215 NFC Payload Tooling
              </div>
            </div>
          </div>

          {/* Dedicated Open-Source Maintainer Callout Block */}
          <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-r from-cyan-950/30 via-[#0A0D15] to-[#0A0D15] border border-[#00F0FF]/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>JOIN THE CORE // OPEN-SOURCE MAINTAINERS</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>info@anyonehub.tech</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-white rounded bg-white/[0.05] border border-white/[0.1] transition-colors"
                  title="Copy info@anyonehub.tech"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                Become an Official Anyone-Hub Maintainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Bringing back the true meaning of open source takes builders who care about clean code, deterministic tooling, and zero-paywall infrastructure. We are actively welcoming experienced Kotlin, C++20/C++23, and systems engineers to help maintain our Maven Central libraries (<code className="text-[#00F0FF] font-mono text-xs">Reaktor KMP</code>), Gradle diagnostic tooling, and community utilities.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="px-5 py-2.5 rounded bg-[#00F0FF] text-slate-950 font-semibold font-mono text-xs hover:bg-[#00F0FF]/90 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-md shadow-[#00F0FF]/10"
              >
                <span>Apply as a Maintainer</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </a>

              <a
                href="mailto:info@anyonehub.tech?subject=Open-Source%20Maintainer%20Application%20%E2%80%94%20Anyone-Hub%20LLC"
                className="px-4 py-2.5 rounded bg-white/[0.05] border border-white/[0.1] text-slate-300 font-mono text-xs hover:bg-white/[0.1] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Direct Mailto Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Action Callout Bar */}
        <div className="p-6 rounded-lg bg-gradient-to-r from-amber-950/30 via-[#0A0D15] to-[#0A0D15] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold font-sans text-sm sm:text-base">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Community Identity & Open Public Utilities</span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Access anyone-hub.me for free virtual business cards, custom logo-embedded QR codes, and NFC tooling, or integrate our published libraries directly from Maven Central.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={COMPANY_DOMAINS.freePublicUtility}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-amber-400 text-slate-950 font-semibold font-mono text-xs hover:bg-amber-300 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-amber-400/10"
            >
              <span>Launch anyone-hub.me Utility</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
