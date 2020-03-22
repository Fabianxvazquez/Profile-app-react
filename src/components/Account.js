import React from "react"
import {Card, } from "semantic-ui-react"

const Account = () => (
  <Card>
    <Card.Content>
      <Card.Header> firstName lastName </Card.Header>
      <Card.Meta>
        email: email@email.com
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>Membership Level: membershipLevel </p>
    </Card.Content>
  </Card>
) 
export default Account