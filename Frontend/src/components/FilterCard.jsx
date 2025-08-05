import { RadioGroup } from '@radix-ui/react-radio-group'
import React from 'react'
import { RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label } from "@radix-ui/react-label";

const filterData = [
   {
    filterType:"Location",
    array:["Delhi NCR","Bangalore","Hyderabad","Pune","Mumbai"]
   },
   {
    filterType:"Industry",
    array:["Frontend Developer","Backend Developer","Fullstack Developer"]
   },
   {
    filterType:"Salary",
    array:["0-40k","42-1lakh","1 lakh to Slakh"]
   }
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data,index) => (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item,index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      {/* <Label>{item}</Label> */}
                      <Label htmlFor={`${data.filterType}-${item}`}>{item}</Label>

                    </div>
                  )
})
              }
            </div>
          ))
}
      </RadioGroup>
    </div>
  )
}

export default FilterCard