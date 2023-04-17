import React, {Component} from 'react';


class GeneralInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            isEditable: false,
        }


    }

    handleInputChange = (event) => {
        let { name, value } = event.target;
        this.setState({[name]: value});
    }

    handleEditClick = () => {
        this.setState({isEditable: true});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isEditable: false});
    }

    render(){
        const { name, email, phoneNumber, isEditable} = this.state;
        if(isEditable){
            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='Email'>Email:</label>
                        <input 
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input 
                        type='tel'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <button type='submit'>Submit</button>

                    </form>
            )
        } else {
            return ( 
        <div>
            <h2>GENERAL INFORMATION</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <button onClick={this.handleEditClick}>Edit Details</button>
        </div>
           
            )
           
        }
    }
}

export default GeneralInfo;