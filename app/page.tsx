'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/account-offer');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-pulse">Redirecting to Account Offer...</div>
    </div>
  );
}