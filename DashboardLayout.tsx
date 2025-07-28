import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white p-4 mb-8">
        <h1 className="text-2xl font-bold">AI Analytics Dashboard</h1>
      </nav>
      <main className="max-w-5xl mx-auto">{children}</main>
    </div>
  );
}