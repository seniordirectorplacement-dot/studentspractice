'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar, TabType } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { OverviewSection } from '@/components/OverviewSection';
import { ProblemCatalog } from '@/components/ProblemCatalog';
import { AiCourseModule } from '@/components/AiCourseModule';
import { CoreCseModule } from '@/components/CoreCseModule';
import { CertificationsModule } from '@/components/CertificationsModule';
import { ProfileModule } from '@/components/ProfileModule';
import { AdminModule } from '@/components/AdminModule';
import { ProblemDetailModal } from '@/components/ProblemDetailModal';
import { FocusModeModal } from '@/components/FocusModeModal';
import { INITIAL_PROBLEMS, DSAProblem } from '@/data/problems';
import { INITIAL_LEARNER, LearnerProfile } from '@/data/initialLearner';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [problems, setProblems] = useState<DSAProblem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('klu_problems_catalog');
        if (stored) return JSON.parse(stored);
      } catch {}
    }
    return INITIAL_PROBLEMS;
  });

  const [learnerProfile, setLearnerProfile] = useState<LearnerProfile>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('klu_learner_profile');
        if (stored) return JSON.parse(stored);
      } catch {}
    }
    return INITIAL_LEARNER;
  });

  const [completedWeeks, setCompletedWeeks] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('klu_completed_ai_weeks');
        if (stored) return JSON.parse(stored);
      } catch {}
    }
    return [1, 2, 3, 4, 5];
  });

  const [selectedProblem, setSelectedProblem] = useState<DSAProblem | null>(null);
  const [isFocusModeOpen, setIsFocusModeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Toggle problem status
  const handleToggleStatus = (
    id: number,
    newStatus: 'solved' | 'in-progress' | 'not-started'
  ) => {
    setProblems((prev) => {
      const updated = prev.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      );
      try {
        localStorage.setItem('klu_problems_catalog', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    const label =
      newStatus === 'solved'
        ? 'Problem marked as solved! Keep the streak alive.'
        : newStatus === 'in-progress'
        ? 'Problem moved to in-progress.'
        : 'Problem reset to not started.';
    showToast(label);
  };

  // Update Problem Details and Notes
  const handleUpdateProblem = (
    id: number,
    status: 'solved' | 'in-progress' | 'not-started',
    notes: string
  ) => {
    setProblems((prev) => {
      const updated = prev.map((p) =>
        p.id === id ? { ...p, status, notes } : p
      );
      try {
        localStorage.setItem('klu_problems_catalog', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    if (selectedProblem && selectedProblem.id === id) {
      setSelectedProblem({ ...selectedProblem, status, notes });
    }
    showToast('Problem notes & progress updated!');
  };

  // Toggle AI course week completion
  const handleToggleWeekCompletion = (weekNumber: number) => {
    setCompletedWeeks((prev) => {
      const isCompleted = prev.includes(weekNumber);
      const updated = isCompleted
        ? prev.filter((w) => w !== weekNumber)
        : [...prev, weekNumber];
      try {
        localStorage.setItem('klu_completed_ai_weeks', JSON.stringify(updated));
      } catch {}
      showToast(
        isCompleted
          ? `Week ${weekNumber} unmarked.`
          : `Week ${weekNumber} marked completed!`
      );
      return updated;
    });
  };

  // Update Learner Profile
  const handleUpdateProfile = (updated: LearnerProfile) => {
    setLearnerProfile(updated);
    try {
      localStorage.setItem('klu_learner_profile', JSON.stringify(updated));
    } catch {}
    showToast('Learner profile saved successfully!');
  };

  // Admin Apply URL
  const handleApplyUrlToProblem = (externalId: string, url: string) => {
    setProblems((prev) => {
      const updated = prev.map((p) =>
        p.externalId === externalId ? { ...p, practiceUrl: url } : p
      );
      try {
        localStorage.setItem('klu_problems_catalog', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast(`Updated URL for ${externalId}`);
  };

  // Mark solved from Focus Mode
  const handleMarkSolved = (id: number) => {
    handleToggleStatus(id, 'solved');
  };

  const solvedCount = problems.filter((p) => p.status === 'solved').length;
  const totalCount = problems.length;

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-[#0d1728] flex flex-col md:flex-row font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden md:block shrink-0">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          solvedCount={solvedCount}
          totalProblems={totalCount}
          streakDays={learnerProfile.streakDays}
          learnerName={learnerProfile.name}
        />
      </div>

      {/* Mobile Top Header */}
      <div className="md:hidden bg-white border-b border-[#e7ebf1] p-4 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 className="text-xs font-bold text-[#0d1728]">
            Product Companies Hub
          </h1>
          <p className="text-[10px] text-[#087e99] font-extrabold uppercase tracking-wider">
            Learn · Practice · Master
          </p>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl text-[#475467] hover:bg-[#f2f4f7] transition"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs top-[57px]">
          <div className="bg-white border-b border-[#e7ebf1] p-4 shadow-xl">
            <Sidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false);
              }}
              solvedCount={solvedCount}
              totalProblems={totalCount}
              streakDays={learnerProfile.streakDays}
              learnerName={learnerProfile.name}
            />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          onOpenFocusMode={() => setIsFocusModeOpen(true)}
          solvedCount={solvedCount}
          totalProblems={totalCount}
          streakDays={learnerProfile.streakDays}
        />

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex-1">
          {activeTab === 'overview' && (
            <OverviewSection
              problems={problems}
              streakDays={learnerProfile.streakDays}
              weeklyGoal={learnerProfile.weeklyGoal}
              weeklySolved={Math.min(solvedCount, learnerProfile.weeklyGoal)}
              setActiveTab={setActiveTab}
              onOpenProblem={(p) => setSelectedProblem(p)}
            />
          )}

          {activeTab === 'catalog' && (
            <ProblemCatalog
              problems={problems}
              onToggleStatus={handleToggleStatus}
              onOpenProblem={(p) => setSelectedProblem(p)}
            />
          )}

          {activeTab === 'ai-course' && (
            <AiCourseModule
              completedWeeks={completedWeeks}
              onToggleWeekCompletion={handleToggleWeekCompletion}
            />
          )}

          {activeTab === 'core-cse' && <CoreCseModule />}

          {activeTab === 'certifications' && <CertificationsModule />}

          {activeTab === 'profile' && (
            <ProfileModule
              profile={learnerProfile}
              onUpdateProfile={handleUpdateProfile}
            />
          )}

          {activeTab === 'admin' && (
            <AdminModule
              problems={problems}
              onApplyUrlToProblem={handleApplyUrlToProblem}
            />
          )}
        </main>
      </div>

      {/* Problem Detail Modal */}
      <ProblemDetailModal
        problem={selectedProblem}
        onClose={() => setSelectedProblem(null)}
        onUpdateProblem={handleUpdateProblem}
      />

      {/* Focus Mode Modal */}
      <FocusModeModal
        isOpen={isFocusModeOpen}
        onClose={() => setIsFocusModeOpen(false)}
        problems={problems}
        onMarkSolved={handleMarkSolved}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0b1425] text-white px-5 py-3 rounded-2xl shadow-xl text-xs font-semibold flex items-center gap-2 border border-white/10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#23d3ee]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
