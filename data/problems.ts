import rawProblems from './problems.json';

export interface DSAProblem {
  id: number;
  externalId: string;
  title: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  practiceUrl: string | null;
  articleUrl: string | null;
  status: 'solved' | 'in-progress' | 'not-started';
  notes?: string;
}

export const INITIAL_PROBLEMS: DSAProblem[] = rawProblems as DSAProblem[];

export const PROBLEM_TOPICS = Array.from(
  new Set(INITIAL_PROBLEMS.map((p) => p.topic))
).sort();
