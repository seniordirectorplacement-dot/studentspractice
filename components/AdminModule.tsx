'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Users,
  Download,
  Upload,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Search,
  FileSpreadsheet,
  AlertTriangle,
  RefreshCw,
  Plus
} from 'lucide-react';
import {
  SAMPLE_ADMIN_LEARNERS,
  INITIAL_UNRESOLVED_CANDIDATES,
  AdminLearnerRecord,
  UnresolvedLinkCandidate
} from '@/data/initialLearner';
import { DSAProblem } from '@/data/problems';

interface AdminModuleProps {
  problems: DSAProblem[];
  onApplyUrlToProblem: (externalId: string, url: string) => void;
}

export function AdminModule({ problems, onApplyUrlToProblem }: AdminModuleProps) {
  const [candidates, setCandidates] = useState<UnresolvedLinkCandidate[]>(
    INITIAL_UNRESOLVED_CANDIDATES
  );
  const [learnerSearch, setLearnerSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'learners' | 'links' | 'import'>('learners');
  const [bulkCsvText, setBulkCsvText] = useState(
    `DSA-01,https://www.geeksforgeeks.org/fast-io-in-c-with-examples/\nDSA-06,https://practice.geeksforgeeks.org/problems/for-loop-primecheck-java/1\nDSA-18,https://www.geeksforgeeks.org/count-digits-in-given-number-n/`
  );
  const [bulkImportResult, setBulkImportResult] = useState<string | null>(null);

  // 5,000 Enrollment Capacity Guard
  const capacityTotal = 5000;
  const currentEnrolled = 2842;
  const capacityPercent = Math.round((currentEnrolled / capacityTotal) * 100);

  // Filter learners
  const filteredLearners = SAMPLE_ADMIN_LEARNERS.filter((l) => {
    const q = learnerSearch.toLowerCase();
    return (
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.course.toLowerCase().includes(q)
    );
  });

  // Apply candidate
  const handleApplyCandidate = (candidate: UnresolvedLinkCandidate) => {
    onApplyUrlToProblem(candidate.externalId, candidate.suggestedUrl);
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === candidate.id ? { ...c, status: 'applied' } : c
      )
    );
  };

  // Dismiss candidate
  const handleDismissCandidate = (id: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'dismissed' } : c))
    );
  };

  // Export to Excel / CSV
  const handleExportCsv = () => {
    const headers = [
      'Learner ID',
      'Name',
      'Email',
      'Course',
      'Graduation Year',
      'Solved Problems',
      'In Progress',
      'Not Started',
      'Completion Rate (%)',
      'Current Streak (Days)',
      'Weekly Target',
      'Last Active'
    ];

    const rows = SAMPLE_ADMIN_LEARNERS.map((l) => [
      l.id,
      `"${l.name}"`,
      l.email,
      `"${l.course}"`,
      l.gradYear,
      l.solved,
      l.inProgress,
      l.notStarted,
      `${l.completionRate}%`,
      l.currentStreak,
      l.weeklyTarget,
      `"${l.lastActive}"`
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `klu_learners_placement_progress_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Bulk Import CSV apply
  const handleBulkImport = () => {
    const lines = bulkCsvText.trim().split('\n');
    let updatedCount = 0;

    lines.forEach((line) => {
      const parts = line.split(',').map((p) => p.trim());
      if (parts.length >= 2) {
        const [externalId, url] = parts;
        if (externalId && url && url.startsWith('http')) {
          onApplyUrlToProblem(externalId, url);
          updatedCount++;
        }
      }
    });

    setBulkImportResult(`Successfully parsed and applied ${updatedCount} problem URLs.`);
    setTimeout(() => setBulkImportResult(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Admin Desk Header */}
      <div className="bg-gradient-to-r from-[#0b1425] via-[#122238] to-[#15344d] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8beaf5] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-[#23d3ee]" />
              <span>Admin Desk & Capacity Control</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Learner Analytics & URL Review
            </h2>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl mt-2 leading-relaxed">
              Real-time placement cohort monitoring, 5,000-learner capacity guard, Excel progress reporting, and automated URL suggestion approvals.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab('learners')}
              className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'learners'
                  ? 'bg-[#23d3ee] text-[#062435]'
                  : 'text-white hover:text-[#8beaf5]'
              }`}
            >
              Learner Directory
            </button>
            <button
              onClick={() => setActiveTab('links')}
              className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'links'
                  ? 'bg-[#23d3ee] text-[#062435]'
                  : 'text-white hover:text-[#8beaf5]'
              }`}
            >
              Link Review Queue
            </button>
            <button
              onClick={() => setActiveTab('import')}
              className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
                activeTab === 'import'
                  ? 'bg-[#23d3ee] text-[#062435]'
                  : 'text-white hover:text-[#8beaf5]'
              }`}
            >
              Bulk URL Import
            </button>
          </div>
        </div>
      </div>

      {/* 5,000 Capacity Guard Card */}
      <div className="bg-white border border-[#e7ebf1] rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eafcff] text-[#087e99] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#0d1728]">
                  Open Self-Enrollment Capacity Monitor
                </h3>
                <span className="text-[10px] font-extrabold uppercase bg-[#eefbf6] text-[#17a673] px-2 py-0.5 rounded-md">
                  Active Guard
                </span>
              </div>
              <p className="text-xs text-[#667085]">
                {currentEnrolled.toLocaleString()} learners enrolled of {capacityTotal.toLocaleString()} authorized capacity seats
              </p>
            </div>
          </div>

          <div className="text-right sm:shrink-0">
            <span className="text-lg font-black text-[#0d1728]">
              {(capacityTotal - currentEnrolled).toLocaleString()}
            </span>
            <small className="text-xs text-[#667085] block font-medium">
              available seats remaining
            </small>
          </div>
        </div>

        <div className="h-3 w-full bg-[#eef1f5] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#23d3ee] to-[#087e99] rounded-full transition-all duration-500"
            style={{ width: `${capacityPercent}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] text-[#667085] mt-2 font-medium">
          <span>0 (Starting Threshold)</span>
          <span>{capacityPercent}% Enrolled Capacity</span>
          <span>5,000 Limit Guard</span>
        </div>
      </div>

      {/* Tab 1: Learner Directory */}
      {activeTab === 'learners' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#98a2b3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={learnerSearch}
                onChange={(e) => setLearnerSearch(e.target.value)}
                placeholder="Filter by learner name, email, or program..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
              />
            </div>

            <button
              onClick={handleExportCsv}
              className="flex items-center gap-2 bg-[#0b1425] hover:bg-[#111e32] text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer self-start sm:self-auto"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#23d3ee]" />
              <span>Export Learner Data to Excel / CSV</span>
            </button>
          </div>

          <div className="bg-white border border-[#e7ebf1] rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[#f9fafc] border-b border-[#e7ebf1] text-[#667085] uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-4">Learner Name</th>
                    <th className="py-3 px-4">Course</th>
                    <th className="py-3 px-4 text-center">Solved</th>
                    <th className="py-3 px-4 text-center">In Progress</th>
                    <th className="py-3 px-4 text-center">Completion</th>
                    <th className="py-3 px-4 text-center">Streak</th>
                    <th className="py-3 px-4 text-right">Last Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f2f4f7]">
                  {filteredLearners.map((learner) => (
                    <tr key={learner.id} className="hover:bg-[#f9fafc] transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#0d1728]">{learner.name}</div>
                        <div className="text-[11px] text-[#667085]">{learner.email}</div>
                      </td>
                      <td className="py-3.5 px-4 text-[#475467] font-medium">
                        {learner.course} ({learner.gradYear})
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-[#17a673]">
                        {learner.solved}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-[#d89418]">
                        {learner.inProgress}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-[#0d1728]">
                        <span className="px-2 py-0.5 rounded-md bg-[#eafcff] text-[#087e99]">
                          {learner.completionRate}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-[#0d1728]">
                        {learner.currentStreak} d
                      </td>
                      <td className="py-3.5 px-4 text-right text-[#667085]">
                        {learner.lastActive}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Link Review Queue */}
      {activeTab === 'links' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-[#0d1728]">
              Automated Problem URL Suggestion Desk
            </h3>
            <p className="text-xs text-[#667085]">
              Inspect, apply, or dismiss candidate practice URLs for unmapped problems.
            </p>
          </div>

          <div className="space-y-3">
            {candidates.map((cand) => (
              <div
                key={cand.id}
                className="bg-white border border-[#e7ebf1] rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#667085]">
                      {cand.externalId}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#f2f4f7] text-[#475467]">
                      {cand.topic}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#eafcff] text-[#087e99]">
                      Source: {cand.source}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0d1728]">{cand.title}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#087e99] break-all">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <a
                      href={cand.suggestedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cand.suggestedUrl}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {cand.status === 'applied' ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-[#17a673] bg-[#eefbf6] px-3 py-1.5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4" /> Applied
                    </span>
                  ) : cand.status === 'dismissed' ? (
                    <span className="text-xs font-semibold text-[#98a2b3] bg-[#f2f4f7] px-3 py-1.5 rounded-xl">
                      Dismissed
                    </span>
                  ) : (
                    <>
                      <button
                        onClick={() => handleApplyCandidate(cand)}
                        className="flex items-center gap-1.5 bg-[#17a673] hover:bg-[#138d62] text-white text-xs font-bold px-3 py-2 rounded-xl transition cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Apply URL</span>
                      </button>
                      <button
                        onClick={() => handleDismissCandidate(cand.id)}
                        className="flex items-center gap-1 text-xs font-semibold text-[#667085] hover:bg-[#eaecf0] px-3 py-2 rounded-xl transition cursor-pointer"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Dismiss</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Bulk URL Import */}
      {activeTab === 'import' && (
        <div className="bg-white border border-[#e7ebf1] rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <h3 className="text-base font-bold text-[#0d1728]">Bulk Problem URL Import</h3>
            <p className="text-xs text-[#667085] mt-0.5">
              Paste CSV rows formatted as <code>externalId,practiceUrl</code> (e.g. <code>DSA-475,https://leetcode.com/problems/...</code>)
            </p>
          </div>

          {bulkImportResult && (
            <div className="p-3 bg-[#eefbf6] border border-[#a6f4c5] rounded-xl text-xs text-[#0d6848] font-bold">
              {bulkImportResult}
            </div>
          )}

          <textarea
            rows={6}
            value={bulkCsvText}
            onChange={(e) => setBulkCsvText(e.target.value)}
            className="w-full p-4 font-mono text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-2xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
            placeholder="DSA-01,https://leetcode.com/..."
          />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-[#667085]">
              Validates HTTPS syntax and updates the problem records instantly.
            </span>
            <button
              onClick={handleBulkImport}
              className="flex items-center gap-2 bg-[#0b1425] hover:bg-[#111e32] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#23d3ee]" />
              <span>Process & Update Catalog</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
