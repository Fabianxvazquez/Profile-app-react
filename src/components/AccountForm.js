import React from "react";
import { Form, } from "semantic-ui-react";
import {AccountConsumer,} from "../providers/AccountProvider"

class AccountForm extends React.Component {
  state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email,
  }
    
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { firstName, lastName, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        
        <Form.Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />

        <Form.Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />

        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        
        
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
        />
      )}
    </AccountConsumer>
  )
}




export default ConnectedAccountForm;