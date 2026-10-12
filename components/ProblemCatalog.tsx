'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Clock,
  Circle,
  AlertCircle,
  FileText
} from 'lucide-react';
import { DSAProblem, PROBLEM_TOPICS } from '@/data/problems';

interface ProblemCatalogProps {
  problems: DSAProblem[];
  onToggleStatus: (id: number, newStatus: 'solved' | 'in-progress' | 'not-started') => void;
  onOpenProblem: (p: DSAProblem) => void;
}

export function ProblemCatalog({
  problems,
  onToggleStatus,
  onOpenProblem
}: ProblemCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [missingLinksOnly, setMissingLinksOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;

  // Filter logic
  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      // Text search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.topic.toLowerCase().includes(q) ||
        p.externalId.toLowerCase().includes(q);

      // Topic filter
      const matchesTopic = selectedTopic === 'ALL' || p.topic === selectedTopic;

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === 'ALL' || p.difficulty === selectedDifficulty;

      // Status filter
      const matchesStatus =
        selectedStatus === 'ALL' || p.status === selectedStatus;

      // Missing practice links filter
      const matchesMissingLinks = !missingLinksOnly || !p.practiceUrl;

      return (
        matchesSearch &&
        matchesTopic &&
        matchesDifficulty &&
        matchesStatus &&
        matchesMissingLinks
      );
    });
  }, [
    problems,
    searchQuery,
    selectedTopic,
    selectedDifficulty,
    selectedStatus,
    missingLinksOnly
  ]);

  // Pagination
  const totalPages = Math.ceil(filteredProblems.length / pageSize) || 1;
  const paginatedProblems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProblems.slice(start, start + pageSize);
  }, [filteredProblems, currentPage, pageSize]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedTopic('ALL');
    setSelectedDifficulty('ALL');
    setSelectedStatus('ALL');
    setMissingLinksOnly(false);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-5">
      {/* Catalog Header & Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0d1728]">DSA Problem Catalog</h2>
          <p className="text-xs text-[#667085] mt-0.5">
            Showing {filteredProblems.length} of {problems.length} problems curated for product-company SDE roles.
          </p>
        </div>

        {/* Quick counts */}
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-[#eefbf6] text-[#17a673] font-bold">
            {problems.filter((p) => p.status === 'solved').length} Solved
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#fff8e8] text-[#d89418] font-bold">
            {problems.filter((p) => p.status === 'in-progress').length} In Progress
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#f2f4f7] text-[#667085] font-semibold">
            {problems.filter((p) => p.status === 'not-started').length} Remaining
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-[#e7ebf1] rounded-2xl p-4 shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-[#98a2b3] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by problem title, external ID (DSA-475), or topic..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728] placeholder-[#98a2b3]"
            />
          </div>

          {/* Topic Selector */}
          <div className="sm:col-span-3">
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
            >
              <option value="ALL">All Topics ({PROBLEM_TOPICS.length})</option>
              {PROBLEM_TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Selector */}
          <div className="sm:col-span-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
            >
              <option value="ALL">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Status Selector */}
          <div className="sm:col-span-2">
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
            >
              <option value="ALL">All Statuses</option>
              <option value="solved">Solved</option>
              <option value="in-progress">In Progress</option>
              <option value="not-started">Not Started</option>
            </select>
          </div>
        </div>

        {/* Filter Pill: Missing Practice Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#f2f4f7] text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-[#475467] font-medium hover:text-[#0d1728]">
            <input
              type="checkbox"
              checked={missingLinksOnly}
              onChange={(e) => {
                setMissingLinksOnly(e.target.checked);
                setCurrentPage(1);
              }}
              className="rounded text-[#087e99] focus:ring-[#23d3ee]"
            />
            <span>Filter unresolved / missing practice links</span>
            {missingLinksOnly && (
              <span className="text-[10px] font-bold bg-[#ffe4e6] text-[#e11d48] px-2 py-0.5 rounded-md">
                Admin review filter active
              </span>
            )}
          </label>

          {(searchQuery ||
            selectedTopic !== 'ALL' ||
            selectedDifficulty !== 'ALL' ||
            selectedStatus !== 'ALL' ||
            missingLinksOnly) && (
            <button
              onClick={resetFilters}
              className="text-[#087e99] hover:underline font-bold text-xs"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Problems Table */}
      <div className="bg-white border border-[#e7ebf1] rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[720px]">
            <thead>
              <tr className="bg-[#f9fafc] border-b border-[#e7ebf1] text-[#667085] uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 w-12 text-center">Status</th>
                <th className="py-3 px-4 w-24">ID</th>
                <th className="py-3 px-4">Problem Title</th>
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4 w-24">Difficulty</th>
                <th className="py-3 px-4 w-44 text-right">Practice & Guides</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f2f4f7]">
              {paginatedProblems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[#667085]">
                    <AlertCircle className="w-8 h-8 text-[#98a2b3] mx-auto mb-2" />
                    <p className="font-semibold text-sm text-[#0d1728]">No problems found matching criteria</p>
                    <p className="text-xs text-[#98a2b3] mt-1">Try clearing filters or adjusting your search term.</p>
                  </td>
                </tr>
              ) : (
                paginatedProblems.map((p) => {
                  const isSolved = p.status === 'solved';
                  const isInProgress = p.status === 'in-progress';

                  const diffBadge =
                    p.difficulty === 'Easy'
                      ? 'bg-[#eefbf6] text-[#17a673]'
                      : p.difficulty === 'Hard'
                      ? 'bg-[#ffe4e6] text-[#e11d48]'
                      : 'bg-[#fff8e8] text-[#d89418]';

                  return (
                    <tr
                      key={p.id}
                      className={`hover:bg-[#f9fafc] transition-colors ${
                        isSolved ? 'bg-[#fcfdfd]' : ''
                      }`}
                    >
                      {/* Interactive Status Toggle */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => {
                            const next = isSolved
                              ? 'not-started'
                              : isInProgress
                              ? 'solved'
                              : 'in-progress';
                            onToggleStatus(p.id, next);
                          }}
                          title={`Click to change status (Currently: ${p.status})`}
                          className="cursor-pointer transition-transform hover:scale-110"
                        >
                          {isSolved ? (
                            <CheckCircle2 className="w-5 h-5 text-[#17a673] fill-[#17a673]/10" />
                          ) : isInProgress ? (
                            <Clock className="w-5 h-5 text-[#d89418]" />
                          ) : (
                            <Circle className="w-5 h-5 text-[#cbd5e1] hover:text-[#94a3b8]" />
                          )}
                        </button>
                      </td>

                      {/* External ID */}
                      <td className="py-3.5 px-4 font-mono font-bold text-[#667085] text-[11px]">
                        {p.externalId}
                      </td>

                      {/* Title & Notes trigger */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onOpenProblem(p)}
                            className="font-bold text-[#0d1728] hover:text-[#087e99] hover:underline text-left cursor-pointer"
                          >
                            {p.title}
                          </button>
                          {p.notes && (
                            <span
                              title="Has personal notes"
                              className="text-[#087e99] shrink-0"
                            >
                              <FileText className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Topic */}
                      <td className="py-3.5 px-4 text-[#475467] font-medium">
                        {p.topic}
                      </td>

                      {/* Difficulty */}
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${diffBadge}`}>
                          {p.difficulty}
                        </span>
                      </td>

                      {/* Links Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* Notes Drawer Button */}
                          <button
                            onClick={() => onOpenProblem(p)}
                            className="px-2 py-1 rounded-md text-[11px] font-semibold text-[#475467] hover:bg-[#eaecf0] transition cursor-pointer"
                          >
                            Details
                          </button>

                          {/* TakeUForward Article */}
                          {p.articleUrl && (
                            <a
                              href={p.articleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Read TakeUForward Article / Editorial"
                              className="p-1 rounded-md text-[#667085] hover:text-[#087e99] hover:bg-[#eafcff] transition"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {/* Practice Button */}
                          {p.practiceUrl ? (
                            <a
                              href={p.practiceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 bg-[#eafcff] hover:bg-[#d5f7fd] text-[#087e99] font-bold text-[11px] px-2.5 py-1 rounded-lg transition"
                            >
                              Practice <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-[10px] font-semibold text-[#98a2b3] bg-[#f2f4f7] px-2 py-1 rounded-md italic">
                              Unavailable
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="px-5 py-3 border-t border-[#e7ebf1] bg-[#f9fafc] flex items-center justify-between text-xs text-[#667085]">
            <div>
              Showing page <b className="text-[#0d1728]">{currentPage}</b> of{' '}
              <b className="text-[#0d1728]">{totalPages}</b> ({filteredProblems.length} results)
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1.5 rounded-lg border border-[#e7ebf1] bg-white text-[#0d1728] font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f2f4f7] cursor-pointer"
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-3 py-1.5 rounded-lg border border-[#e7ebf1] bg-white text-[#0d1728] font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f2f4f7] cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
