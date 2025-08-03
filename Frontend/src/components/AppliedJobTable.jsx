// import {Table } from 'lucide-react'
import { Badge } from './ui/Badge'
import React from 'react'
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className={"text-right"}>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                [1,2].map((item,index)=>(
                    <TableRow key={index}>
                        <TableCell>17-09-2024</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className={"text-right"}><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable