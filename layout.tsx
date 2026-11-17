import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PiKo — Your Space to Learn, Create, and Connect',
  description: 'A friendly digital platform for students to learn, organize, and connect.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
