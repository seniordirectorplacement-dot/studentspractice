import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Product Companies Preparation Hub',
  description: 'A comprehensive placement preparation platform featuring curated DSA practice catalog, 40-week AI Skill Course, 9-domain Core CSE roadmap, certifications, learner analytics, and profile tracking.',
  openGraph: {
    title: 'Product Companies Preparation Hub',
    description: 'A comprehensive placement preparation platform featuring curated DSA practice catalog, 40-week AI Skill Course, 9-domain Core CSE roadmap, certifications, learner analytics, and profile tracking.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Companies Preparation Hub',
    description: 'A comprehensive placement preparation platform featuring curated DSA practice catalog, 40-week AI Skill Course, 9-domain Core CSE roadmap, certifications, learner analytics, and profile tracking.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
