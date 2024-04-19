import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

        <div className='relative'>
            <img src={Maldives} alt="/" />
            <div className='bg-gray-900/30 top-0 left-0 w-full h-full absolute'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Maldives</p>
            </div>
        </div>

        <div className='relative'>
            <img src={BoraBora} alt="/" />
            <div className='bg-gray-900/30 top-0 left-0 w-full h-full absolute'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Bora Bora</p>
            </div>
        </div>

        <div className='relative'>
            <img src={BoraBora2} alt="/" />
            <div className='bg-gray-900/30 top-0 left-0 w-full h-full absolute'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Antigua</p>
            </div>
        </div>

        <div className='relative '>
            <img src={Maldives2} alt="/" className='w-full h-full object-cover'/>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Cozumel</p>
            
        </div>

        <div className='relative w-full'>
            <img src={Maldives3} alt="/" className='w-full h-full object-cover' />
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Jamaica</p>
        </div>


        <div className='relative'>
            <img src={KeyWest} alt="/" />
            <div className='bg-gray-900/30 top-0 left-0 w-full h-full absolute'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>Keywest</p>
            </div>
        </div>

    </div>
  )
}

export default Selects