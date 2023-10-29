import { useState } from "react";
import GeneralInfo from './Components/generalInfo.jsx'
import Education from "./Components/education.jsx";

import Work from "./Components/work.jsx"

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: '',
        lastName: '',
        profession: '',
        email: '',
        phoneNumber: '',
    });

    const [education, setEducation] = useState({
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: '',
    });

    const [work, setWork] = useState({
        companyName: '',
        jobTitle: '',
        jobDuration: '',
    });

    const [generalInfoEditing, setGeneralInfoEditing] = useState(false);
    const [educationEditing, setEducationEditing] = useState(false);
    const [workEditing, setWorkEditing] = useState(false);

    const handleGeneralInfoSubmit = generalInfo => {
      setGeneralInfo(generalInfo);
      setGeneralInfoEditing(false);
      console.log(generalInfo);
  }

    const handleEducationSubmit = education => {
        setEducation(education);
        setEducationEditing(false);
    };


    const handleWorkSubmit = work => {
      setWork(work);
      setWorkEditing(false);
  };


  const handleGeneralInfoEdit = () => {
    setGeneralInfoEditing(true);
}
    

    const handleEducationEdit = () => {
        setEducationEditing(true);
    }

    

    const handleWorkEdit = () => {
        setWorkEditing(true);
    }

    return ( 
        <div>
        <
        GeneralInfo generalInfo = { generalInfo }
        generalInfoEditing = { generalInfoEditing }
        onSubmit = { handleGeneralInfoSubmit }
        onEdit = { handleGeneralInfoEdit }
        />  
        <
        Education education = { education }
        educationEditing = { educationEditing }
        onSubmit = { handleEducationSubmit }
        onEdit = { handleEducationEdit }
        /> 
        <
        Work work = { work }
        workEditing = { workEditing }
        onSubmit = { handleWorkSubmit }
        onEdit = { handleWorkEdit }
        /> 
        </div>    
    );
}

export default App;