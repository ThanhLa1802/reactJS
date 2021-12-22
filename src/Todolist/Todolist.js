import React from "react";
import { useState } from "react";

const Todolist = () => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState( storageJobs ?? [])
    
    const handleAdd = () => {
        setJobs(prev => {
        const newJobs = [...prev, job]
        const jsonJobs = JSON.stringify(newJobs) 
        localStorage.setItem('jobs', jsonJobs)
        
        return newJobs
        })
        setJob('')
    }
    console.log(job)
    return (
    <div style={{"padding":32 }}>
      <input
      value = {job}
      onChange={e => setJob(e.target.value)} 
      /> 
      <button style={{"marginLeft": 10}} onClick={handleAdd}>Add</button>
      <ul>
          {jobs.map((job, index) => 
          <li key = {index} >{job}</li>
          )}
      </ul>
    </div>
  )
}
export default Todolist;