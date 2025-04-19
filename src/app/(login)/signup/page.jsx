"use client";
import { useActionState } from 'react';
import { signup } from '@/action/FormAction';
import authIcon from '../../../../public/images/auth-icon.jpg';
import Image from 'next/image';
import Link from 'next/link';

function SignUp() {
  const [formState, formAction] = useActionState(signup, {});
  return (
    <div className='flex justify-center flex-wrap my-10 py-10'>
      <div className='bg-neutral-300 w-2/5 py-5 shadow rounded'>
        <div className='flex justify-center'>
          <Image src={authIcon} alt='Lock' width={100} height={100} className='rounded-full' />
        </div>
        <div className="px-20 py-5">
          <form action={formAction}>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input type="email" id="username" name="email" required className='border border-white focus:border-neutral-500 rounded py-1 outline-0 px-3 bg-white' />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required className='border border-white focus:border-neutral-500 rounded py-1 outline-0 px-3 bg-white' />
              </div>
              <div className='h-1'>
                {formState && (<ul>
                  {Object.keys(formState).map((error) => {
                    return <span key={error} className='text-red-500 text-xs'>{formState[error]}</span>
                  })}
                </ul>)}
              </div>
            </div>
            <div className='flex justify-center w-full'>
              <button type="submit" className='bg-blue-500 rounded mt-5 cursor-pointer w-full py-1'>Sign Up</button>
            </div>
            <div>
              <p className='text-sm my-2'>
                Already have an account? <Link href="/login" className='text-blue-500 font-semibold'>Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
