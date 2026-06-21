'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { apiRequest } from '@/utils/api';
import { ShoppingBag, Tag, Award, RefreshCw, Clock, ArrowUpRight, AlertCircle } from 'lucide-react';

interface Stats {
  totalProducts: number;
  totalCategories: number;
  totalBrands: number;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiRequest('/dashboard/stats');
      setStats(data);
    } catch (err: any) {
      console.error('Error fetching dashboard stats:', err);
      setError(err.message || 'Failed to load dashboard metrics from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const activities = [
    {
      id: 1,
      title: 'Database Sync Success',
      desc: 'SQLite store synced successfully with local Prisma engine.',
      time: '5 mins ago',
      type: 'success',
    },
    {
      id: 2,
      title: 'Admin Session Authorized',
      desc: 'Secure JWT sign-in registered from admin console.',
      time: '12 mins ago',
      type: 'info',
    },
    {
      id: 3,
      title: 'New Product Batch Configured',
      desc: 'Default seed database initialized with 100 premium sports products.',
      time: '1 hour ago',
      type: 'success',
    },
    {
      id: 4,
      title: 'Inventory Threshold Checked',
      desc: 'All 8 categories confirmed in active stock status.',
      time: '2 hours ago',
      type: 'warning',
    },
  ];

  const statCards = [
    {
      name: 'Total Products',
      value: stats?.totalProducts ?? 0,
      icon: ShoppingBag,
      color: 'text-primary bg-primary/10 border-primary/20',
    },
    {
      name: 'Total Categories',
      value: stats?.totalCategories ?? 0,
      icon: Tag,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    {
      name: 'Total Brands',
      value: stats?.totalBrands ?? 0,
      icon: Award,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="glass rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Administrator Portal</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Welcome back, <span className="text-primary">{user?.name}</span>!
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            Here's the current overview of your Sports Adda MVP store. Everything is running smoothly.
          </p>
        </div>
      </div>

      {/* Metrics Row */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Store Statistics</h3>
          <button
            onClick={fetchStats}
            disabled={loading}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-50"
          >
            <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
            Refresh Data
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-red-200">Server Connection Issue</p>
              <p className="text-xs text-red-400 leading-relaxed">
                {error}. Please ensure the NestJS backend is running and you have run the seeder script.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.name}
                className="glass rounded-2xl p-6 border border-white/5 flex items-center justify-between hover:border-white/10 transition-all duration-300"
              >
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-400">{card.name}</p>
                  <p className="text-4xl font-black text-white tracking-tight">
                    {loading ? (
                      <span className="inline-block w-12 h-8 bg-white/5 animate-pulse rounded-md" />
                    ) : (
                      card.value
                    )}
                  </p>
                </div>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${card.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity Card */}
        <div className="glass rounded-2xl p-6 border border-white/5 lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white tracking-wide">Recent Activity Log</h3>
              <p className="text-xs text-slate-500 mt-0.5">Audit log of recent backend micro-tasks</p>
            </div>
            <span className="text-xs text-primary font-semibold flex items-center gap-1 cursor-pointer hover:underline">
              View All Logs
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>

          <div className="divide-y divide-white/5">
            {activities.map((act) => (
              <div key={act.id} className="py-4 first:pt-0 last:pb-0 flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm font-bold text-white leading-none">{act.title}</h4>
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{act.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick System Status Widget */}
        <div className="glass rounded-2xl p-6 border border-white/5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">System Environment</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-slate-400">Database Engine</span>
                <span className="font-semibold text-slate-200">SQLite (dev.db)</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-slate-400">ORM Framework</span>
                <span className="font-semibold text-slate-200">Prisma Client</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                <span className="text-slate-400">Server Backend</span>
                <span className="font-semibold text-slate-200">NestJS v11</span>
              </div>
              <div className="flex items-center justify-between text-xs py-2">
                <span className="text-slate-400">Auth Method</span>
                <span className="font-semibold text-slate-200">JWT Strategy</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed mt-6">
            <span className="font-semibold text-white block mb-1">Production Checklist</span>
            Make sure to modify the <code className="text-primary font-mono text-[10px]">JWT_SECRET</code> in the environment variables before shipping.
          </div>
        </div>
      </div>
    </div>
  );
}
