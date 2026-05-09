'use client';

import {
    LayoutDashboard, Calendar, Users, Clock, LineChart,
    Settings, ChevronLeft, ChevronRight, Zap, Smartphone,
    Mail, Activity, Plus,
} from 'lucide-react';

export default function DashboardMockup() {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            <div className="flex min-h-[420px]">

                {/* Sidebar */}
                <div className="hidden md:flex w-36 flex-col bg-slate-50 border-r border-slate-100 p-4">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-7 w-7 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0">
                            <Plus className="h-4 w-4 text-white"/>
                        </div>
                        <span className="text-base font-semibold tracking-tight text-slate-900">
                            wai<span className="text-blue-600">T</span>ime
                        </span>
                    </div>

                    <nav className="space-y-1 flex-1">
                        {[
                            {icon: LayoutDashboard, label: 'Dashboard', active: true},
                            {icon: Calendar, label: 'Schedule', active: false},
                            {icon: Users, label: 'Patients', active: false},
                            {icon: Clock, label: 'Waitlist', active: false},
                            {icon: LineChart, label: 'Analytics', active: false},
                        ].map(({icon: Icon, label, active}) => (
                            <div
                                key={label}
                                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium cursor-default transition-colors ${
                                    active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            >
                                <Icon className="h-4 w-4"/>
                                {label}
                            </div>
                        ))}
                    </nav>

                    <div
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-default">
                        <Settings className="h-4 w-4"/>
                        Settings
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col min-w-0">

                    {/* Header */}
                    <div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between">
                        <div>
                            <span className="text-base font-semibold text-slate-900">Schedule</span>
                            <span className="ml-2 text-sm text-slate-500">March 2026</span>
                        </div>
                        <div className="flex gap-1">
                            <button
                                className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <ChevronLeft className="h-4 w-4 text-slate-600"/>
                            </button>
                            <button
                                className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <ChevronRight className="h-4 w-4 text-slate-600"/>
                            </button>
                        </div>
                    </div>

                    {/* Day tabs */}
                    <div className="flex border-b border-slate-100 px-4 py-2 text-sm">
                        {[
                            {day: 'MON', date: '23', active: false},
                            {day: 'TUE', date: '24', active: false},
                            {day: 'WED', date: '25', active: true},
                            {day: 'THU', date: '26', active: false},
                            {day: 'FRI', date: '27', active: false},
                        ].map(({day, date, active}) => (
                            <div
                                key={day}
                                className={`flex flex-col items-center mr-5 cursor-default relative pb-1 ${
                                    active ? 'text-blue-600' : 'text-slate-500'
                                }`}
                            >
                                <span
                                    className={`text-xs uppercase ${active ? 'font-bold' : 'font-medium'}`}>{day}</span>
                                <span className={`text-lg ${active ? 'font-bold' : 'font-medium'}`}>{date}</span>
                                {active && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600"/>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Schedule + right panel */}
                    <div className="flex flex-1 min-h-0">

                        {/* Schedule list */}
                        <div className="flex-1 overflow-y-auto p-1.5 space-y-2">
                            {[
                                {time: '08:00', name: 'Monika B.', type: 'General Consultation'},
                                {time: '08:30', name: 'Peter S.', type: 'Follow-up'},
                            ].map((slot) => (
                                <div key={slot.time}
                                     className="border border-slate-100 bg-white rounded-lg p-2.5 shadow-sm flex items-center gap-3">
                                    <div
                                        className="w-10 text-center text-sm font-semibold text-slate-700 flex-shrink-0">{slot.time}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-slate-900 text-sm truncate">{slot.name}</div>
                                        <div className="text-xs text-slate-500 truncate">{slot.type}</div>
                                    </div>
                                    <span
                                        className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">BOOKED</span>
                                </div>
                            ))}

                            {/* Available slot */}
                            <div
                                className="relative border border-amber-200 bg-amber-50/50 rounded-lg p-2.5 shadow-sm flex items-center gap-3">
                                <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-amber-500"/>
                                <div
                                    className="w-10 text-center text-sm font-semibold text-amber-700 flex-shrink-0 pl-1">09:00
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-amber-900 text-sm truncate">Available Slot</div>
                                    <div className="text-xs text-amber-600/80 flex items-center gap-1">
                                        <Zap className="h-3 w-3"/>
                                        <span className="truncate">Auto-matching waitlist...</span>
                                    </div>
                                </div>
                                <span
                                    className="text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">OPEN</span>
                            </div>

                            <div
                                className="border border-slate-100 bg-white rounded-lg p-2.5 shadow-sm flex items-center gap-3">
                                <div
                                    className="w-10 text-center text-sm font-semibold text-slate-700 flex-shrink-0">09:30
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-medium text-slate-900 text-sm truncate">Laura K.</div>
                                    <div className="text-xs text-slate-500 truncate">Annual Checkup</div>
                                </div>
                                <span
                                    className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">BOOKED</span>
                            </div>
                        </div>

                        {/* Right panel */}
                        <div className="hidden xl:block w-44 bg-slate-50 border-l border-slate-100 p-3 flex-shrink-0">
                            <div className="rounded-lg border border-amber-200 bg-white p-2.5 shadow-sm mb-3">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <Activity className="h-4 w-4 text-amber-600"/>
                                    <span className="text-sm font-semibold text-amber-600">Empty Slot Detected</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-2">09:00 slot just opened. 4 matching patients
                                    found.</p>
                                <button
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold py-1.5 rounded-md transition-colors">
                                    Notify All
                                </button>
                            </div>

                            <div className="text-xs font-semibold uppercase text-slate-500 mb-2 tracking-wide">Waiting
                                Patients
                            </div>
                            <div className="space-y-1.5">
                                {[
                                    {
                                        name: 'David C.',
                                        status: 'Accepted',
                                        statusColor: 'text-green-600',
                                        bg: 'bg-white border-slate-100'
                                    },
                                    {
                                        name: 'Sabine M.',
                                        status: 'Offer Sent',
                                        statusColor: 'text-blue-600',
                                        bg: 'bg-white border-slate-100'
                                    },
                                    {
                                        name: "Mark O.",
                                        status: 'Pending',
                                        statusColor: 'text-slate-400',
                                        bg: 'bg-slate-100/50 border-slate-50'
                                    },
                                    {
                                        name: 'Thomas H.',
                                        status: 'Pending',
                                        statusColor: 'text-slate-400',
                                        bg: 'bg-slate-100/50 border-slate-50'
                                    },
                                ].map((p) => (
                                    <div key={p.name}
                                         className={`flex items-center justify-between rounded p-1.5 text-xs shadow-sm border ${p.bg}`}>
                                        <span
                                            className={`font-medium ${p.bg.includes('slate-100/50') ? 'text-slate-600' : 'text-slate-700'}`}>{p.name}</span>
                                        <span className={`font-medium ${p.statusColor}`}>{p.status}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-200 mt-4 pt-3">
                                <div
                                    className="text-xs font-semibold uppercase text-slate-500 mb-2 tracking-wide">Automation
                                    Log
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-1.5 text-xs text-slate-500">
                                        <Smartphone className="h-3 w-3 text-slate-400 mt-0.5 flex-shrink-0"/>
                                        SMS sent to 3 patients
                                    </div>
                                    <div className="flex items-start gap-1.5 text-xs text-slate-500">
                                        <Mail className="h-3 w-3 text-slate-400 mt-0.5 flex-shrink-0"/>
                                        Email sent to 1 patient
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}