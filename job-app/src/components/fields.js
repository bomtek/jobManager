import React from 'react';
import styled from "styled-components";
import { useState, useEffect , useReducer} from "react";
import axios from "axios";

function Fields() {



  
    const [title, setTitle] = useState("");
    const [organisation, setOrganisation] = useState("");
    const [website, setWebsite] = useState("");
    const [status, setStatus] = useState("");
    const [catagory, setCatagory] = useState("");
    const [dueDate, setDueDate] = useState("");
     const [job, setJob] = useState({});
  
    const addJob = (e) => {
      e.preventDefault();
      console.log(e);
  
      let job = {
        title: title,
       organisation: organisation,
        website: website,
        dueDate: dueDate,
        status:status,
        catagory:catagory,
        discription: "",
        experience: 2,
        skills: [],
      };
  
      setJob(job)
  
      
  
      axios
      .post("http://localhost:3001/api/v1/jobs",{job})
      .then((res) => {
         console.log("Data added ")
      })
      .catch((error) => {
         console.log(error);
      });
    };
    return (
        <div>
            <FieldStyle>
      <h1> Add Jobs</h1>
      <form onSubmit={addJob}>
        <label htmlFor="title">
          <h3>Title</h3>
          <input
            type="text"
            id="title"
            placeholder="Job Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label htmlFor="org">
          <h3>Organisation</h3>
          <input
            type="text"
            id="org"
            placeholder="Organisation Name "
            name="org"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            required
          />
        </label>

        <label htmlFor="webpage">
          <h3>Webpage</h3>
          <input
            type="url"
            id="webpage"
            placeholder="Job Link"
            name="webpage"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
        </label>

        <label htmlFor="dueDate">
          <h3>Due Date</h3>
          <input type="date"
           id="dueDate"
            placeholder="DD/MM/YYYY"
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)}
            required />
        </label>

        <label htmlFor="status">
          <h3>Status</h3>
          <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Not Applied" selected>
              NOT APPLIED
            </option>
            <option value="Applied">APPLIED</option>
            <option value="On Progress">ON PROGRESS</option>
            <option value="Completed">COMPLETED</option>
          </select>
        </label>

        <label htmlFor="catagory">
          {" "}
          <h3>Catagory</h3>
          <select id="catagory" name="catagory" value={catagory} onChange={(e) => setCatagory(e.target.value)}>
            <option value="APS" selected>
              {" "}
              APS{" "}
            </option>
            <option value="FRONT END">FRONT END</option>
            <option value="BACK END">BACK END</option>
            <option value="FULL STACK">FULL STACK</option>
          </select>
        </label>

        <label htmlFor="experience">
          <h3>Experience(Optional)</h3>
          <input
            type="number"
            id="experience"
            name="experience"
            placeholder="Number"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </FieldStyle>
            
        </div>
    )
}

const FieldStyle = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 80%;
    height: 80vh;
    margin: 0px auto;
  }

  form label {
    width: 100%;

    display: flex;
  }

  form label h3 {
    width: 50%;

    margin-right: auto;
  }

  form label input,
  form label select {
    width: 50%;
  }
`;

export default Fields
