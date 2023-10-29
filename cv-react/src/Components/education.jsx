/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Education(props) {
  const [state, setState] = useState(props.education);



  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleEdit = () => {
    props.onEdit();
    //setState(props.education);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(state);
  };


  const {schoolName, titleOfStudy, dateOfStudy} = state;

  return (
    <div>
      <h2>EDUCATION</h2>
      {props.educationEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            School Name:
            <input
              type="text"
              name="schoolName"
              value={schoolName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Title of Study:
            <input
              type="text"
              name="titleOfStudy"
              value={titleOfStudy}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Date of Study:
            <input
              type="text"
              name="dateOfStudy"
              value={dateOfStudy}
              onChange={handleInputChange}
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
          <button onClick={handleEdit}>Edit Details</button>
        </div>
      )}
    </div>
  );
  
  
}

