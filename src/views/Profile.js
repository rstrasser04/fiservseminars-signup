import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

// import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Button
          id="earlyreg-btn"
          color="primary"
          className="btn-margin"
          disabled
        >
        Edit Profile
      </Button>
      <br /><br />
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Username:</label>
          <input label="username" type="text" readyonly value="johndoe1"></input>
        </Col>  
      </Row>
      <Row>
        <Col>
          <label>Bank Name:</label>
          <input label="bankname" type="text" readonly value="Bank of Fiserv"></input>
        </Col>   
      </Row>
    </Container>
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
