import { useState, useEffect } from 'react';
import React from 'react';
import './Register.css';

const Projectcard = ({project}) => {
    const [pref_0, setPref0] = useState(null);
    const [pref_1, setPref1] = useState(null);
    const [pref_2, setPref2] = useState(null);
    const [pref_3, setPref3] = useState(null);
    const [pref_4, setPref4] = useState(null);
    const [pref_5, setPref5] = useState(null);
    const updateData = (value, project) => {
        if (value == 0) { setPref0(project); }
        if (value == 1) { setPref1(project); }
        if (value == 2) { setPref2(project); }
        if (value == 3) { setPref3(project); }
        if (value == 4) { setPref4(project); }
        if (value == 5) { setPref5(project); }
    }
    const handleSubmit = (e) => {
        let data = {pref_1, pref_2, pref_3, pref_4, pref_5}
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/preference/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
        )
    }
    const [projects, setProjects] = useState([]);
     useEffect(()=>{
          fetch("http://127.0.0.1:8000/api/projects/")
             .then(res => res.json())
             .then((res)=>{
                 setProjects(res)
             })
      },[projects])
    
    return (
        <div className="home">
            <form onSubmit={handleSubmit}>
         {projects.map((proj,index)=>(
                <div className="project-card" key={index}>
                    
                <div className="project-head"><h1>{proj.title}</h1>    <p><i style={{fontSize: "2em", marginLeft: "20px"}}>{proj.company}</i></p>
                <label class="container">
                     <select
                     onChange={(e) => updateData(e.target.value, index)}>
                         <option selected value="0"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> 
                </label>
                </div>
                <div className="project-body">
                    <p>{proj.details}</p>
                </div>
                <div className="project-req">
                    <div className="elig">
                        <ul>
                            <li><b>Place of Posting :</b> {proj.place}</li>
                            <li><b>Stipend :</b> {proj.stipend}</li>
                            <li><b>No. of Students :</b> {proj.number}</li>
                            <li><b>Eligibility :</b> {proj.eligibility}</li>
                        </ul>
                    </div>
                    <div className="prereq">
                        <ul>
                            <li>{proj.prereq}<b>: Prerequisites</b> </li>
                            <li>{proj.deliverables}<b>: Deliverables</b> </li>
                            <li>{proj.duration}<b>: Duration</b> </li>
                        </ul>
                    </div>
                </div>
                </div>
                
            
        ))}
        <button className = "submitProj">Submit</button>
         </form> 
         </div>
    );
    
            
    
    }

export default Projectcard
