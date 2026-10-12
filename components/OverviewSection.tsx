'use client';

import React from 'react';
import {
  Flame,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
  Award,
  ExternalLink,
  Code2,
  ListOrdered
} from 'lucide-react';
import { DSAProblem } from '@/data/problems';
import { TabType } from './Sidebar';

interface OverviewSectionProps {
  problems: DSAProblem[];
  streakDays: number;
  weeklyGoal: number;
  weeklySolved: number;
  setActiveTab: (tab: TabType) => void;
  onOpenProblem: (p: DSAProblem) => void;
}

export function OverviewSection({
  problems,
  streakDays,
  weeklyGoal,
  weeklySolved,
  setActiveTab,
  onOpenProblem
}: OverviewSectionProps) {
  const total = problems.length;
  const solved = problems.filter((p) => p.status === 'solved').length;
  const inProgress = problems.filter((p) => p.status === 'in-progress').length;
  const notStarted = problems.filter((p) => p.status === 'not-started').length;
  const completionPercent = Math.round((solved / (total || 1)) * 100);

  // Weekly percent
  const weeklyPercent = Math.min(Math.round((weeklySolved / (weeklyGoal || 1)) * 100), 100);

  // Sample curated preview
  const previewProblems = problems.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b1325] via-[#111e32] to-[#153749] text-white p-6 sm:p-10 shadow-lg border border-white/10">
        {/* Glow ambient background circle */}
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-[#58e6f0]/20 pointer-events-none" />
        <div className="absolute right-12 -bottom-20 w-60 h-60 rounded-full bg-[#23d3ee]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold tracking-widest text-[#8beaf5] uppercase">
              Your Placement Prep Cockpit
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] mt-3 mb-4">
              Build the habit.<br />
              <span className="text-[#23d3ee]">Ship the confidence.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed max-w-xl mb-6">
              A focused, systematic catalog for turning structured DSA and system design practice into visible placement momentum — one deliberate problem at a time.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveTab('catalog')}
                className="flex items-center gap-2 bg-[#23d3ee] hover:bg-[#1bc1dc] text-[#062435] font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow-md cursor-pointer"
              >
                <span>Browse Full Catalog ({total})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const firstUnfinished = problems.find((p) => p.status !== 'solved') || problems[0];
                  if (firstUnfinished) onOpenProblem(firstUnfinished);
                }}
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition cursor-pointer"
              >
                Continue Next Practice
              </button>
            </div>
          </div>

          {/* Current Run Card */}
          <div className="w-full lg:w-80 bg-white/5 border border-white/20 backdrop-blur-md rounded-2xl p-5 shrink-0">
            <div className="flex items-center justify-between text-[11px] font-bold text-[#aebdce] uppercase tracking-wider">
              <span>Current Run</span>
              <div className="w-8 h-8 rounded-full bg-[#d7ad3e]/20 text-[#f4d46c] flex items-center justify-center text-sm">
                <Flame className="w-4 h-4 fill-[#f4d46c]" />
              </div>
            </div>

            <div className="mt-3">
              <div className="text-3xl font-black text-white">
                {solved} <span className="text-sm font-normal text-[#aebdce]">solved</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-xs font-semibold text-[#cbd5e1] mb-1.5">
                <span>Overall Completion</span>
                <span className="text-[#23d3ee] font-bold">{completionPercent}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#23d3ee] rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(completionPercent, 2)}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] mt-4 leading-relaxed">
              Keep your streak alive by solving one deliberate problem on LeetCode or GeeksforGeeks today.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Stats Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" aria-label="Progress summary">
        <div className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#eff8fa] text-[#087e99] flex items-center justify-center text-lg shrink-0">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-[#667085] font-medium block">Total problems</span>
            <strong className="text-2xl font-black text-[#0d1728] leading-tight block">{total}</strong>
            <small className="text-[11px] text-[#98a2b3]">in curated catalog</small>
          </div>
        </div>

        <div className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#eefbf6] text-[#17a673] flex items-center justify-center text-lg shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-[#667085] font-medium block">Solved</span>
            <strong className="text-2xl font-black text-[#17a673] leading-tight block">{solved}</strong>
            <small className="text-[11px] text-[#98a2b3]">{completionPercent}% complete</small>
          </div>
        </div>

        <div className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#fff8e8] text-[#d89418] flex items-center justify-center text-lg shrink-0">
            <Flame className="w-5 h-5 fill-[#d89418]" />
          </div>
          <div>
            <span className="text-xs text-[#667085] font-medium block">In progress</span>
            <strong className="text-2xl font-black text-[#d89418] leading-tight block">{inProgress}</strong>
            <small className="text-[11px] text-[#98a2b3]">keep the thread</small>
          </div>
        </div>

        <div className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#edfafd] text-[#07839c] flex items-center justify-center text-lg shrink-0">
            <ListOrdered className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-[#667085] font-medium block">Not started</span>
            <strong className="text-2xl font-black text-[#0d1728] leading-tight block">{notStarted}</strong>
            <small className="text-[11px] text-[#98a2b3]">ready when you are</small>
          </div>
        </div>
      </section>

      {/* Grid: Practice Pulse + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Practice Pulse Panel */}
        <section className="lg:col-span-7 bg-white border border-[#edf0f4] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-[#0d1728]">Your practice pulse</h3>
              <p className="text-xs text-[#667085] mt-0.5">This week’s rhythm and consistency at a glance.</p>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087e99] bg-[#eafcff] px-2.5 py-1 rounded-md">
              Target Phase
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Circular Ring */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center relative shadow-inner"
                style={{
                  background: `conic-gradient(#23d3ee ${weeklyPercent * 3.6}deg, #e8edf3 ${weeklyPercent * 3.6}deg)`
                }}
              >
                <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-sm">
                  <strong className="text-2xl font-black text-[#0d1728] leading-none">
                    {weeklyPercent}%
                  </strong>
                  <small className="text-[10px] text-[#667085] uppercase tracking-wider font-semibold mt-1">
                    weekly goal
                  </small>
                </div>
              </div>
            </div>

            {/* Bars */}
            <div className="sm:col-span-7 space-y-4">
              <div>
                <div className="flex justify-between text-xs text-[#475467] font-medium mb-1.5">
                  <span>Weekly goal</span>
                  <b className="text-[#0d1728]">{weeklySolved} / {weeklyGoal}</b>
                </div>
                <div className="h-2 w-full bg-[#eef1f5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#23d3ee] rounded-full"
                    style={{ width: `${Math.max(weeklyPercent, 8)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-[#475467] font-medium mb-1.5">
                  <span>Current streak</span>
                  <b className="text-[#17a673]">{streakDays} days</b>
                </div>
                <div className="h-2 w-full bg-[#eef1f5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#17a673] rounded-full"
                    style={{ width: `${Math.min(streakDays * 15, 100)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-[#475467] font-medium mb-1.5">
                  <span>Course momentum</span>
                  <b className="text-[#d89418]">38%</b>
                </div>
                <div className="h-2 w-full bg-[#eef1f5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#d89418] rounded-full" style={{ width: '38%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity Panel */}
        <section className="lg:col-span-5 bg-white border border-[#edf0f4] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-[#0d1728]">Recent activity</h3>
                <p className="text-xs text-[#667085] mt-0.5">Small steps compound over time.</p>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 pb-3 border-b border-[#f2f4f7]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#23d3ee] ring-4 ring-[#eafcff] mt-1 shrink-0" />
                <div>
                  <strong className="text-xs font-bold text-[#0d1728] block">
                    Started your preparation run
                  </strong>
                  <span className="text-[11px] text-[#667085]">Today · 362 problems catalog loaded</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-[#f2f4f7]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17a673] ring-4 ring-[#eefbf6] mt-1 shrink-0" />
                <div>
                  <strong className="text-xs font-bold text-[#0d1728] block">
                    AI Skill Course is ready
                  </strong>
                  <span className="text-[11px] text-[#667085]">40 weeks · complete resource mapped</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#d89418] ring-4 ring-[#fff8e8] mt-1 shrink-0" />
                <div>
                  <strong className="text-xs font-bold text-[#0d1728] block">
                    Profile space active
                  </strong>
                  <span className="text-[11px] text-[#667085]">Private academic learner details</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#f2f4f7]">
            <button
              onClick={() => setActiveTab('catalog')}
              className="w-full text-center text-xs font-bold text-[#087e99] hover:text-[#065b6f] transition"
            >
              View complete activity history →
            </button>
          </div>
        </section>
      </div>

      {/* DSA Catalog Preview Table */}
      <section className="bg-white border border-[#edf0f4] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-[#0d1728]">DSA catalog preview</h3>
            <p className="text-xs text-[#667085]">Sample of the curated 362-problem practice library.</p>
          </div>
          <button
            onClick={() => setActiveTab('catalog')}
            className="text-xs font-bold text-[#087e99] hover:underline flex items-center gap-1"
          >
            Open complete catalog ({total}) <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-[#e7ebf1] text-[#667085] uppercase tracking-wider text-[10px]">
                <th className="py-2.5 px-3">Problem</th>
                <th className="py-2.5 px-3">Topic</th>
                <th className="py-2.5 px-3">Difficulty</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2f4f7]">
              {previewProblems.map((p) => {
                const diffColor =
                  p.difficulty === 'Easy'
                    ? 'text-[#17a673] bg-[#eefbf6]'
                    : p.difficulty === 'Hard'
                    ? 'text-[#e11d48] bg-[#ffe4e6]'
                    : 'text-[#d89418] bg-[#fff8e8]';

                const statusColor =
                  p.status === 'solved'
                    ? 'text-[#17a673]'
                    : p.status === 'in-progress'
                    ? 'text-[#d89418]'
                    : 'text-[#667085]';

                return (
                  <tr key={p.id} className="hover:bg-[#f9fafc] transition-colors">
                    <td className="py-3 px-3 font-semibold text-[#0d1728]">
                      <button
                        onClick={() => onOpenProblem(p)}
                        className="hover:text-[#087e99] hover:underline text-left cursor-pointer"
                      >
                        {p.title}
                      </button>
                    </td>
                    <td className="py-3 px-3 text-[#667085]">{p.topic}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${diffColor}`}>
                        {p.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold capitalize">
                      <span className={statusColor}>
                        {p.status === 'in-progress' ? 'In Progress' : p.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      {p.practiceUrl ? (
                        <a
                          href={p.practiceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#087e99] hover:underline font-semibold"
                        >
                          Practice <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[#98a2b3] italic">No direct link</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Structured Tracks Section */}
      <section>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-[#0d1728]">Choose your next track</h3>
          <p className="text-xs text-[#667085]">Structured paths designed for product company interview rounds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Track 1: DSA Catalog */}
          <article className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-[#eafcff] text-[#087e99]">
                Practice
              </span>
              <h4 className="text-base font-bold text-[#0d1728] mt-3 mb-1">
                DSA Problem Catalog
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                362+ curated problems with topics, difficulties, TakeUForward articles, and direct LeetCode / GeeksforGeeks links.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#f2f4f7] text-xs">
              <span className="text-[#667085] font-medium">{total} problems</span>
              <button
                onClick={() => setActiveTab('catalog')}
                className="font-bold text-[#087e99] hover:underline flex items-center gap-1"
              >
                Open path <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Track 2: AI Skill Course */}
          <article className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-[#fff6e4] text-[#996200]">
                40 Weeks
              </span>
              <h4 className="text-base font-bold text-[#0d1728] mt-3 mb-1">
                AI Skill Course
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                Workbook-aligned AI, data, and ML learning with weekly objectives, tasks, milestone checkpoints, and resource links.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#f2f4f7] text-xs">
              <span className="text-[#667085] font-medium">160+ resources</span>
              <button
                onClick={() => setActiveTab('ai-course')}
                className="font-bold text-[#087e99] hover:underline flex items-center gap-1"
              >
                Open path <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Track 3: Core CSE Domain Course */}
          <article className="bg-white border border-[#edf0f4] rounded-2xl p-5 shadow-sm hover:-translate-y-1 transition duration-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-[#effbf5] text-[#14835e]">
                Core CSE
              </span>
              <h4 className="text-base font-bold text-[#0d1728] mt-3 mb-1">
                Core CSE Domain Course
              </h4>
              <p className="text-xs text-[#667085] leading-relaxed mb-4">
                Interview-focused coverage across nine essential computer-science tracks: OOP, DBMS, OS, Networks, System Design, and TOC.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#f2f4f7] text-xs">
              <span className="text-[#667085] font-medium">9 domains</span>
              <button
                onClick={() => setActiveTab('core-cse')}
                className="font-bold text-[#087e99] hover:underline flex items-center gap-1"
              >
                Open path <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
