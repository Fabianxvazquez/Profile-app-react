import React from "react"
import {Card, } from "semantic-ui-react"

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header> firstName lastName </Card.Header>
      <Card.Meta>
        Date Joined: dateJoined
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>email: email@email.com</p>
    </Card.Content>
  </Card>
) 
export default Account