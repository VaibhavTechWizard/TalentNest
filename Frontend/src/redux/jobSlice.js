import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null,
        searchJobByText:""
,    },
    reducers:{
        //actions
        setAllJobs:(state,action)=>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload
        },
        setSearchJobsByText:(state,action) => {
            state.searchJobByText = action.payload
        },
    }
})
export const {setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobsByText} =  jobSlice.actions;
export default jobSlice.reducer

// state.auth → holds authentication-related data

// state.job → holds job-related data like allJobs