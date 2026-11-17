import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, IdCard, Layers, NotebookPen, Users, UserRoundSearch, Calculator } from 'lucide-react';

const features = [
  { icon: IdCard, title: 'Student Passport', text: 'Keep your achievements, skills, and experiences in one personal portfolio.' },
  { icon: Users, title: 'Student Community', text: 'Ask questions, share ideas, and learn alongside other students.' },
  { icon: BookOpen, title: 'Digital Library', text: 'Explore reviewers, notes, and useful educational resources.' },
  { icon: CalendarDays, title: 'Student Planner', text: 'Organize classes, assignments, exams, and study reminders.' },
  { icon: NotebookPen, title: 'Personal Notes', text: 'Create and organize your own digital notebook.' },
  { icon: Calculator, title: 'Student Calculator', text: 'Use helpful calculation tools for everyday schoolwork.' },
  { icon: Layers, title: 'Flashcards & Review', text: 'Build flashcard decks and practice active recall.' },
  { icon: UserRoundSearch, title: 'Study Partner Finder', text: 'Discover study groups around subjects and shared interests.' },
];

export default function HomePage() {
  return <main className="landing">
    <nav className="landing-nav">
      <Link href="/" className="brand" style={{ padding: 0 }}><div className="brand-mark"><Image src="/mascot/piko.svg" alt="PiKo mascot" width={40} height={40} /></div><div><div className="brand-name">PiKo</div><div className="brand-sub">Student Platform</div></div></Link>
      <div className="landing-links"><a href="#features">Features</a><a href="#about">About</a><Link href="/login">Log in</Link><Link href="/register" className="btn btn-primary">Get started <ArrowRight size={13} /></Link></div>
    </nav>
    <section className="landing-hero">
      <div><div className="eyebrow">A FRIENDLY SPACE FOR STUDENTS</div><h1>Your space to <span>learn, create,</span> and connect.</h1><p>Bring your student life together with helpful tools for planning, learning, sharing ideas, and finding your study community — all in one place.</p><div className="toolbar"><Link className="btn btn-primary" href="/register">Get started for free <ArrowRight size={14} /></Link><Link className="btn btn-white" href="/login">I already have an account</Link></div><div className="tiny muted" style={{ marginTop: 18 }}>For Junior High, Senior High, and College students.</div></div>
      <div className="hero-art"><div className="hero-float float-one">✦ Your student space</div><Image src="/mascot/piko.svg" alt="PiKo friendly penguin mascot" width={260} height={260} /><div className="hero-float float-two">Learn at your own pace</div></div>
    </section>
    <section className="landing-section" id="features"><div className="eyebrow" style={{ textAlign: 'center' }}>WHAT YOU CAN DO</div><h2>Everything you need to stay on track.</h2><p>Thoughtful tools for your everyday student journey.</p><div className="grid grid-4" style={{ marginTop: 30 }}>{features.map((f) => { const Icon = f.icon; return <div className="feature-tile" key={f.title}><div className="quick-icon"><Icon size={18} /></div><h3>{f.title}</h3><p>{f.text}</p></div>; })}</div></section>
    <section className="landing-section" id="about" style={{ paddingTop: 0 }}><div className="ai-card" style={{ padding: 28, borderRadius: 25 }}><div className="grid grid-2" style={{ alignItems: 'center' }}><div><PillText /><h2 style={{ textAlign: 'left', margin: '12px 0' }}>A little companion for your student journey.</h2><p style={{ textAlign: 'left', lineHeight: 1.8 }}>PiKo is designed to make student life feel more organized, connected, and approachable. Start with the tools you need today and grow at your own pace.</p><Link href="/register" className="btn btn-primary" style={{ marginTop: 12 }}>Join PiKo <ArrowRight size={14} /></Link></div><div style={{ display: 'grid', placeItems: 'center' }}><Image src="/mascot/piko.svg" alt="PiKo penguin" width={205} height={205} /></div></div></div></section>
    <footer className="landing-footer">© {new Date().getFullYear()} PiKo · Your Space to Learn, Create, and Connect.</footer>
  </main>;
}
function PillText() { return <span className="pill">MEET PIKO</span>; }
