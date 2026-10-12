'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Clock,
  Circle,
  Save,
  FileText
} from 'lucide-react';
import { DSAProblem } from '@/data/problems';

interface ProblemDetailModalProps {
  problem: DSAProblem | null;
  onClose: () => void;
  onUpdateProblem: (id: number, status: 'solved' | 'in-progress' | 'not-started', notes: string) => void;
}

export function ProblemDetailModal({
  problem,
  onClose,
  onUpdateProblem
}: ProblemDetailModalProps) {
  if (!problem) return null;

  return (
    <ProblemDetailContent
      key={problem.id}
      problem={problem}
      onClose={onClose}
      onUpdateProblem={onUpdateProblem}
    />
  );
}

function ProblemDetailContent({
  problem,
  onClose,
  onUpdateProblem
}: {
  problem: DSAProblem;
  onClose: () => void;
  onUpdateProblem: (id: number, status: 'solved' | 'in-progress' | 'not-started', notes: string) => void;
}) {
  const [status, setStatus] = useState<'solved' | 'in-progress' | 'not-started'>(problem.status);
  const [notes, setNotes] = useState(problem.notes || '');
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleSave = () => {
    onUpdateProblem(problem.id, status, notes);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const diffBadge =
    problem.difficulty === 'Easy'
      ? 'bg-[#eefbf6] text-[#17a673]'
      : problem.difficulty === 'Hard'
      ? 'bg-[#ffe4e6] text-[#e11d48]'
      : 'bg-[#fff8e8] text-[#d89418]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-[#e7ebf1] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#e7ebf1] flex items-start justify-between bg-[#f9fafc]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-[#087e99] bg-[#eafcff] px-2 py-0.5 rounded-md">
                {problem.externalId}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${diffBadge}`}>
                {problem.difficulty}
              </span>
              <span className="text-xs text-[#667085] font-medium">
                {problem.topic}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#0d1728] leading-tight">
              {problem.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#98a2b3] hover:text-[#0d1728] p-1.5 rounded-xl hover:bg-[#eaecf0] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Action Links */}
          <div className="bg-[#f6f8fb] rounded-2xl p-4 border border-[#e7ebf1] space-y-3">
            <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
              Official Practice & Resource Links
            </span>

            <div className="flex flex-wrap gap-2.5">
              {problem.practiceUrl ? (
                <a
                  href={problem.practiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#23d3ee] hover:bg-[#1bc1dc] text-[#062435] font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Solve on Platform (LeetCode / GFG)</span>
                </a>
              ) : (
                <div className="flex items-center gap-2 bg-[#ffe4e6] text-[#be123c] font-semibold text-xs px-3.5 py-2 rounded-xl">
                  <span>Practice link unavailable in initial CSV</span>
                </div>
              )}

              {problem.articleUrl && (
                <a
                  href={problem.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-[#f2f4f7] border border-[#e7ebf1] text-[#0d1728] font-semibold text-xs px-4 py-2.5 rounded-xl transition"
                >
                  <BookOpen className="w-4 h-4 text-[#087e99]" />
                  <span>TakeUForward Editorial</span>
                </a>
              )}
            </div>
          </div>

          {/* Status selector */}
          <div>
            <label className="text-xs font-bold text-[#0d1728] block mb-2">
              Learning Progress Status
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setStatus('not-started')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  status === 'not-started'
                    ? 'border-[#0b1425] bg-[#0b1425] text-white'
                    : 'border-[#e7ebf1] bg-white text-[#475467] hover:bg-[#f9fafc]'
                }`}
              >
                <Circle className="w-3.5 h-3.5" />
                <span>Not Started</span>
              </button>

              <button
                type="button"
                onClick={() => setStatus('in-progress')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  status === 'in-progress'
                    ? 'border-[#d89418] bg-[#fff8e8] text-[#8a5d09] font-bold'
                    : 'border-[#e7ebf1] bg-white text-[#475467] hover:bg-[#f9fafc]'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-[#d89418]" />
                <span>In Progress</span>
              </button>

              <button
                type="button"
                onClick={() => setStatus('solved')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                  status === 'solved'
                    ? 'border-[#17a673] bg-[#eefbf6] text-[#0d6848] font-bold'
                    : 'border-[#e7ebf1] bg-white text-[#475467] hover:bg-[#f9fafc]'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#17a673]" />
                <span>Solved</span>
              </button>
            </div>
          </div>

          {/* Private Notes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#0d1728] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#087e99]" />
                <span>Private Learner Notes</span>
              </label>
              <span className="text-[11px] text-[#98a2b3]">
                Saved locally to your private session
              </span>
            </div>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Record your algorithmic approach, key invariants, edge cases, time/space complexity (e.g. O(N log N)), or hints..."
              className="w-full p-3.5 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-2xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728] resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#e7ebf1] bg-[#f9fafc] flex items-center justify-between">
          <div className="text-xs text-[#17a673] font-bold">
            {savedFeedback && '✓ Progress & notes saved!'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#667085] hover:bg-[#eaecf0] transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#0b1425] hover:bg-[#111e32] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 text-[#23d3ee]" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
