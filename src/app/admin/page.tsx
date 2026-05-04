'use client';

import Image from 'next/image';
import { useState } from 'react';
import ListingsTab from './_components/ListingsTab';

type Tab = 'listings' | 'users' | 'support';

const TABS: { id: Tab; label: string }[] = [
  { id: 'listings', label: 'Listing Moderation' },
  { id: 'users', label: 'User Management' },
  { id: 'support', label: 'Customer Support' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('listings');

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Image src="/logo.svg" alt="Relengo" width={96} height={26} priority />
          <span className="text-sm text-gray-300 font-medium">Workspace</span>
        </div>
      </header>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-3.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#1A1A1A] text-[#1A1A1A]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'listings' && <ListingsTab />}
        {activeTab === 'users' && <ComingSoon label="User Management" />}
        {activeTab === 'support' && <ComingSoon label="Customer Support" />}
      </main>
    </div>
  );
}

function ComingSoon({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-gray-300">
      <p className="text-4xl mb-4">🚧</p>
      <p className="text-base font-medium text-gray-400">{label}</p>
      <p className="text-sm mt-1">Coming soon</p>
    </div>
  );
}
