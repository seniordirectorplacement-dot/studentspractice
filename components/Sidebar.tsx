'use client';

import React from 'react';
import {
  LayoutDashboard,
  Database,
  BrainCircuit,
  GraduationCap,
  Award,
  User,
  ShieldCheck,
  Flame,
  Code2
} from 'lucide-react';

export type TabType = 'overview' | 'catalog' | 'ai-course' | 'core-cse' | 'certifications' | 'profile' | 'admin';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  solvedCount: number;
  totalProblems: number;
  streakDays: number;
  learnerName: string;
}

export function Sidebar({
  activeTab,
  setActiveTab,
  solvedCount,
  totalProblems,
  streakDays,
  learnerName
}: SidebarProps) {
  const navItems: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'catalog', label: 'Problem Catalog', icon: <Database className="w-4 h-4" />, badge: `${solvedCount}/${totalProblems}` },
    { id: 'ai-course', label: 'AI Skill Course', icon: <BrainCircuit className="w-4 h-4" />, badge: '40 wks' },
    { id: 'core-cse', label: 'Core CSE Domains', icon: <GraduationCap className="w-4 h-4" />, badge: '9 tracks' },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
    { id: 'admin', label: 'Admin Review & Analytics', icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <aside className="w-64 bg-[#f9fafc] border-r border-[#e7ebf1] flex flex-col justify-between shrink-0 min-h-screen sticky top-0 h-screen overflow-y-auto">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-[#e7ebf1]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0b1425] text-[#23d3ee] flex items-center justify-center font-black shadow-sm shrink-0">
              <Code2 className="w-5 h-5 text-[#23d3ee]" />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-sm font-bold text-[#0d1728] leading-tight truncate">
                Product Companies Hub
              </h1>
              <p className="text-[10px] uppercase tracking-wider font-extrabold text-[#087e99] mt-0.5">
                Learn · Practice · Master
              </p>
            </div>
          </div>

          {/* Mini Streak Pill */}
          <div className="mt-4 px-3 py-1.5 rounded-lg bg-white border border-[#e7ebf1] flex items-center justify-between text-xs">
            <span className="text-[#667085] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#d89418] fill-[#d89418]" />
              Active Streak
            </span>
            <span className="font-bold text-[#0d1728]">{streakDays} days</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#98a2b3]">
            Curriculum & Prep
          </div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors text-left ${
                  isActive
                    ? 'bg-[#eafcff] text-[#056d83] border border-[#23d3ee]/30 font-bold'
                    : 'text-[#475467] hover:bg-[#edf2f7] hover:text-[#0d1728]'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={isActive ? 'text-[#087e99]' : 'text-[#667085]'}>
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold shrink-0 ${
                      isActive
                        ? 'bg-[#23d3ee]/20 text-[#056d83]'
                        : 'bg-[#eaecf0] text-[#475467]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Card */}
      <div className="p-4 border-t border-[#e7ebf1] bg-white">
        <div
          onClick={() => setActiveTab('profile')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-[#0b1425] text-white flex items-center justify-center text-xs font-bold shrink-0 group-hover:ring-2 ring-[#23d3ee]">
            {learnerName.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-[#0d1728] truncate group-hover:text-[#087e99]">
              {learnerName}
            </p>
            <p className="text-[11px] text-[#667085] truncate">
              Private Learner Account
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
