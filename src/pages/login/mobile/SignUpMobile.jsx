import TextInput from "../../../components/inputFields/textInput";
import { mobileFormStyle, mobileInput, mobileButton } from "./mobileLoginConst";
import { ButtonText } from "../../../components/buttons/Button";
import { Colors } from "../../../db_placeholder/tempColors";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerAction } from "../../../redux/actions";

function SignUpMobile({ toggle, registerAction }) {
  const { register, handleSubmit } = useForm();
  function submitRegister(data) {
    if (data.password === data.secondPass) {
      registerAction({
        username: data.name,
        email: data.email,
        password: data.password,
      })
      toggle();
    }
  }

  return (
    <form onSubmit={handleSubmit(submitRegister)} style={mobileFormStyle}>
      <TextInput
        register={register}
        style={{ ...mobileInput, marginTop: "2rem" }}
        placeholder="name"
        name="name"
      />
      <TextInput
        register={register}
        style={mobileInput}
        placeholder="email"
        name="email"
      />
      <TextInput
        register={register}
        style={mobileInput}
        placeholder="password"
        name="password"
        type="password"
      />
      <TextInput
        register={register}
        style={mobileInput}
        placeholder="passowrd again"
        name="secondPass"
        type="password"
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
          type="submit"
          text="register"
          color={Colors.pink}
          alter={Colors.red}
        />
        <ButtonText
          style={mobileButton}
          type="cancel"
          text="cancel"
          color={Colors.purple}
          alter={Colors.green}
          action={toggle}
        />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { registerAction })(SignUpMobile);
