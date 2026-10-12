'use client';

import React from 'react';
import { Target, Timer, Flame, CheckCircle2 } from 'lucide-react';

interface TopBarProps {
  onOpenFocusMode: () => void;
  solvedCount: number;
  totalProblems: number;
  streakDays: number;
}

export function TopBar({
  onOpenFocusMode,
  solvedCount,
  totalProblems,
  streakDays
}: TopBarProps) {
  const completionPercent = Math.round((solvedCount / (totalProblems || 1)) * 100);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-[#e7ebf1] sticky top-0 z-20 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-wider text-[#087e99]">
          <span>Preparation Workspace</span>
          <span>•</span>
          <span className="text-[#17a673] flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3" /> System Connected
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-[#0d1728] mt-0.5">
          Good morning, keep your momentum high.
        </h2>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        {/* Streak indicator */}
        <div className="flex items-center gap-2 bg-[#fff8e8] border border-[#f5dfa8] px-3 py-1.5 rounded-xl text-xs font-semibold text-[#8a5d09]">
          <Flame className="w-4 h-4 text-[#d89418] fill-[#d89418]" />
          <span>{streakDays} Day Streak</span>
        </div>

        {/* Catalog Progress */}
        <div className="hidden md:flex items-center gap-2 bg-[#f6f8fb] border border-[#e7ebf1] px-3 py-1.5 rounded-xl text-xs font-medium text-[#475467]">
          <Target className="w-3.5 h-3.5 text-[#087e99]" />
          <span>{solvedCount}/{totalProblems} solved ({completionPercent}%)</span>
        </div>

        {/* Focus Mode button */}
        <button
          onClick={onOpenFocusMode}
          className="flex items-center gap-2 bg-[#0b1425] hover:bg-[#111e32] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
        >
          <Timer className="w-3.5 h-3.5 text-[#23d3ee]" />
          <span>Focus Mode</span>
        </button>
      </div>
    </header>
  );
}
