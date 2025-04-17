"use client";
import { useActionState } from 'react';
import { signup } from '@/action/FormAction';

function SignUp() {
  const [formState, formAction] = useActionState(signup, {});
  console.log(formState);
  return (
    <div className='flex justify-center flex-wrap my-10 py-10'>
      <div className='w-full text-center my-10 text-4xl font-bold'>
        <h1>Sign Up</h1>
      </div>
      <div className="bg-neutral-300 shadow w-2/5 rounded px-20 py-10">
        <form action={formAction}>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <label htmlFor="email">Email</label>
              <input type="email" id="username" name="email" required className='border-2 border-neutral-500 focus:border-neutral-700 rounded py-1 outline-0 px-3 bg-white' />
            </div>
            <div className='flex flex-col gap-3'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required className='border-2 border-neutral-500 focus:border-neutral-700 rounded py-1 outline-0 px-3 bg-white' />
            </div>
            <div className='h-5'>
              {formState && (<ul>
                {Object.keys(formState).map((error) => {
                  return <span key={error} className='text-red-500'>{formState[error]}</span>
                })}
              </ul>)}
            </div>
            <div>
              <p>
                Already have an account? <a href="/login" className='text-blue-400 font-semibold'>Login</a>
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className='bg-blue-500 px-10 py-2 rounded mt-5 font-semibold cursor-pointer'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;
