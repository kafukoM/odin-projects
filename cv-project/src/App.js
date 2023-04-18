import React, { Component } from "react";
import GeneralInfo from './components/generalInfo.js'
import Education from './components/education.js'
import Work from './components/work.js'





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            generalInfo: {
                name: '',
                email: '',
                phoneNumber: '',
            }, 

            education: {
                schoolName: '',
                titleOfStudy: '',
                dateOfStudy: '',
            },

            work: {
                companyName: '',
                jobTitle: '',
                jobDuration: '',
            },  

            generalInfoEditing: false,
            educationEditing: false,
            workEditing: false,
        }


    }

    handleEducationSubmit = education => {
        this.setState({
          education: education,
          educationEditing: false
        });
      };
    
    handleEducationEdit = () => {
        this.setState({
          educationEditing: true
        })
    }

    handleGeneralInfoSubmit = generalInfo => {
        this.setState({
            generalInfo: generalInfo,
            generalInfoEditing: false
        })
    }

    handleGeneralInfoEdit = () => {
        this.setState({
            generalInfoEditing: true
        })
    }

    handleWorkSubmit = work => {
        this.setState({
          work: work,
          workEditing: false
        });
      };
    
    handleWorkEdit = () => {
        this.setState({
          workEditing: true
        })
    }

    render() {
        return ( 
        <div>
            <GeneralInfo 
            generalInfo = { this.state.generalInfo }
            generalInfoEditing = { this.state.generalInfoEditing }
            onSubmit = { this.handleGeneralInfoSubmit }
            onEdit={this.handleGeneralInfoEdit}
            /> 
            <Education
            education={this.state.education}
            educationEditing={this.state.educationEditing}
            onSubmit={this.handleEducationSubmit}
            onEdit={this.handleEducationEdit}
          />
          <Work
            work={this.state.work}
            workEditing={this.state.workEditing}
            onSubmit={this.handleWorkSubmit}
            onEdit={this.handleWorkEdit}
          />
        </div>    
            
        )
    }
}


export default App;