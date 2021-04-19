import React, { useEffect, useState } from "react";
import { ButtonText } from "../../components/buttons/Button";
import Container from "../../components/conainter/Contianer";
import TextInput from "../../components/inputFields/textInput";
import PopUp from "../../components/popContent/popUp";
import { Colors } from "../../db_placeholder/tempColors";
import { loginLayout, headerStyles, formStyles } from "./loginConst";
import { useForm } from "react-hook-form";
import SignUpPop from "./signupPop";
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions";
import { useHistory } from "react-router-dom";

function LoginPage({ loginAction, isLoggedIn }) {
  const [popUp, setPopUp] = useState(false);
  function togglePop() {
    if (popUp === true) {
      setPopUp(false);
    } else setPopUp(true);
  }
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");
    }
  }, [isLoggedIn]);

  const { register, handleSubmit } = useForm();
  const history = useHistory();
  function submitLogin(data) {
    loginAction(data);
  }

  return (
    <>
      <PopUp
        color={Colors.purple}
        action={togglePop}
        dropColor={Colors.orange}
        trigger={popUp}
      >
        <SignUpPop />
      </PopUp>
      <div style={loginLayout}>
        <Container
          style={{ marginRight: "1rem" }}
          color={Colors.orange}
          height="6rem"
          width="18rem"
          topLeft
          bottomLeft
        >
          <h1 style={headerStyles}>Task To Date</h1>
        </Container>
        <Container
          color={Colors.orange}
          height="6rem"
          width="40rem"
          topRight
          bottomRight
        >
          <div style={formStyles}>
            <form
              onSubmit={handleSubmit(submitLogin)}
              style={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <TextInput
                register={register}
                name="email"
                placeholder="email"
                style={{ height: "2.5rem", width: "12rem" }}
              />
              <TextInput
                register={register}
                name="password"
                placeholder="password"
                type="password"
                style={{ height: "2.5rem", width: "12rem" }}
              />
              <ButtonText text="Login" color={Colors.pink} alter={Colors.red} />
            </form>
            <ButtonText
              text="Sign-Up"
              action={togglePop}
              color={Colors.purple}
              alter={Colors.red}
            />
          </div>
        </Container>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.account.isLoggedIn,
  };
};

export default connect(mapStateToProps, { loginAction })(LoginPage);
