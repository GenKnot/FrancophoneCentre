'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const index = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/courses');
  }, [router]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
      <div className="text-center">
        <h2>Redirecting...</h2>
        <p>Redirecting to courses page...</p>
      </div>
    </div>
  );
};

export default index;