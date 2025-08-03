import { Badge } from './ui/badge'
import React from 'react'
import { Avatar,AvatarImage } from '@radix-ui/react-avatar'
const LatestJobCards = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
          <Avatar>
                <AvatarImage src='https://www.shutterstock.com/image-vector/business-abstract-logo-symbol-concept-600w-1263069847.jpg' 
               alt="Company Logo"
    className="w-10 h-10 object-cover"/>
            </Avatar>
            <h1 className='font-medium text-large'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position}position</Badge>
            <Badge className=' text-[#F83002]' variant="ghost">{job?.jobType}</Badge>
            <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary}LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards