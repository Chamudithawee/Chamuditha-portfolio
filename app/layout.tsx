import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center">
        <Navbar />
        <main className="flex-1 container mx-auto p-4 my-8 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
