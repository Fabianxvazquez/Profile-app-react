import React from "react";

// Set Up The Initial Context
const AccountContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const AccountConsumer = AccountContext.Consumer;

// Create the provider using a traditional React.Component class
class AccountProvider extends React.Component {
  state = {
    firstName: "Fabian",
    lastName: "vazquez",
    dateJoined: "12/18/18",
    email: "email@email.com",
  };
    
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;