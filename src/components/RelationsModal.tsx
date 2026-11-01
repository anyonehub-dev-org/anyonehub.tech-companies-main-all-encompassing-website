// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Copy, Check, ExternalLink } from 'lucide-react';
import { CONTACT_CHANNELS } from '../data/canonicalData';

interface RelationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const RelationsModal: React.FC<RelationsModalProps> = ({
  isOpen,
  onClose,
  initialSubject = 'General Corporate Inquiry',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: initialSubject.includes('Maintainer') 
      ? 'Open-Source Maintainer Application' 
      : initialSubject.includes('Buddy') 
      ? 'Buddy Biomimetic R&D' 
      : initialSubject.includes('Phaseform') 
      ? 'Phaseform Studio & MIDI' 
      : 'General Corporate Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@anyonehub.tech');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');

    // Construct mailto link with prefilled details
    const subject = encodeURIComponent(`${formData.category} — ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name / Handle: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Inquiry Category: ${formData.category}\n\n` +
      `Message / Background:\n${formData.message}\n`
    );
    window.location.href = `mailto:info@anyonehub.tech?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      category: 'General Corporate Inquiry',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#0D111A] border border-white/[0.12] rounded-lg max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden text-left"
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
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
                <ShieldCheck className="w-4 h-4" />
                <span>ANYONE-HUB LLC // EXECUTIVE DISPATCH</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 bg-white/[0.04] border border-white/[0.1] px-2.5 py-1 rounded transition-colors"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy info@anyonehub.tech'}</span>
              </button>
            </div>
            
            <div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Contact Us & Maintainer Inquiries
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Direct dispatch to Tom @ Anyone-Hub and engineering staff for open-source maintainer applications, technical inquiries, or institutional collaboration.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Your Name / Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Inquiry Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                >
                  <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  <option value="Open-Source Maintainer Application">Open-Source Maintainer Application</option>
                  <option value="Dev.io / Mobile Toolchain Support">Dev.io / Mobile Toolchain Support</option>
                  <option value="Phaseform Studio & MIDI">Phaseform Studio & MIDI</option>
                  <option value="Buddy Biomimetic R&D">Buddy Biomimetic R&D</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Message / GitHub Profile / Engineering Background *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your background, GitHub profile, hardware targets, or technical inquiry..."
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>info@anyonehub.tech</span>
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
                    <span>Transmit to info@anyonehub.tech</span>
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
              Inquiry Draft Prepared
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Your inquiry regarding <span className="text-[#00F0FF] font-mono">{formData.category}</span> has been formatted for <code className="text-white font-mono">info@anyonehub.tech</code>.
            </p>

            <div className="p-4 bg-[#07090E] border border-white/[0.08] rounded max-w-lg mx-auto text-left space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>RECIPIENT:</span>
                <span className="text-white font-bold">info@anyonehub.tech</span>
              </div>
              <div className="flex justify-between">
                <span>ENGINEERING:</span>
                <span className="text-white">{CONTACT_CHANNELS.engineering}</span>
              </div>
              <div className="flex justify-between">
                <span>BIOMIMETICS R&D:</span>
                <span className="text-white">anyonehub.us.kg@foundational-biomimetics.info</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
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
