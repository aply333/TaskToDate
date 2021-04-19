import React, { useState } from "react";
import Container from "../../../components/conainter/Contianer";
import { Colors } from "../../../db_placeholder/tempColors";
import LoginFormMobile from "./LoginFormMobile";
import { headerText, loginContainer, loginForm } from "./mobileLoginConst";
import SignUpMobile from "./SignUpMobile";

function MobileLogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  function toggleSignUp() {
    if (isSignUp === false) {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }

  return (
    <div style={loginContainer}>
      <Container
        bottomLeft
        bottomRight
        height="6rem"
        width="90%"
        color={Colors.orange}
      >
        <h1 style={headerText}>Task To Date</h1>
      </Container>
      <Container all color={Colors.orange} width="80%" style={loginForm}>
        {isSignUp ? (
          <SignUpMobile toggle={toggleSignUp} />
        ) : (
          <LoginFormMobile toggle={toggleSignUp} />
        )}
      </Container>
    </div>
  );
}

export default MobileLogin;
