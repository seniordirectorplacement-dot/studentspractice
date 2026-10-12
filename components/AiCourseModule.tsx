'use client';

import React, { useState, useMemo } from 'react';
import {
  BrainCircuit,
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink,
  Target,
  FileCheck
} from 'lucide-react';
import { AI_SKILL_COURSE, WeeklyTopic } from '@/data/aiCourse';

interface AiCourseModuleProps {
  completedWeeks: number[];
  onToggleWeekCompletion: (weekNumber: number) => void;
}

export function AiCourseModule({
  completedWeeks,
  onToggleWeekCompletion
}: AiCourseModuleProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [milestonesOnly, setMilestonesOnly] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1, 12, 24, 36, 40]);

  const toggleExpand = (week: number) => {
    setExpandedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  const expandAll = () => {
    setExpandedWeeks(AI_SKILL_COURSE.map((w) => w.week));
  };

  const collapseAll = () => {
    setExpandedWeeks([]);
  };

  const filteredWeeks = useMemo(() => {
    return AI_SKILL_COURSE.filter((w) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.focus.toLowerCase().includes(q) ||
        w.placementNotes.toLowerCase().includes(q) ||
        w.objectives.some((obj) => obj.toLowerCase().includes(q)) ||
        w.activities.some((act) => act.toLowerCase().includes(q));

      const matchesMilestone = !milestonesOnly || !!w.isMilestone;

      return matchesSearch && matchesMilestone;
    });
  }, [searchQuery, milestonesOnly]);

  const completedCount = completedWeeks.length;
  const progressPercent = Math.round((completedCount / AI_SKILL_COURSE.length) * 100);

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-[#0b1425] to-[#162a45] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8beaf5] uppercase tracking-wider mb-2">
              <BrainCircuit className="w-4 h-4 text-[#23d3ee]" />
              <span>Placement AI & ML Curriculum</span>
              <span>•</span>
              <span>Workbook Aligned</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              AI Skill Course (40 Weeks)
            </h2>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl mt-2 leading-relaxed">
              Curated roadmap aligned with industry placement expectations: from Python & Linear Algebra foundations through Deep Learning, Transformers, RAG, and LLM Agent deployment.
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 min-w-[240px]">
            <div className="flex justify-between items-center text-xs font-semibold text-[#cbd5e1] mb-2">
              <span>Curriculum Progress</span>
              <span className="text-[#23d3ee] font-black text-sm">{progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#23d3ee] rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] text-[#94a3b8] mt-2">
              <span>{completedCount} of 40 weeks done</span>
              <span>{40 - completedCount} remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#e7ebf1] rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#98a2b3] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics (e.g. PyTorch, RAG, Transformers, LoRA, Docker)..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#475467] hover:text-[#0d1728]">
            <input
              type="checkbox"
              checked={milestonesOnly}
              onChange={(e) => setMilestonesOnly(e.target.checked)}
              className="rounded text-[#087e99] focus:ring-[#23d3ee]"
            />
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#d89418]" />
              Milestone Weeks Only
            </span>
          </label>

          <div className="border-l border-[#e7ebf1] pl-3 flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="text-[#087e99] hover:underline font-semibold cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-[#cbd5e1]">•</span>
            <button
              onClick={collapseAll}
              className="text-[#667085] hover:underline font-semibold cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Weeks List */}
      <div className="space-y-4">
        {filteredWeeks.map((topic) => {
          const isDone = completedWeeks.includes(topic.week);
          const isExpanded = expandedWeeks.includes(topic.week);

          return (
            <div
              key={topic.week}
              className={`bg-white border rounded-2xl transition-all shadow-sm overflow-hidden ${
                topic.isMilestone
                  ? 'border-[#23d3ee]/60 ring-2 ring-[#23d3ee]/10'
                  : 'border-[#e7ebf1]'
              }`}
            >
              {/* Week Row Header */}
              <div
                className={`p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fcfdfd] transition ${
                  isDone ? 'bg-[#fcfefe]' : ''
                }`}
                onClick={() => toggleExpand(topic.week)}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  {/* Completion Checkbox */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWeekCompletion(topic.week);
                    }}
                    className="cursor-pointer shrink-0"
                    title={isDone ? 'Mark week as incomplete' : 'Mark week as completed'}
                  >
                    <CheckCircle2
                      className={`w-6 h-6 transition ${
                        isDone
                          ? 'text-[#17a673] fill-[#17a673]/15'
                          : 'text-[#d0d5dd] hover:text-[#98a2b3]'
                      }`}
                    />
                  </button>

                  {/* Week Badge */}
                  <span
                    className={`font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0 ${
                      topic.isMilestone
                        ? 'bg-[#0b1425] text-[#23d3ee]'
                        : isDone
                        ? 'bg-[#eefbf6] text-[#17a673]'
                        : 'bg-[#f2f4f7] text-[#475467]'
                    }`}
                  >
                    Week {topic.week < 10 ? `0${topic.week}` : topic.week}
                  </span>

                  {/* Title and Focus */}
                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-sm font-bold truncate ${
                          isDone ? 'text-[#0d6848] line-through decoration-[#17a673]' : 'text-[#0d1728]'
                        }`}
                      >
                        {topic.title}
                      </h3>
                      {topic.isMilestone && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold bg-[#fff8e8] text-[#996200] border border-[#f5dfa8] px-2 py-0.5 rounded-full shrink-0">
                          <Sparkles className="w-3 h-3 text-[#d89418]" /> Milestone
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#667085] truncate mt-0.5">
                      {topic.focus}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-[#98a2b3] hidden sm:inline">
                    {topic.resources.length} resources
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#667085]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#667085]" />
                  )}
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-[#f2f4f7] bg-[#f9fafc]/50 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Objectives */}
                    <div className="bg-white p-4 rounded-xl border border-[#e7ebf1]">
                      <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#087e99]" />
                        <span>Weekly Learning Objectives</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#475467]">
                        {topic.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#23d3ee] font-black">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Activities */}
                    <div className="bg-white p-4 rounded-xl border border-[#e7ebf1]">
                      <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-[#17a673]" />
                        <span>Hands-On Activities & Labs</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#475467]">
                        {topic.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#17a673] font-black">✓</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Placement Notes */}
                  <div className="bg-[#eff8fa] border border-[#d2f0f7] rounded-xl p-3.5 text-xs text-[#055768]">
                    <strong className="font-bold text-[#087e99] block mb-0.5">
                      Placement Interview Insight:
                    </strong>
                    {topic.placementNotes}
                  </div>

                  {/* Resource Links */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider mb-2">
                      Primary & Supplementary Resources
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {topic.resources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-[#eafcff] border border-[#e7ebf1] hover:border-[#23d3ee]/50 p-2.5 rounded-xl text-xs font-medium text-[#0d1728] transition flex items-center justify-between group"
                        >
                          <div className="truncate mr-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087e99] block">
                              {res.type}
                            </span>
                            <span className="truncate block font-semibold text-[#344054] group-hover:text-[#087e99]">
                              {res.title}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-[#98a2b3] group-hover:text-[#087e99] shrink-0" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
