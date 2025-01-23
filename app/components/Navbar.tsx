'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Store } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Store className="h-6 w-6" />
              <span className="text-lg font-semibold">ServiceHub</span>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === '/services' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}