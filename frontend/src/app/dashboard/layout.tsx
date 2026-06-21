'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Trophy, LayoutDashboard, User as UserIcon, LogOut, Menu, X, Bell } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07080a] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Trophy className="h-12 w-12 text-primary animate-bounce" />
          <span className="text-sm text-slate-400 font-medium tracking-wide">Loading Secure Portal...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const sidebarLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
  ];

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden glass border-b border-white/5 flex items-center justify-between px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          <span className="font-extrabold text-lg tracking-wider">
            SPORTS<span className="text-primary">ADDA</span>
          </span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-400 hover:text-white"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 glass border-r border-white/5 flex flex-col justify-between py-6 px-4 z-50 transform md:transform-none transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-8">
          {/* Logo */}
          <div className="hidden md:flex items-center gap-2 px-3">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="font-extrabold text-xl tracking-wider text-gradient">
              SPORTS<span className="text-primary">ADDA</span>
            </span>
          </div>

          {/* Links */}
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div className="space-y-4 pt-6 border-t border-white/5">
          <div className="px-3 py-2 flex items-center gap-3 rounded-xl bg-white/5">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center font-bold text-primary">
              {user.name.charAt(0)}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white truncate">{user.name}</p>
              <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header Section (Desktop) */}
        <header className="hidden md:flex items-center justify-between px-8 py-6 border-b border-white/5 bg-slate-950/20">
          <div>
            <h1 className="text-xl font-bold text-white">Portal Dashboard</h1>
            <p className="text-xs text-slate-500">Welcome to Sports Adda MVP Administration Panel</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary animate-pulse" />
            </button>
            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-slate-300">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-grow p-6 md:p-8 overflow-y-auto">{children}</main>
      </div>

      {/* Mobile Drawer Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </div>
  );
}
