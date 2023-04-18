import React, {Component} from 'react';


class Work extends Component {
    constructor(props){
        super(props);

        this.state = {
            companyName: '',
            jobTitle: '',
            jobDuration: '',
        }


    }

    handleInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleEdit = () => {
        this.props.onEdit();
        this.setState(this.props.work);
      };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
      };

      
  render() {

    const {companyName, jobTitle, jobDuration} = this.state;

    return (
      <div>
        <h2>WORK EXPERIENCE</h2>
        {this.props.workEditing ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Job Duration:
              <input
                type="number"
                name="jobDuration"
                value={jobDuration}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>
              Company Name: {companyName}
            </p>
            <p>
              Job Title: {jobTitle}
            </p>
            <p>
              Job Duration: {jobDuration}
            </p>
            <button onClick={this.handleEdit}>Edit Details</button>
          </div>
        )}
      </div>
    );
  }
}



export default Work;