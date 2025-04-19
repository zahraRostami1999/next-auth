import React from 'react';
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { getTrainings } from '@/lib/training';
import TrainsGride from '@/component/trains/trains-gride/TrainsGride';

async function Training() {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect('/login');
  }
  const trains = getTrainings();

  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold text-blue-950 text-center'>
          Training List
        </h1>
      </header>
      <main>
        <div>
          <TrainsGride trains={trains} />
        </div>
      </main>
    </div>
  )
}

export default Training;
