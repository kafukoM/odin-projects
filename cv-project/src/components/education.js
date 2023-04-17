import React, {Component} from 'react';


class Education extends Component {
    constructor(props){
        super(props);

        this.state = {
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: '',
            isEditable: false,
        }


    }

    handleInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleEdit = () => {
        this.props.onEdit();
        this.setState(this.props.education);
      };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
          isEditable: false,
        });
      };

      
  render() {

    const {schoolName, titleOfStudy, dateOfStudy} = this.state;

    return (
      <div>
        <h2>Education</h2>
        {this.props.editing ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              School Name:
              <input
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Title of Study:
              <input
                type="text"
                name="titleOfStudy"
                value={titleOfStudy}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Date of Study:
              <input
                type="text"
                name="dateOfStudy"
                value={dateOfStudy}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>
              School Name: {schoolName}
            </p>
            <p>
              Title of Study: {titleOfStudy}
            </p>
            <p>
              Date of Study: {dateOfStudy}
            </p>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}



export default Education;