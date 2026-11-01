// Copyright (c) 2024-2026 Anyone-Hub LLC. All rights reserved.

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { COMPANY_DOMAINS } from '../data/canonicalData';

interface NavbarProps {
  onOpenRelationsModal?: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRelationsModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Dev.io', href: '#dev-io' },
    { label: 'Buddy R&D', href: '#buddy-rd' },
    { label: 'Phaseform', href: '#phaseform' },
    { label: 'Open Source', href: '#open-source' },
    { label: 'Ecosystem Links', href: '#ecosystem-links' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090E]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Brand Lockup */}
        <a
          href="#our-story"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#our-story');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group text-left"
        >
          <div className="w-8 h-8 rounded bg-white/[0.04] border border-white/[0.1] flex items-center justify-center group-hover:border-[#00F0FF]/50 transition-colors">
            <Terminal className="w-4 h-4 text-[#00F0FF]" />
          </div>
          <span className="text-sm sm:text-base font-semibold tracking-wider text-white font-mono">
            ANYONE-HUB<span className="text-[#00F0FF]"> LLC</span>
          </span>
        </a>

        {/* Section Anchor Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3 py-1.5 rounded text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* External Launchpad & Inquiries */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_DOMAINS.platformPortal}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded transition-colors flex items-center gap-1.5"
          >
            <span>Launch anyonehub.us.kg</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          {onOpenRelationsModal && (
            <button
              onClick={() => onOpenRelationsModal('Institutional Inquiry')}
              className="px-3 py-1.5 text-xs font-medium text-slate-950 bg-white hover:bg-slate-200 rounded transition-colors whitespace-nowrap"
            >
              Inquiries
            </button>
          )}
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white border border-white/[0.08] rounded bg-white/[0.02]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#07090E] px-4 pt-2 pb-6 space-y-3 font-mono">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/[0.04] rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href={COMPANY_DOMAINS.platformPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 text-xs font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-500/30 rounded flex items-center justify-center gap-1.5"
            >
              <span>Launch anyonehub.us.kg</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            {onOpenRelationsModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRelationsModal('Mobile Institutional Inquiry');
                }}
                className="w-full py-2 text-xs font-semibold text-slate-900 bg-white rounded text-center"
              >
                Institutional Inquiries
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
