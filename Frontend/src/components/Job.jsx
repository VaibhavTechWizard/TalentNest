import React from 'react'
import { Button } from './button'
import { Bookmark } from "lucide-react"; // ✅ Correct component name
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobId = "gdfvdfvvd";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt // to get when it was created
    // console.log("job.createdAt", job?.createdAt);//debug th see in console when was job created

    return Math.floor(timeDifference / (1000*24*60*60)) // 1 day
  }
  return (
    <div className='p-5 rounded-medium shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
        <p className='flex items-center gap-2 my-2'>
          {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
           </p>
        <Button className="rounded-full" size="icon"><Bookmark/></Button>
        </div>
        <div className='p-6' variant="outline" size="icon">
            <Button>
            <Avatar>
                <AvatarImage src='https://www.shutterstock.com/image-vector/business-abstract-logo-symbol-concept-600w-1263069847.jpg' 
               alt="Company Logo"
    className="w-10 h-10 object-cover"/>
            </Avatar>
        </Button>
        <div>
            <h1 className='font-medium text-lg'>{job?.company?.name} </h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        </div>
        
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold' variant="ghost">{job?.position} Position</Badge>
            <Badge className=' text-[#F83002]' variant="ghost">{job?.jobTypes}</Badge>
            <Badge className='text-[#7209b7] font-bold' variant="ghost">{job?.salary} LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'>
            <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
            <Button className='bg-[#7209b7]'>Save For Later</Button>
        </div>
    </div>
  )
}

export default Job