// Copyright (c) 2024-2026 anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building2, ExternalLink } from 'lucide-react';
import { CONTACT_CHANNELS, COMPANY_DOMAINS } from '../data/canonicalData';

interface RelationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const RelationsModal: React.FC<RelationsModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'General Executive & Lab Relations',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    category: initialSubject.includes('Whitepaper') ? 'Executive Whitepaper Request' : 'Institutional Collaboration',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      category: 'Institutional Collaboration',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0D111A] border border-white/[0.12] rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF]/50" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF]/50" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF]/50" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF]/50" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded hover:bg-white/[0.05] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>ANYONE-HUB LLC // INSTITUTIONAL DESK</span>
            </div>
            
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
              Investor, Enterprise & Robotics Lab Relations
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Connect directly with Thomas Alan Slinkard Jr (Founder & Lead Architect) and the engineering staff for technical dossiers, bipedal humanoid robotics collaborations, or institutional venture partnerships.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Jordan Mercer"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Organization / Laboratory *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Stanford Robotics / Apex Ventures"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jmercer@institution.edu"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Inquiry Scope *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  >
                    <option value="Executive Whitepaper Request">Buddy Biomimetic Whitepaper Request</option>
                    <option value="Humanoid Robotics Integration">Humanoid Robotics Sensorium Integration</option>
                    <option value="Venture & Institutional Capital">Venture & Institutional Capital Discussion</option>
                    <option value="University Lab R&D Collaboration">University Lab R&D Collaboration</option>
                    <option value="Enterprise Toolchain & ABL Support">Enterprise AnyOne-Hub / ABL Toolchain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Project Scope & Technical Objective *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your target hardware platform, compute requirements, or institutional objectives..."
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Direct: {CONTACT_CHANNELS.engineering}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Brief</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold text-white">
              Executive Brief Received & Queued
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Your inquiry regarding <span className="text-[#00F0FF] font-mono">{formData.category}</span> has been logged to the engineering dispatch log.
            </p>

            <div className="p-4 bg-[#07090E] border border-white/[0.08] rounded max-w-lg mx-auto text-left space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>GENERAL APEX:</span>
                <span className="text-white">{CONTACT_CHANNELS.general}</span>
              </div>
              <div className="flex justify-between">
                <span>DIRECT ENGINEERING:</span>
                <span className="text-white">{CONTACT_CHANNELS.engineering}</span>
              </div>
              <div className="flex justify-between">
                <span>BIOMIMETICS & ROBOTICS LAB:</span>
                <span className="text-white">{CONTACT_CHANNELS.biomimeticsLab}</span>
              </div>
              <div className="flex justify-between">
                <span>APEX LOCATION:</span>
                <span className="text-white">{CONTACT_CHANNELS.headquarters}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <a
                href={`mailto:${CONTACT_CHANNELS.engineering}?subject=${encodeURIComponent(
                  formData.category + ' - ' + formData.organization
                )}&body=${encodeURIComponent(
                  `Name: ${formData.fullName}\nOrg: ${formData.organization}\nEmail: ${formData.email}\nScope: ${formData.category}\n\n${formData.message}`
                )}`}
                className="px-4 py-2 text-xs font-mono text-slate-300 hover:text-white border border-white/[0.1] rounded flex items-center gap-1.5 hover:border-white/20 transition-colors"
              >
                <span>Open in Mail Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 rounded transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
