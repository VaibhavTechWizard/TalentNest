import Job from "../models/job.model.js"
import mongoose from "mongoose";
//admin post the job
export const postJob = async(req,res)=>{
    try{
        const{title,description,requirements,salary,location,jobType,experience,position,companyId} = req.body;
        const userId = req.id;

        if(!title || !description || !salary || !location || !jobType || !experience || !position || !companyId){
            return res.status(400).json({
                message:"Something is missing",
                success:false
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experienceLevel:experience,
            position,
            company:companyId,
            created_by:userId
        })
        return res.status(201).json({
            message:"New job created succesfully.",
            job,
            success:true
        })
    }catch(error){
        console.log(error);
        
    }
}

export const getAllJobs = async(req,res)=>{
    try{
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title:{$regex:keyword , $options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]
        };
        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1})
        if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        };
        return res.status(200).json({
            success:true,
            jobs
        })
    }
    catch(error){
        console.log(error);
        
    }
}
//student
export const getJobById = async(req,res)=>{
    try{
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
         if(!job){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        };
        return res.status(200).json({ // if job found
            job,
            success:true
        })
    }
    catch(error){
        console.log(error);
        
    }
}





//how much job has been created ny admin

export const getAdminJobs = async(req,res)=>{
    try{
     //   const adminId = req.id;
     //   const jobs = await Job.find({created_by:adminId});

         const adminId = new mongoose.Types.ObjectId(req.id); // FIXED

     const jobs = await Job.find({created_by:adminId})
         if(!jobs){
            return res.status(404).json({
                message:"Jobs not found",
                success:false
            })
        };
        console.log("Admin ID (req.id):", req.id);
  
         return res.status(200).json({ // if job found
            jobs,
            success:true
         })
    }
    catch(error){
        console.log(error);
        
    }
    console.log("Admin ID (req.id):", req.id);

}



// export const getAllJobs = async(req,res)=>{
//     try{

//     }
//     catch(error){
//         console.log(error);
        
//     }
// }