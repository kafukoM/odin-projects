/* eslint-disable react/prop-types */
import { useState } from "react";

const GeneralInfo = (props) => {
  const [state, setState] = useState(props.generalInfo);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEdit = () => {
    props.onEdit();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(state);
   
  };

  const { firstName, lastName, profession, email, phoneNumber } = state;

  return (
    <div>
      <h2>GENERAL INFORMATION</h2>
      {props.generalInfoEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
             Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              name="profession"
              value={profession}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>
            First Name: {firstName}
          </p>
          <p>
            Last Name: {lastName}
          </p>
          <p>
            Email: {email}
          </p>
           <p>
            Telephone: {phoneNumber}
          </p> 
          <p>
            Profession: {profession}
          </p>
          <button onClick={handleEdit}>Edit Details</button>
        </div>
      )}
    </div>
  );
  

    
    }
export default GeneralInfo;