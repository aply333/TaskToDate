import { mobileButton, mobileFormStyle, mobileInput } from "./mobileLoginConst";
import { connect } from "react-redux";
import TextInput from "../../../components/inputFields/textInput";
import { ButtonText } from "../../../components/buttons/Button";
import { Colors } from "../../../db_placeholder/tempColors";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../../redux/actions";
import { useEffect } from "react";

function LoginFormMobile({ toggle, isLoggedIn, loginAction }) {
  const history = useHistory();
  useEffect(() => {
    console.log("useeffect called")
    if (isLoggedIn) {
      console.log("useeffect If")
      history.push("/dashboard");
    }
  }, [isLoggedIn]);

  const { register, handleSubmit } = useForm();
  function submitLogin(data) {
    console.log("Submit Called")
    console.log(data)
    loginAction(data);
  }

  function testLog(){
    console.log("BtnPressed")
  }

  return (
    <>
      <form style={mobileFormStyle} onSubmit={handleSubmit(submitLogin)}>
        <TextInput
          register={register}
          name="email"
          style={{ ...mobileInput, marginTop: "2rem" }}
          placeholder="email"
        />
        <TextInput
          register={register}
          name="password"
          type="password"
          style={mobileInput}
          placeholder="password"
        />
        <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
        }}
      >
        <ButtonText
          style={mobileButton}
          text="login"
          type="submit"
          color={Colors.pink}
          alter={Colors.red}
          action={testLog}
        />
      <ButtonText
        style={mobileButton}
        type="signup"
        text="sign-up"
        color={Colors.purple}
        alter={Colors.green}
        action={toggle}
      />

        </div>
      </form>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.account.isLoggedIn,
  };
};

export default connect(mapStateToProps, { loginAction })(LoginFormMobile);
