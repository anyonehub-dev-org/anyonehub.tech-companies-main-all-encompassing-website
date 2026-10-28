// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { CONTACT_CHANNELS, COMPANY_DOMAINS } from '../data/canonicalData';

export const ChapterSixInquiries: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    scope: 'Foundational Biomimetics & Robotics Research',
    brief: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.brief.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <article id="chapter-6" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto space-y-10 text-left">
        {/* Chapter Header */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-300 uppercase tracking-widest flex items-center gap-2">
            <span>CHAPTER VI</span>
            <span className="text-slate-600">/</span>
            <span>INSTITUTIONAL INQUIRIES & LAB RELATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            Direct Communications, Robotics Collaborations, and Capital Partners
          </h2>
          <div className="text-xs font-mono text-slate-500">
            SECTION § 6.0 // OFFICIAL DISPATCH ENDPOINTS & COLLABORATION DESK
          </div>
        </div>

        {/* Long-Form Monograph Prose */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          <p>
            Anyone-Hub LLC maintains direct, unmediated communication channels for university robotics laboratories, hardware fabricators, enterprise engineering teams, and institutional partners. Inquiries are reviewed directly by Thomas Alan Slinkard Jr (Founder & Lead Architect) and senior systems staff.
          </p>
        </div>

        {/* Verified Contact Directory Grid */}
        <div className="p-6 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-6">
          <div className="text-xs font-mono text-white font-semibold border-b border-white/[0.06] pb-3 flex items-center justify-between">
            <span>OFFICIAL CONTACT CHANNELS & DESK DIRECTORY</span>
            <span className="text-emerald-400">DISPATCH VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {/* Founder Direct */}
            <div className="p-3 bg-[#07090E] border border-[#00F0FF]/30 rounded space-y-1 sm:col-span-2">
              <span className="text-slate-400 text-[10px] block">FOUNDER & LEAD ARCHITECT (DIRECT)</span>
              <a href={`mailto:${CONTACT_CHANNELS.founderDirect}`} className="text-white hover:text-[#00F0FF] underline font-semibold text-sm">
                {CONTACT_CHANNELS.founderDirect}
              </a>
              <span className="text-slate-500 text-[10px] block">Thomas Alan Slinkard Jr — Direct executive engineering dispatch</span>
            </div>

            {/* General Inquiries */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">GENERAL INQUIRIES</span>
              <a href={`mailto:${CONTACT_CHANNELS.general}`} className="text-[#00F0FF] hover:underline font-semibold">
                {CONTACT_CHANNELS.general}
              </a>
              <span className="text-slate-500 text-[10px] block">Primary corporate apex dispatch</span>
            </div>

            {/* Support */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">TECHNICAL SUPPORT</span>
              <a href={`mailto:${CONTACT_CHANNELS.support}`} className="text-slate-200 hover:underline font-semibold">
                {CONTACT_CHANNELS.support}
              </a>
              <span className="text-slate-500 text-[10px] block">Developer tooling & platform support</span>
            </div>

            {/* Collective */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">ENGINEERING COLLECTIVE</span>
              <a href={`mailto:${CONTACT_CHANNELS.collective}`} className="text-slate-200 hover:underline font-semibold">
                {CONTACT_CHANNELS.collective}
              </a>
              <span className="text-slate-500 text-[10px] block">Open-source & contributor syndication</span>
            </div>

            {/* Engineering Zoho */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">DIRECT ENGINEERING (ZOHO)</span>
              <a href={`mailto:${CONTACT_CHANNELS.engineering}`} className="text-emerald-400 hover:underline font-semibold">
                {CONTACT_CHANNELS.engineering}
              </a>
              <span className="text-slate-500 text-[10px] block">Core substrate & C++ systems team</span>
            </div>

            {/* Biomimetics Division */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">BIOMIMETICS & ROBOTICS LAB</span>
              <a href={`mailto:${CONTACT_CHANNELS.biomimeticsLab}`} className="text-[#00F0FF] hover:underline font-semibold">
                {CONTACT_CHANNELS.biomimeticsLab}
              </a>
              <span className="text-slate-500 text-[10px] block">Humanoid robotics & embodiment research</span>
            </div>

            {/* Biomimetics / Portal Zoho */}
            <div className="p-3 bg-[#07090E] border border-white/[0.06] rounded space-y-1">
              <span className="text-slate-400 text-[10px] block">PORTAL DISPATCH (ZOHO)</span>
              <a href={`mailto:${CONTACT_CHANNELS.portalZohomail}`} className="text-slate-200 hover:underline font-semibold">
                {CONTACT_CHANNELS.portalZohomail}
              </a>
              <span className="text-slate-500 text-[10px] block">anyonehub.us.kg platform desk</span>
            </div>
          </div>
        </div>

        {/* Editorial Inquiry Form */}
        <div className="p-6 sm:p-8 bg-[#0A0D15] border border-white/[0.08] rounded-lg space-y-6">
          <div className="border-b border-white/[0.06] pb-3">
            <span className="text-xs font-mono text-[#00F0FF] font-semibold">TRANSMIT TECHNICAL BRIEF</span>
            <h3 className="text-lg font-bold text-white mt-1">Institutional Collaboration & Whitepaper Desk</h3>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Jordan Mercer"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-white focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">ORGANIZATION / LAB *</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Robotics Institute / Venture Group"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-white focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-400 mb-1">INSTITUTIONAL EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jmercer@institution.edu"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-white focus:outline-none focus:border-[#00F0FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">INQUIRY TRACK *</label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-white focus:outline-none focus:border-[#00F0FF]"
                  >
                    <option value="Foundational Biomimetics & Robotics Research">Foundational Biomimetics & Robotics</option>
                    <option value="Buddy Executive Technical Whitepaper">Buddy Executive Whitepaper Request</option>
                    <option value="AnyOne-Hub Enterprise Toolchain">AnyOne-Hub Toolchain Collaboration</option>
                    <option value="Institutional Capital Discussion">Institutional Capital & Venture Discussion</option>
                  </select>
                </div>
              </div>

              <div className="text-xs font-mono">
                <label className="block text-slate-400 mb-1">TECHNICAL SCOPE & OBJECTIVE *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Detail your target hardware platform, compute requirements, or institutional objectives..."
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-white font-sans text-sm focus:outline-none focus:border-[#00F0FF]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  DISPATCH: {CONTACT_CHANNELS.engineering}
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-white hover:bg-slate-200 text-slate-900 text-xs font-semibold rounded flex items-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Technical Brief</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 font-mono text-xs">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-sans">
                Technical Brief Queued for Review
              </h4>
              <p className="text-slate-400 max-w-md mx-auto text-xs font-sans">
                Your dispatch has been registered. For immediate direct transmission, you may also open this pre-formatted message in your local mail client.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`mailto:${CONTACT_CHANNELS.engineering}?subject=${encodeURIComponent(
                    formData.scope + ' - ' + formData.organization
                  )}&body=${encodeURIComponent(
                    `Name: ${formData.fullName}\nOrg: ${formData.organization}\nEmail: ${formData.email}\nScope: ${formData.scope}\n\n${formData.brief}`
                  )}`}
                  className="px-4 py-2 border border-white/[0.1] hover:border-white/20 text-slate-300 rounded flex items-center gap-1.5"
                >
                  <span>Open in Mail Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-white text-slate-900 font-semibold rounded"
                >
                  Send Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
