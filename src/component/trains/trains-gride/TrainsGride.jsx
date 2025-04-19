import React from 'react'
import TrainsItem from '../trains-item/TrainsItem'

function TrainsGride({ trains }) {
    return (
        <>
            <div className='flex'>
                <ul className='flex flex-row flex-wrap justify-center gap-10 p-10'>
                    {trains.map((train) => (
                        <li key={train.id} className="flex w-1/3">
                            <TrainsItem title={train.title} id={train.id} image={train.image} description={train.description}/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TrainsGride
