import { signUpHeader, popStyle, signUpText } from "./loginConst";
import TextInput from "../../components/inputFields/textInput";
import { ButtonText } from "../../components/buttons/Button";
import { Colors } from "../../db_placeholder/tempColors";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerAction } from "../../redux/actions";

function SignUpPop({ registerAction }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.secondPass) {
      registerAction({
        username: data.name,
        email: data.email,
        password: data.password,
      });
    }
  };

  return (
    <>
      <h1 style={signUpHeader}>Sign - Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={popStyle}>
        <TextInput
          register={register}
          name="name"
          style={signUpText}
          placeholder="Name"
        />
        <TextInput
          register={register}
          name="email"
          style={signUpText}
          placeholder="email"
        />
        <TextInput
          type="password"
          register={register}
          name="password"
          style={signUpText}
          placeholder="password"
        />
        <TextInput
          type="password"
          register={register}
          name="secondPass"
          style={signUpText}
          placeholder="password"
        />
        <ButtonText color={Colors.pink} alter={Colors.green} text="Login" />
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { registerAction })(SignUpPop);
