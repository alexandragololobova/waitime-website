'use client';

import {useTranslations} from 'next-intl';
import {Clock, LineChart, Users, CheckCircle2, Shield, Server, ArrowRight} from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import Image from 'next/image';

export default function HomePage() {
    const tHero = useTranslations('hero');
    const tProblem = useTranslations('problem');
    const tHiw = useTranslations('howItWorks');
    const tEhrs = useTranslations('ehrs');
    const tPricing = useTranslations('pricing');
    const tTeam = useTranslations('team');
    const tCta = useTranslations('cta');
    const tFooter = useTranslations('footer');

    const teamMembers = [
        {name: tTeam('member1Name'), bio: tTeam('member1Bio'), photo: '/team/chiara.jpg'},
        {name: tTeam('member0Name'), bio: tTeam('member0Bio'), photo: '/team/alexandra.jpg'},
        {name: tTeam('member2Name'), bio: tTeam('member2Bio'), photo: '/team/julia-ng.jpg'},
    ];

    const tier1Features = [
        tPricing('tier1Features.0'),
        tPricing('tier1Features.1'),
        tPricing('tier1Features.2'),
        tPricing('tier1Features.3'),
    ];

    const tier2Features = [
        tPricing('tier2Features.0'),
        tPricing('tier2Features.1'),
        tPricing('tier2Features.2'),
        tPricing('tier2Features.3'),
        tPricing('tier2Features.4'),
    ];

    const tier3Features = [
        tPricing('tier3Features.0'),
        tPricing('tier3Features.1'),
        tPricing('tier3Features.2'),
        tPricing('tier3Features.3'),
    ];

    return (
        <>
            {/* ── HERO ── */}
            <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <div>
                            <span
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-blue-200 bg-blue-50 text-blue-700 mb-6">
                                {tHero('badge')}
                            </span>
                            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                                {tHero('headline1')}{' '}
                                <span className="text-blue-600">{tHero('headline2')}</span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                                {tHero('subtext')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="#team"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 px-8 rounded-lg text-base transition-colors"
                                >
                                    {tHero('cta')}
                                    <ArrowRight className="h-4 w-4"/>
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold h-12 px-8 rounded-lg text-base transition-colors"
                                >
                                    {tHero('ctaSecondary')}
                                </a>
                            </div>
                        </div>
                        <div className="lg:pl-8 lg:-mr-15">
                            <DashboardMockup/>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROBLEM ── */}
            <section id="problem" className="bg-slate-50 border-t border-slate-200 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                            {tProblem('title')}
                        </h2>
                        <p className="text-lg text-slate-600">{tProblem('subtitle')}</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Clock,
                                iconBg: 'bg-red-50',
                                iconColor: 'text-red-600',
                                value: tProblem('stat1Value'),
                                label: tProblem('stat1Label'),
                                desc: tProblem('stat1Desc'),
                            },
                            {
                                icon: LineChart,
                                iconBg: 'bg-amber-50',
                                iconColor: 'text-amber-600',
                                value: tProblem('stat2Value'),
                                label: tProblem('stat2Label'),
                                desc: tProblem('stat2Desc'),
                            },
                            {
                                icon: Users,
                                iconBg: 'bg-blue-50',
                                iconColor: 'text-blue-600',
                                value: tProblem('stat3Value'),
                                label: tProblem('stat3Label'),
                                desc: tProblem('stat3Desc'),
                            },
                        ].map(({icon: Icon, iconBg, iconColor, value, label, desc}) => (
                            <div key={label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${iconBg}`}>
                                    <Icon className={`h-6 w-6 ${iconColor}`}/>
                                </div>
                                <div className="text-4xl font-bold text-slate-900 mb-1">{value}</div>
                                <div className="font-medium text-slate-900 mb-2">{label}</div>
                                <p className="text-sm text-slate-600">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-8">
                        Sources: Bodenmann et al. (2010) Swiss primary care study; Swiss university hospital study,
                        PubMed (2007). CHF 180–340 per appointment based on Swiss TARMED billing ranges.
                    </p>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section id="how-it-works" className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                                {tHiw('title')}
                            </h2>
                            <p className="text-lg text-slate-600 mb-10">{tHiw('subtitle')}</p>
                            <div className="space-y-8">
                                {[
                                    {num: '1', title: tHiw('step1Title'), desc: tHiw('step1Desc')},
                                    {num: '2', title: tHiw('step2Title'), desc: tHiw('step2Desc')},
                                    {num: '3', title: tHiw('step3Title'), desc: tHiw('step3Desc')},
                                ].map(({num, title, desc}) => (
                                    <div key={num} className="flex gap-4">
                                        <div
                                            className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center flex-shrink-0 text-base">
                                            {num}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
                                alt="Modern Swiss medical clinic"
                                className="object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EHR COMPATIBILITY ── */}
            <section id="ehrs" className="bg-slate-50 border-t border-slate-200 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        {tEhrs('title')}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        {tEhrs('subtitle')}
                    </p>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-10">
                        <Shield className="h-4 w-4"/>
                        {tEhrs('compatible')}
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 items-center mb-12">
                        {[
                            {name: 'Tomedo', color: 'text-blue-700'},
                            {name: 'Vitodata', color: 'text-teal-700'},
                            {name: 'Medidata', color: 'text-indigo-700'},
                        ].map(({name, color}) => (
                            <div key={name}
                                 className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                                <span className={`text-2xl font-bold tracking-tighter ${color}`}>{name}</span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="max-w-2xl mx-auto bg-white rounded-xl border border-slate-200 p-6 text-sm text-slate-600 leading-relaxed">
                        <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5"/>
                            <p>{tEhrs('note')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id="pricing" className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                            {tPricing('title')}
                        </h2>
                        <p className="text-lg text-slate-600">{tPricing('subtitle')}</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">

                        {/* Tier 1 */}
                        <div
                            className="relative flex flex-col border border-slate-200 rounded-xl p-6 shadow-sm bg-white">
                            <div className="text-xl font-bold text-slate-900 mb-1">{tPricing('tier1Name')}</div>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-slate-900">CHF {tPricing('tier1Price')}</span>
                                <span className="text-slate-500">{tPricing('perMonth')}</span>
                            </div>
                            <ul className="space-y-3 flex-1 mb-6">
                                {tier1Features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0"/>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-4">
                                <div
                                    className="w-full text-center py-2.5 rounded-lg border border-slate-200 text-slate-400 text-sm font-medium">
                                    {tPricing('comingSoon')}
                                </div>
                            </div>
                        </div>

                        {/* Tier 2 — Featured */}
                        <div
                            className="relative flex flex-col border-2 border-blue-600 rounded-xl p-6 shadow-md bg-white">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {tPricing('popular')}
                            </span>
                            </div>
                            <div className="text-xl font-bold text-blue-600 mb-1">{tPricing('tier2Name')}</div>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-slate-900">CHF {tPricing('tier2Price')}</span>
                                <span className="text-slate-500">{tPricing('perMonth')}</span>
                            </div>
                            <ul className="space-y-3 flex-1 mb-6">
                                {tier2Features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0"/>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-4">
                                <div
                                    className="w-full text-center py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold">
                                    {tPricing('comingSoon')}
                                </div>
                            </div>
                        </div>

                        {/* Tier 3 */}
                        <div
                            className="relative flex flex-col border border-slate-200 rounded-xl p-6 shadow-sm bg-white">
                            <div className="text-xl font-bold text-slate-900 mb-1">{tPricing('tier3Name')}</div>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-slate-900">{tPricing('tier3Price')}</span>
                            </div>
                            <ul className="space-y-3 flex-1 mb-6">
                                {tier3Features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="h-5 w-5 text-slate-400 flex-shrink-0"/>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-4">
                                <a
                                    href="mailto:hello@waitime.ch"
                                    className="w-full text-center py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors block"
                                >
                                    {tPricing('contactSales')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section id="team" className="bg-slate-50 border-t border-slate-200 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                            {tTeam('title')}
                        </h2>
                        <p className="text-lg text-slate-600">{tTeam('subtitle')}</p>
                    </div>
                    <div className="grid gap-10 sm:grid-cols-3 max-w-3xl mx-auto">
                        {teamMembers.map(({name, bio, photo}) => (
                            <div key={name} className="flex flex-col items-center text-center">
                                <div
                                    className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 bg-blue-100">
                                    <Image
                                        src={photo}
                                        alt={name}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 flex items-center justify-center text-blue-600 text-2xl font-bold">
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                        {tCta('title')}
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        {tCta('subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:hello@waitime.ch"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-slate-50 font-semibold h-14 px-8 rounded-lg text-base transition-colors"
                        >
                            {tCta('primary')}
                            <ArrowRight className="h-4 w-4"/>
                        </a>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center justify-center gap-2 border border-blue-400 text-blue-100 hover:bg-blue-700 hover:text-white font-semibold h-14 px-8 rounded-lg text-base transition-colors"
                        >
                            {tCta('secondary')}
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bg-slate-50 border-t border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                                    </svg>
                                </div>
                                <span className="text-xl font-semibold tracking-tight text-slate-900">
                  wai<span className="text-blue-600">T</span>ime
                </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{tFooter('tagline')}</p>
                        </div>
                        <div>
                            <div className="font-semibold text-slate-900 mb-4">{tFooter('product')}</div>
                            <ul className="space-y-3">
                                <li><a href="#how-it-works"
                                       className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{tFooter('features')}</a>
                                </li>
                                <li><a href="#pricing"
                                       className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{tFooter('pricing')}</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-semibold text-slate-900 mb-4">{tFooter('company')}</div>
                            <ul className="space-y-3">
                                <li><a href="#team"
                                       className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{tFooter('about')}</a>
                                </li>
                                <li><a href="mailto:hello@waitime.ch"
                                       className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{tFooter('contact')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">{tFooter('copyright')}</p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                <Shield className="h-4 w-4"/>
                                {tFooter('gdpr')}
                            </div>
                            <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                <Server className="h-4 w-4"/>
                                {tFooter('hosted')}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}