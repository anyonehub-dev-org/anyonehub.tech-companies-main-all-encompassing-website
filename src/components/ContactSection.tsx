// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  initialCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialCategory = 'General Corporate Inquiry',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@anyonehub.tech');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');

    const subject = encodeURIComponent(`${category} — ${name}`);
    const body = encodeURIComponent(
      `Name / Handle: ${name}\n` +
      `Email Address: ${email}\n` +
      `Inquiry Category: ${category}\n\n` +
      `Message / Background:\n${message}\n`
    );

    window.location.href = `mailto:info@anyonehub.tech?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00F0FF]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10 text-left">
        {/* Header */}
        <div className="space-y-4 border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-mono text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span>OFFICIAL COMMUNICATIONS // DISPATCH</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Contact Us & Maintainer Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Transmit an official inquiry, apply as an open-source maintainer, or reach our direct engineering staff at <code className="text-white font-mono">info@anyonehub.tech</code>.
            </p>
          </div>

          {/* Quick Copy Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-3.5 py-2 rounded bg-[#0A0D15] border border-white/[0.1] hover:border-[#00F0FF]/50 text-xs font-mono text-slate-300 hover:text-white transition-colors shrink-0 shadow-sm"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#00F0FF]" />}
            <span>{copied ? 'Copied info@anyonehub.tech' : 'Copy info@anyonehub.tech'}</span>
          </button>
        </div>

        {/* Contact Form Card */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#0A0D15] border border-white/[0.08] relative">
          {errorMsg && (
            <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs rounded font-sans">
              {errorMsg}
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Name / Handle *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Mercer"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@domain.com"
                    className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Inquiry Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                >
                  <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  <option value="Open-Source Maintainer Application">Open-Source Maintainer Application</option>
                  <option value="Dev.io / Mobile Toolchain Support">Dev.io / Mobile Toolchain Support</option>
                  <option value="Phaseform Studio & MIDI">Phaseform Studio & MIDI</option>
                  <option value="Buddy Biomimetic R&D">Buddy Biomimetic R&D</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                  Message / GitHub Profile / Engineering Background *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your inquiry, GitHub profile, language experience (Kotlin, C++20/23), or platform target..."
                  className="w-full bg-[#07090E] border border-white/[0.1] rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00F0FF] transition-colors font-sans"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Direct Recipient: <strong className="text-white">info@anyonehub.tech</strong></span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-950 bg-white hover:bg-slate-200 rounded flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit to info@anyonehub.tech</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Inquiry Formatted for Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Your message has been pre-filled into your email client addressed directly to <code className="text-[#00F0FF] font-mono">info@anyonehub.tech</code>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white border border-white/[0.1] rounded"
                >
                  Submit Another Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

