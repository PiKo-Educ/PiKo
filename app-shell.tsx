'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import {
  Bell, BookOpen, Bot, Calculator, CalendarDays, ChevronDown, FileText, GraduationCap,
  House, IdCard, Layers, Library, LogOut, Menu, Moon, NotebookPen, Search, Settings,
  ShieldCheck, Sun, Users, UserRoundSearch, X
} from 'lucide-react';
import { STORAGE_KEYS, readStore, type DemoUser } from '@/lib/demo-store';
import { ToastHost, notify } from '@/components/ui';

const studentNav = [
  { label: 'Dashboard', href: '/app/dashboard', icon: House },
  { label: 'Student Passport', href: '/app/passport', icon: IdCard },
  { label: 'Student Community', href: '/app/community', icon: Users },
  { label: 'Digital Library', href: '/app/library', icon: Library },
  { label: 'Student Planner', href: '/app/planner', icon: CalendarDays },
  { label: 'Personal Notes', href: '/app/notes', icon: NotebookPen },
  { label: 'Student Calculator', href: '/app/calculator', icon: Calculator },
  { label: 'Flashcards & Review', href: '/app/flashcards', icon: Layers },
  { label: 'Study Partner Finder', href: '/app/study-partners', icon: UserRoundSearch },
  { label: 'AI Tutor', href: '/app/ai-tutor', icon: Bot, soon: true },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<DemoUser>({ name: 'Student', email: 'student@piko.demo', level: 'Senior High School' });
  const [dark, setDark] = useState(false);
  const [search, setSearch] = useState('');
  const title = useMemo(() => studentNav.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.label || (pathname.includes('notifications') ? 'Notifications' : pathname.includes('settings') ? 'Settings' : pathname.includes('profile') ? 'My Profile' : 'PiKo'), [pathname]);

  useEffect(() => {
    const storedUser = readStore<DemoUser | null>(STORAGE_KEYS.user, null);
    if (storedUser) setUser(storedUser);
    const savedTheme = window.localStorage.getItem(STORAGE_KEYS.theme) === 'dark';
    setDark(savedTheme);
    document.body.classList.toggle('dark-mode', savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle('dark-mode', next);
    window.localStorage.setItem(STORAGE_KEYS.theme, next ? 'dark' : 'light');
    notify(`${next ? 'Dark' : 'Light'} mode enabled`);
  };

  const logout = () => {
    window.localStorage.removeItem(STORAGE_KEYS.user);
    router.push('/login');
  };

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = search.trim();
    if (!query) return;
    router.push(`/app/library?q=${encodeURIComponent(query)}`);
    setSearch('');
  };

  return (
    <div className="app-shell">
      <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <Link href="/app/dashboard" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-mark"><Image src="/mascot/piko.svg" alt="PiKo penguin" width={40} height={40} /></div>
          <div><div className="brand-name">PiKo</div><div className="brand-sub">Student Platform</div></div>
        </Link>
        <div className="nav-label">Main menu</div>
        <nav className="nav-list">
          {studentNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href !== '/app/dashboard' && pathname.startsWith(`${item.href}/`));
            return <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`nav-link ${active ? 'active' : ''}`}>
              <Icon size={17} /><span>{item.label}</span>{item.soon && <span className="nav-badge">SOON</span>}
            </Link>;
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-promo"><Image src="/mascot/piko.svg" alt="PiKo mascot" width={43} height={43} /><strong>Keep growing with PiKo</strong><p>Your learning space is ready whenever you are.</p><Link className="text-link" href="/app/passport">View your passport →</Link></div>
          <div className="sidebar-user">
            <div className="avatar">{user.name.slice(0, 1).toUpperCase()}</div>
            <div style={{ minWidth: 0, flex: 1 }}><div className="user-name">{user.name}</div><div className="user-role">{user.level}</div></div>
            <button className="icon-btn" aria-label="Sign out" onClick={logout}><LogOut size={15} /></button>
          </div>
        </div>
      </aside>

      <div className="main-wrap">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-btn mobile-menu" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={18} /></button>
            <div className="crumb">PiKo <span style={{ color: '#b2c2cc', padding: '0 6px' }}>/</span> <strong>{title}</strong></div>
          </div>
          <div className="top-actions">
            <form className="top-search" onSubmit={submitSearch}><Search size={15} /><input aria-label="Search PiKo" placeholder="Search PiKo resources..." value={search} onChange={(e) => setSearch(e.target.value)} /></form>
            <button className="icon-btn" aria-label="Toggle dark mode" onClick={toggleTheme}>{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
            <Link className="icon-btn" href="/app/notifications" aria-label="Notifications"><Bell size={16} /><span className="dot" /></Link>
            <Link className="avatar" href="/app/profile" aria-label="My profile" style={{ textDecoration: 'none' }}>{user.name.slice(0, 1).toUpperCase()}</Link>
          </div>
        </header>
        <main className="content">{children}<div className="footer-note">PiKo · Your Space to Learn, Create, and Connect.</div></main>
      </div>
      <ToastHost />
    </div>
  );
}
