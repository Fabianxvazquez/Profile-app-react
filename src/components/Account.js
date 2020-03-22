import React, {useContext} from "react"
import {Card, } from "semantic-ui-react"
import {AccountContext, } from "../providers/AccountProvider"

const Account = () => {
  const {firstName, lastName, email, dateJoined} = useContext(AccountContext)

  return (
    <Card>
    <Card.Content>
      <Card.Header>{firstName} {lastName} </Card.Header>
      <Card.Meta>
        Date Joined: {dateJoined}
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Email: {email}</p>
    </Card.Content>
  </Card>
  )
}
export default Account