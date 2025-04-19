import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TrainsItem({ title, image, description }) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full">
                <div className="relative w-full h-60">
                    <Image src={image} alt={title} fill  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
                    <p className='text-neutral-800'>{description}</p>
                </div>
                <div className='text-neutral-900 p-4 mb-3'>
                    <Link href="/" className='bg-orange-400 px-3 py-2 rounded'>View Details</Link>
                </div>
            </div>
        </>
    )
}

export default TrainsItem
