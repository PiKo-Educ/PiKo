'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { STORAGE_KEYS, writeStore, type DemoUser } from '@/lib/demo-store';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('Senior High School');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!name.trim() || !email.includes('@') || password.length < 4 || !accepted) { setError('Complete the form and accept the demo terms to continue.'); return; } const user: DemoUser = { name: name.trim(), email, level }; writeStore(STORAGE_KEYS.user, user); router.push('/app/dashboard'); };
  return <main className="auth-page"><section className="auth-visual"><div className="auth-circle" /><Image src="/mascot/piko.svg" alt="PiKo penguin mascot" width={300} height={300} /><div className="auth-copy"><h2>Make this space yours.</h2><p>Keep your learning tools, ideas, and student activities together in one friendly place.</p></div></section><section className="auth-form-wrap"><form className="auth-form" onSubmit={submit}><Link href="/" className="auth-brand"><Image src="/mascot/piko.svg" alt="PiKo" width={43} height={43} /><strong>PiKo</strong></Link><h1>Create your account</h1><p>Start building your student space.</p>{error && <div className="pill red" style={{ marginBottom: 14 }}>{error}</div>}<div className="form-row"><label className="field-label">Full name or display name</label><input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required /></div><div className="form-row"><label className="field-label">Email address</label><input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></div><div className="form-row"><label className="field-label">Education level</label><select className="field" value={level} onChange={(e) => setLevel(e.target.value)}><option>Junior High School</option><option>Senior High School</option><option>College</option></select></div><div className="form-row"><label className="field-label">Create a demo password</label><input className="field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 4 characters" required /></div><label className="small muted" style={{ display: 'flex', alignItems: 'flex-start', gap: 8, lineHeight: 1.5, marginBottom: 15 }}><input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} /> I understand this is a local demo account and not a real secure account.</label><button className="btn btn-primary" style={{ width: '100%' }}>Create demo account</button><p className="small muted" style={{ textAlign: 'center', margin: '18px 0' }}>Already registered? <Link href="/login" style={{ color: '#2589c2', fontWeight: 700 }}>Log in</Link></p><div className="auth-foot">Production registration must use Firebase Authentication, age-appropriate safeguards, and the appropriate privacy and consent process for minors.</div></form></section></main>;
}
