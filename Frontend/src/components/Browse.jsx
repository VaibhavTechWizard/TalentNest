import React from 'react'
import { NavLink } from 'react-router-dom'
import Job from './Job';
import Navbar from './shared/Navbar';

const randomJobs = [1,2,45];
export const Browse = () => {
  return (
    <div className='max-w-7wl mx-auto my-10'>
        <Navbar/>
        <div>
            <h1 className='font-bold text-xl my-10'>Search Result ({randomJobs.length})</h1>
            <div className='grid grid-cols-3 gap-4 mt-5'>
{
                randomJobs.map((item,index) => {
                    return(
                        <Job/>
                    )
                })
            }
            </div>
            
        </div>
    </div>
  )
}