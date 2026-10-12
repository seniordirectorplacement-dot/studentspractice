'use client';

import React, { useState } from 'react';
import {
  User,
  GraduationCap,
  Save,
  CheckCircle2,
  Lock,
  Target
} from 'lucide-react';
import { LearnerProfile } from '@/data/initialLearner';

interface ProfileModuleProps {
  profile: LearnerProfile;
  onUpdateProfile: (updated: LearnerProfile) => void;
}

export function ProfileModule({
  profile,
  onUpdateProfile
}: ProfileModuleProps) {
  const [formData, setFormData] = useState<LearnerProfile>({ ...profile });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validations
    if (!formData.name.trim()) {
      setErrorMessage('Full name is required.');
      return;
    }
    if (!['B.Tech', 'MCA', 'M.Tech'].includes(formData.course)) {
      setErrorMessage('Course must be B.Tech, MCA, or M.Tech.');
      return;
    }
    if (formData.cgpa < 0 || formData.cgpa > 10) {
      setErrorMessage('CGPA must be between 0.0 and 10.0');
      return;
    }
    if (formData.graduationYear < 2020 || formData.graduationYear > 2035) {
      setErrorMessage('Please provide a valid graduation year.');
      return;
    }

    onUpdateProfile(formData);
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white border border-[#e7ebf1] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f2f4f7]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0b1425] text-white flex items-center justify-center text-2xl font-black shadow-md">
              {formData.name.charAt(0) || 'L'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-[#0d1728]">
                  {formData.name || 'Learner Profile'}
                </h2>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#eefbf6] text-[#17a673]">
                  Verified Account
                </span>
              </div>
              <p className="text-xs text-[#667085] mt-0.5">
                {formData.course} in {formData.specialization} · Class of {formData.graduationYear}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#f9fafc] px-3.5 py-2 rounded-xl border border-[#e7ebf1] text-xs text-[#475467]">
            <Lock className="w-3.5 h-3.5 text-[#087e99]" />
            <span>Private learner data</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {errorMessage && (
            <div className="p-3 bg-[#ffe4e6] border border-[#fecdd3] rounded-xl text-xs text-[#be123c] font-semibold">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-[#eefbf6] border border-[#a6f4c5] rounded-xl text-xs text-[#0d6848] font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Learner profile and academic records saved successfully!</span>
            </div>
          )}

          {/* Personal & Degree Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#98a2b3] mb-3 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#087e99]" />
              <span>Personal & Enrollment Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Degree / Program <span className="text-[#087e99]">*</span>
                </label>
                <select
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      course: e.target.value as 'B.Tech' | 'MCA' | 'M.Tech'
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728] font-bold"
                >
                  <option value="B.Tech">B.Tech</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Specialization / Branch
                </label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) =>
                    setFormData({ ...formData, specialization: e.target.value })
                  }
                  placeholder="e.g. Computer Science, AI & ML, Data Science"
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Graduation Year
                </label>
                <input
                  type="number"
                  value={formData.graduationYear}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      graduationYear: parseInt(e.target.value) || 2026
                    })
                  }
                  min={2020}
                  max={2035}
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Registered Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#344054] block mb-1 flex items-center justify-between">
                  <span>Weekly Goal Target</span>
                  <Target className="w-3.5 h-3.5 text-[#087e99]" />
                </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={formData.weeklyGoal}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weeklyGoal: parseInt(e.target.value) || 5
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-[#f9fafc] border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] focus:bg-white text-[#0d1728]"
                />
              </div>
            </div>
          </div>

          {/* Academic Performance Record */}
          <div className="pt-4 border-t border-[#f2f4f7]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#98a2b3] mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#17a673]" />
              <span>Academic Performance Records</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#f9fafc] p-4 rounded-2xl border border-[#e7ebf1]">
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  B.Tech / Program CGPA
                </label>
                <input
                  type="number"
                  step="0.01"
                  min={0}
                  max={10}
                  value={formData.cgpa}
                  onChange={(e) =>
                    setFormData({ ...formData, cgpa: parseFloat(e.target.value) || 0 })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728] font-bold"
                />
                <small className="text-[10px] text-[#98a2b3] mt-1 block">
                  Scale of 10.0
                </small>
              </div>

              <div className="bg-[#f9fafc] p-4 rounded-2xl border border-[#e7ebf1]">
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  Intermediate / 12th %
                </label>
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  max={100}
                  value={formData.intermediatePercentage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      intermediatePercentage: parseFloat(e.target.value) || 0
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
                />
                <small className="text-[10px] text-[#98a2b3] mt-1 block">
                  Percentage out of 100
                </small>
              </div>

              <div className="bg-[#f9fafc] p-4 rounded-2xl border border-[#e7ebf1]">
                <label className="text-xs font-bold text-[#344054] block mb-1">
                  SSC / 10th Percentage
                </label>
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  max={100}
                  value={formData.sscPercentage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sscPercentage: parseFloat(e.target.value) || 0
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#e7ebf1] rounded-xl focus:outline-none focus:border-[#23d3ee] text-[#0d1728]"
                />
                <small className="text-[10px] text-[#98a2b3] mt-1 block">
                  Percentage out of 100
                </small>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#f2f4f7] flex items-center justify-between">
            <span className="text-xs text-[#667085]">
              Changes are saved to your private authenticated browser session.
            </span>

            <button
              type="submit"
              className="flex items-center gap-2 bg-[#0b1425] hover:bg-[#111e32] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 text-[#23d3ee]" />
              <span>Save Academic Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
