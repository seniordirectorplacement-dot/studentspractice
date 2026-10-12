'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Timer
} from 'lucide-react';
import { DSAProblem } from '@/data/problems';

interface FocusModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  problems: DSAProblem[];
  onMarkSolved: (id: number) => void;
}

export function FocusModeModal({
  isOpen,
  onClose,
  problems,
  onMarkSolved
}: FocusModeModalProps) {
  if (!isOpen) return null;

  return (
    <FocusModeContent
      onClose={onClose}
      problems={problems}
      onMarkSolved={onMarkSolved}
    />
  );
}

function FocusModeContent({
  onClose,
  problems,
  onMarkSolved
}: {
  onClose: () => void;
  problems: DSAProblem[];
  onMarkSolved: (id: number) => void;
}) {
  const [secondsLeft, setSecondsLeft] = useState(45 * 60);
  const [isActive, setIsActive] = useState(false);
  const [activeProblem, setActiveProblem] = useState<DSAProblem | null>(() => {
    const candidates = problems.filter((p) => p.status !== 'solved');
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return problems[0] || null;
  });

  // Timer countdown
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const pickAnother = () => {
    const candidates = problems.filter((p) => p.status !== 'solved');
    if (candidates.length > 0) {
      const rand = candidates[Math.floor(Math.random() * candidates.length)];
      setActiveProblem(rand);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#0b1425] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#23d3ee]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top close */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8beaf5] uppercase tracking-wider">
            <Timer className="w-4 h-4 text-[#23d3ee]" />
            <span>Focus Mode Practice Session</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timer display */}
        <div className="text-center py-6 relative z-10">
          <div className="font-mono text-5xl sm:text-6xl font-black text-white tracking-wider">
            {timeDisplay}
          </div>
          <p className="text-xs text-[#94a3b8] mt-1.5">
            45-minute timed interview simulation mode
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className="flex items-center gap-2 bg-[#23d3ee] hover:bg-[#18c2dd] text-[#062435] font-extrabold text-xs px-5 py-2.5 rounded-xl transition shadow-sm cursor-pointer"
            >
              {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isActive ? 'Pause Timer' : 'Start Focus Clock'}</span>
            </button>
            <button
              onClick={() => {
                setIsActive(false);
                setSecondsLeft(45 * 60);
              }}
              className="p-2.5 rounded-xl border border-white/20 text-[#cbd5e1] hover:text-white hover:bg-white/10 transition cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Focus Problem Selected */}
        {activeProblem && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative z-10 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-[#23d3ee]">
                {activeProblem.externalId}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-[#cbd5e1]">
                {activeProblem.difficulty} · {activeProblem.topic}
              </span>
            </div>

            <h4 className="text-base font-bold text-white">
              {activeProblem.title}
            </h4>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                {activeProblem.practiceUrl && (
                  <a
                    href={activeProblem.practiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#23d3ee] text-[#062435] font-bold text-xs px-3.5 py-1.5 rounded-lg transition hover:bg-[#1bc1dc]"
                  >
                    <span>Solve on Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={pickAnother}
                  className="text-xs text-[#94a3b8] hover:text-[#23d3ee] font-semibold transition cursor-pointer"
                >
                  Pick another
                </button>
              </div>

              <button
                onClick={() => {
                  onMarkSolved(activeProblem.id);
                  onClose();
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-[#17a673] bg-[#17a673]/20 hover:bg-[#17a673]/30 px-3 py-1.5 rounded-lg transition cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mark as Solved</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
