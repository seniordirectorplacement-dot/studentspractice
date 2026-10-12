'use client';

import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { HACKERRANK_CERTS, INDUSTRY_AI_CERTS } from '@/data/certifications';

export function CertificationsModule() {
  const [activeSubTab, setActiveSubTab] = useState<'hackerrank' | 'ai'>('hackerrank');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0b1425] via-[#12233b] to-[#1a3852] rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8beaf5] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#23d3ee]" />
              <span>Skill Verification & Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Certifications & Industry Badges
            </h2>
            <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-xl mt-2 leading-relaxed">
              Curated skill verification tests and industry certifications to back up your resume during technical screening and placement drives.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 self-start md:self-auto">
            <button
              onClick={() => setActiveSubTab('hackerrank')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeSubTab === 'hackerrank'
                  ? 'bg-[#23d3ee] text-[#062435] shadow-sm'
                  : 'text-white hover:text-[#8beaf5]'
              }`}
            >
              HackerRank Skills
            </button>
            <button
              onClick={() => setActiveSubTab('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeSubTab === 'ai'
                  ? 'bg-[#23d3ee] text-[#062435] shadow-sm'
                  : 'text-white hover:text-[#8beaf5]'
              }`}
            >
              Industry AI Credentials
            </button>
          </div>
        </div>
      </div>

      {/* Subtab 1: HackerRank Skills Verification */}
      {activeSubTab === 'hackerrank' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0d1728]">
                HackerRank Skills Verification Catalog
              </h3>
              <p className="text-xs text-[#667085]">
                Standardized timed assessments with verifiable digital certificates for LinkedIn and resumes.
              </p>
            </div>
            <a
              href="https://www.hackerrank.com/skills-verification"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#087e99] hover:underline flex items-center gap-1"
            >
              Visit official hub <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HACKERRANK_CERTS.map((cert) => {
              const levelColor =
                cert.level === 'Basic'
                  ? 'bg-[#eefbf6] text-[#17a673]'
                  : cert.level === 'Intermediate'
                  ? 'bg-[#fff8e8] text-[#d89418]'
                  : cert.level === 'Advanced'
                  ? 'bg-[#f3e8ff] text-[#7e22ce]'
                  : 'bg-[#e0e7ff] text-[#4338ca]';

              return (
                <div
                  key={cert.id}
                  className="bg-white border border-[#e7ebf1] rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#f2f4f7] text-[#475467]">
                        {cert.type}
                      </span>
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${levelColor}`}>
                        {cert.level}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0d1728] mt-1 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#667085] leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f2f4f7] space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-[#667085]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#98a2b3]" />
                        {cert.duration}
                      </span>
                      <span className="font-semibold text-[#0d1728]">
                        {cert.questions}
                      </span>
                    </div>

                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#eafcff] hover:bg-[#d4f6fc] text-[#087e99] font-bold text-xs py-2 rounded-xl transition"
                    >
                      <span>Take Verification Test</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Subtab 2: Industry AI Certifications */}
      {activeSubTab === 'ai' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-[#0d1728]">
                Industry AI & Machine Learning Certifications
              </h3>
              <p className="text-xs text-[#667085]">
                Globally recognized credentials from Google Cloud, Stanford, DeepLearning.AI, AWS, and Microsoft.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDUSTRY_AI_CERTS.map((cert) => {
              return (
                <div
                  key={cert.id}
                  className="bg-white border border-[#e7ebf1] rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:border-[#23d3ee]/60 transition"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#0b1425] text-[#23d3ee]">
                        {cert.provider}
                      </span>
                      <span className="text-xs font-semibold text-[#667085]">
                        {cert.trackType}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0d1728] mt-1 mb-2">
                      {cert.title}
                    </h4>

                    <div className="bg-[#f9fafc] p-3 rounded-xl border border-[#e7ebf1] my-3 text-xs text-[#475467] leading-relaxed">
                      <strong className="text-[#087e99] block mb-0.5 font-bold">
                        Hiring Manager Guidance:
                      </strong>
                      {cert.guidance}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#f2f4f7] flex items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-[#667085] block text-[11px]">Duration: {cert.duration}</span>
                      <strong className="text-[#0d1728] text-[11px] font-semibold">{cert.cost}</strong>
                    </div>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-[#0b1425] hover:bg-[#111e32] text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow-xs"
                    >
                      <span>Provider Page</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#23d3ee]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
