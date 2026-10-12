export interface LearnerProfile {
  name: string;
  gender: string;
  course: 'B.Tech' | 'MCA' | 'M.Tech';
  specialization: string;
  graduationYear: number;
  email: string;
  mobileNumber: string;
  sscPercentage: number;
  intermediatePercentage: number;
  cgpa: number;
  weeklyGoal: number;
  streakDays: number;
}

export const INITIAL_LEARNER: LearnerProfile = {
  name: "Senior Director",
  gender: "Male",
  course: "B.Tech",
  specialization: "Computer Science and Engineering",
  graduationYear: 2026,
  email: "senior.director@klu.edu.in",
  mobileNumber: "+91 98765 43210",
  sscPercentage: 94.5,
  intermediatePercentage: 93.8,
  cgpa: 8.92,
  weeklyGoal: 5,
  streakDays: 4
};

export interface AdminLearnerRecord {
  id: string;
  name: string;
  email: string;
  course: string;
  gradYear: number;
  solved: number;
  inProgress: number;
  notStarted: number;
  completionRate: number;
  currentStreak: number;
  weeklyTarget: number;
  lastActive: string;
}

export const SAMPLE_ADMIN_LEARNERS: AdminLearnerRecord[] = [
  {
    id: "LRN-1001",
    name: "Senior Director",
    email: "senior.director@klu.edu.in",
    course: "B.Tech CSE",
    gradYear: 2026,
    solved: 184,
    inProgress: 14,
    notStarted: 164,
    completionRate: 51,
    currentStreak: 12,
    weeklyTarget: 5,
    lastActive: "Just now"
  },
  {
    id: "LRN-1002",
    name: "Ananya Sharma",
    email: "ananya.sharma@klu.edu.in",
    course: "B.Tech CSE (AI & ML)",
    gradYear: 2026,
    solved: 242,
    inProgress: 8,
    notStarted: 112,
    completionRate: 67,
    currentStreak: 19,
    weeklyTarget: 7,
    lastActive: "2 hours ago"
  },
  {
    id: "LRN-1003",
    name: "Rahul Verma",
    email: "rahul.verma@klu.edu.in",
    course: "B.Tech CSE",
    gradYear: 2026,
    solved: 135,
    inProgress: 19,
    notStarted: 208,
    completionRate: 37,
    currentStreak: 6,
    weeklyTarget: 5,
    lastActive: "5 hours ago"
  },
  {
    id: "LRN-1004",
    name: "Sneha Reddy",
    email: "sneha.reddy@klu.edu.in",
    course: "MCA",
    gradYear: 2026,
    solved: 310,
    inProgress: 5,
    notStarted: 47,
    completionRate: 86,
    currentStreak: 34,
    weeklyTarget: 10,
    lastActive: "1 day ago"
  },
  {
    id: "LRN-1005",
    name: "Karthik Raja",
    email: "karthik.raja@klu.edu.in",
    course: "B.Tech CSE",
    gradYear: 2027,
    solved: 98,
    inProgress: 22,
    notStarted: 242,
    completionRate: 27,
    currentStreak: 3,
    weeklyTarget: 4,
    lastActive: "Yesterday"
  },
  {
    id: "LRN-1006",
    name: "Pooja Patel",
    email: "pooja.patel@klu.edu.in",
    course: "M.Tech CSE",
    gradYear: 2026,
    solved: 275,
    inProgress: 9,
    notStarted: 78,
    completionRate: 76,
    currentStreak: 21,
    weeklyTarget: 8,
    lastActive: "3 hours ago"
  }
];

export interface UnresolvedLinkCandidate {
  id: string;
  externalId: string;
  title: string;
  topic: string;
  suggestedUrl: string;
  source: 'LeetCode' | 'GeeksforGeeks' | 'TakeUForward';
  isDirect: boolean;
  status: 'pending' | 'applied' | 'dismissed';
}

export const INITIAL_UNRESOLVED_CANDIDATES: UnresolvedLinkCandidate[] = [
  {
    id: "cand-1",
    externalId: "DSA-01",
    title: "Input Output Basics & Fast I/O",
    topic: "Arrays & Algorithms",
    suggestedUrl: "https://www.geeksforgeeks.org/fast-io-in-c-with-examples/",
    source: "GeeksforGeeks",
    isDirect: true,
    status: "pending"
  },
  {
    id: "cand-2",
    externalId: "DSA-06",
    title: "For Loops & Nested Pattern Iteration",
    topic: "Arrays & Algorithms",
    suggestedUrl: "https://practice.geeksforgeeks.org/problems/for-loop-primecheck-java/1",
    source: "GeeksforGeeks",
    isDirect: true,
    status: "pending"
  },
  {
    id: "cand-3",
    externalId: "DSA-18",
    title: "Count Digits with Logarithmic Space",
    topic: "Math & Algorithms",
    suggestedUrl: "https://www.geeksforgeeks.org/count-digits-in-given-number-n/",
    source: "GeeksforGeeks",
    isDirect: true,
    status: "pending"
  },
  {
    id: "cand-4",
    externalId: "DSA-34",
    title: "GCD or HCF Euclidean Algorithm",
    topic: "Math & Algorithms",
    suggestedUrl: "https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/",
    source: "GeeksforGeeks",
    isDirect: true,
    status: "pending"
  },
  {
    id: "cand-5",
    externalId: "DSA-42",
    title: "Armstrong Numbers Identification",
    topic: "Math & Algorithms",
    suggestedUrl: "https://leetcode.com/problems/armstrong-number/",
    source: "LeetCode",
    isDirect: true,
    status: "pending"
  }
];
