import React, { Component } from "react";
import GeneralInfo from './components/generalInfo.js'
import Education from './components/education.js'



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
                dateOfStudy: ''
              },

            editing: false,
        }


    }

    handleEducationSubmit = education => {
        this.setState({
          education: education,
          editing: false
        });
      };
    
      handleEducationEdit = () => {
        this.setState({
          editing: true
        })
    }

    handleGeneralInfoSubmit = generalInfo => {
        this.setState({
            generalInfo: generalInfo,
            editing: false
        })
    }

    handleGeneralInfoEdit = () => {
        this.setState({
            editing: true
        })
    }

    render() {
        return ( 
        <div>
            <GeneralInfo 
            generalInfo = { this.state.generalInfo }
            editing = { this.state.editing }
            onSubmit = { this.handleGeneralInfoSubmit }
            onEdit={this.handleGeneralInfoEdit}
            /> 
            <Education
            education={this.state.education}
            editing={this.state.editing}
            onSubmit={this.handleEducationSubmit}
            onEdit={this.handleEducationEdit}
          />
        </div>    
            
        )
    }
}


export default App;