import React from "react";
import { Form, } from "semantic-ui-react";

class AccountForm extends React.Component {
  state = { firstName: "", lastName: "", };
  
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





export default AccountForm;