'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookMarked,
  Code2
} from 'lucide-react';
import { CORE_CSE_DOMAINS, CoreCseDomain } from '@/data/coreCse';

export function CoreCseModule() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomainId, setSelectedDomainId] = useState<string>('all');
  const [expandedDomainId, setExpandedDomainId] = useState<string>('oop');

  const filteredDomains = CORE_CSE_DOMAINS.filter((d) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q) ||
      d.topics.some((t) => t.toLowerCase().includes(q)) ||
      d.interviewFocus.some((f) => f.toLowerCase().includes(q));

    const matchesDomain = selectedDomainId === 'all' || d.id === selectedDomainId;

    return matchesSearch && matchesDomain;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0d1728] via-[#14233b] to-[#18364d] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8beaf5] uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-[#23d3ee]" />
              <span>Computer Science Fundamentals</span>
              <span>•</span>
              <span>9 Curated Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Core CSE Domain Course
            </h2>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl mt-2 leading-relaxed">
              Interview-focused syllabus across the nine foundational computer science pillars required by top product companies, FAANG, and Tier-1 recruiters.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-xs shrink-0 max-w-xs">
            <span className="text-[#8beaf5] font-bold block mb-1">
              Top Recruiter Emphasis
            </span>
            <p className="text-[#cbd5e1] leading-relaxed">
              Most candidates fail in Round 2 & 3 due to weak OS virtual memory, DBMS transaction locks, or TCP handshake mechanics.
            </p>
          </div>
        </div>
      </div>

      {/* Domain Navigation Pills & Search */}
      <div className="bg-white border border-[#e7ebf1] rounded-2xl p-4 shadow-sm space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-[#98a2b3] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search domain concepts (e.g. ACID, vtable, virtual memory, TLS 1.3, LLD, Consistent Hashing)..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
          />
        </div>

        {/* Quick filter pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setSelectedDomainId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedDomainId === 'all'
                ? 'bg-[#0b1425] text-white'
                : 'bg-[#f2f4f7] text-[#475467] hover:bg-[#e4e7ec]'
            }`}
          >
            All 9 Domains
          </button>
          {CORE_CSE_DOMAINS.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomainId(domain.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedDomainId === domain.id
                  ? 'bg-[#087e99] text-white font-bold'
                  : 'bg-[#f2f4f7] text-[#475467] hover:bg-[#e4e7ec]'
              }`}
            >
              {domain.name.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Domains Cards List */}
      <div className="space-y-5">
        {filteredDomains.map((domain) => {
          const isExpanded = expandedDomainId === domain.id;

          return (
            <div
              key={domain.id}
              className="bg-white border border-[#e7ebf1] rounded-2xl shadow-sm overflow-hidden transition"
            >
              {/* Domain Header Card */}
              <div
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#fcfdfd] transition"
                onClick={() => setExpandedDomainId(isExpanded ? '' : domain.id)}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#eafcff] text-[#087e99] flex items-center justify-center font-bold text-sm shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#667085]">
                        {domain.code}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#eefbf6] text-[#17a673]">
                        {domain.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0d1728] mt-0.5">
                      {domain.name}
                    </h3>
                    <p className="text-xs text-[#667085] mt-1 line-clamp-2">
                      {domain.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <span className="text-xs font-bold text-[#087e99]">
                    {isExpanded ? 'Hide Details' : 'Explore Domain'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-[#087e99]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#667085]" />
                  )}
                </div>
              </div>

              {/* Expanded Detailed Sections */}
              {isExpanded && (
                <div className="p-6 border-t border-[#f2f4f7] bg-[#f9fafc]/50 space-y-6">
                  {/* Two column breakdown: Topics vs Interview Questions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Core Topics Checklist */}
                    <div className="bg-white p-5 rounded-xl border border-[#e7ebf1] space-y-3">
                      <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider flex items-center gap-2">
                        <BookMarked className="w-4 h-4 text-[#087e99]" />
                        <span>Syllabus Topics & Key Concepts</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-[#475467]">
                        {domain.topics.map((t, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#23d3ee] font-black shrink-0">•</span>
                            <span className="leading-relaxed">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interview Focus Scenarios */}
                    <div className="bg-white p-5 rounded-xl border border-[#e7ebf1] space-y-3">
                      <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#d89418]" />
                        <span>High-Frequency Interview Scenarios</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-[#344054]">
                        {domain.interviewFocus.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 bg-[#fffdf8] p-2 rounded-lg border border-[#fef3d6]">
                            <span className="font-bold text-[#d89418] shrink-0">Q{i + 1}:</span>
                            <span className="leading-relaxed font-medium">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Curated Free Resources */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0d1728] uppercase tracking-wider mb-2.5">
                      Vetted Free Learning Resources & Handbooks
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {domain.freeResources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-[#eafcff] border border-[#e7ebf1] hover:border-[#23d3ee] p-3 rounded-xl transition text-xs flex flex-col justify-between group shadow-2xs"
                        >
                          <div>
                            <span className="text-[10px] font-extrabold uppercase text-[#087e99] block mb-1">
                              {res.type}
                            </span>
                            <p className="font-bold text-[#0d1728] group-hover:text-[#087e99] leading-snug">
                              {res.title}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#087e99] mt-3">
                            <span>Access resource</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
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
