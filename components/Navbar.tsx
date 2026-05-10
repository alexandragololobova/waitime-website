'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {Plus, Menu, X, Globe} from 'lucide-react';

export default function Navbar() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [mobileOpen, setMobileOpen] = useState(false);

    const otherLocale = locale === 'en' ? 'de' : 'en';
    const otherLocaleLabel = locale === 'en' ? 'DE' : 'EN';

    const navLinks = [
        {href: '#problem', label: t('problem')},
        {href: '#how-it-works', label: t('howItWorks')},
        {href: '#ehrs', label: t('ehrs')},
        {href: '#pricing', label: t('pricing')},
        {href: '#team', label: t('team')},
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Hour dots arranged in circle */}
                                <circle cx="16" cy="4.5" r="2.2" fill="white"/>
                                <circle cx="22.5" cy="6.5" r="1.8" fill="white"/>
                                <circle cx="27" cy="11.5" r="2.5" fill="white"/>
                                <circle cx="28.5" cy="18" r="1.5" fill="white"/>
                                <circle cx="26" cy="24" r="2" fill="white"/>
                                <circle cx="21" cy="27.5" r="1.4" fill="white"/>
                                <circle cx="16" cy="28.5" r="1.2" fill="white"/>
                                <circle cx="11" cy="27.5" r="1.4" fill="white"/>
                                <circle cx="6" cy="24" r="1.6" fill="white"/>
                                <circle cx="3.5" cy="18" r="1.2" fill="white"/>
                                <circle cx="5" cy="11.5" r="1.8" fill="white"/>
                                <circle cx="9.5" cy="6.5" r="1.4" fill="white"/>
                                {/* Clock hands */}
                                <rect x="14.8" y="9" width="2.4" height="7.5" rx="1.2" fill="white"/>
                                <rect x="14.8" y="15" width="2.4" height="5.5" rx="1.2" fill="white" transform="rotate(45 16 16)"/>
                            </svg>
                        </div>
                        <span className="text-xl font-semibold tracking-tight text-slate-900">
                            wai<span className="text-blue-600">T</span>ime
                        </span>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <a
                            href={locale === 'en' ? '/de' : '/'}
                            className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            <Globe className="h-4 w-4"/>
                            {otherLocaleLabel}
                        </a>

                        <button
                            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2 border-t border-slate-100">
                        <a
                            href={locale === 'en' ? '/de' : '/'}
                            className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900 py-2 transition-colors"
                        >
                            <Globe className="h-4 w-4"/>
                            Switch to {otherLocaleLabel}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}