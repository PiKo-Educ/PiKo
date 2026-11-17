'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Inbox } from 'lucide-react';

export function PageHeader({ eyebrow, title, subtitle, action }: { eyebrow?: string; title: string; subtitle?: string; action?: React.ReactNode }) {
  return <div className="page-heading"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h1 className="page-title">{title}</h1>{subtitle && <p className="page-subtitle">{subtitle}</p>}</div>{action && <div className="heading-actions">{action}</div>}</div>;
}

export function Card({ children, className = '', padding = true }: { children: React.ReactNode; className?: string; padding?: boolean }) {
  return <section className={`card ${padding ? 'card-pad' : ''} ${className}`}>{children}</section>;
}

export function EmptyState({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return <div className="empty-state">{icon || <Inbox size={30} />}<strong>{title}</strong><p>{description}</p></div>;
}

export function Pill({ children, tone = 'blue' }: { children: React.ReactNode; tone?: 'blue' | 'orange' | 'green' | 'red' }) {
  return <span className={`pill ${tone === 'blue' ? '' : tone}`}>{children}</span>;
}

export function ToastHost() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      setMessage(detail || 'Saved successfully');
      window.setTimeout(() => setMessage(''), 2600);
    };
    window.addEventListener('piko-toast', handler);
    return () => window.removeEventListener('piko-toast', handler);
  }, []);
  return message ? <div className="toast">{message}</div> : null;
}

export function notify(message: string) {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('piko-toast', { detail: message }));
}

export function FeatureLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="text-link" href={href}>{children} <ArrowUpRight size={12} style={{ verticalAlign: 'middle' }} /></a>;
}
