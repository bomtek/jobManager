import axios from "axios";

const reducer = (state,action) => {


if(action.type === "SUBMIT_JOB_MONGO"){

   const job= {
            title: state.title,
            organisation: state.organisation,
            website: state.website,
            status: state.status,
            catagory: state.catagory,
            dueDate: state.dueDate,
            discription: state.discription,
            experience: 0,
            skills: [],
          };

         
          

    console.log(job)
  
    

   

    axios
          .post("http://localhost:3001/api/v1/jobs", {job})
          .then(() => {
            console.log("Data added ");
          })
          .catch((error) => {
            console.log(error);
          })
}

if(action.type === "CREATE_JOB"){
   
    const name = action.payload.target.name;
    const value = action.payload.target.value;
    console.log(name);
    console.log(value)
  

    return (
        {...state,
        [name]: value}
   )

}

}


export {reducer}