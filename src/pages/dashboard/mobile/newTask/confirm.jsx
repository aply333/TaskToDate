import { ButtonText } from "../../../../components/buttons/Button";
import { DropDown, Option } from "../../../../components/inputFields/dropDown";
import { Colors } from "../../../../db_placeholder/tempColors";
import { loginContainer } from "../../../login/mobile/mobileLoginConst";

function Confirm(){

    const dividerStyles = {
        display:"flex",
        flexFlow: "row",
        heihgt: "4rem",
        width: "90%"
    }

    const breakStyle = {
        width: "7rem",
        height: "1px",
        alignContent: "center",
        border:"none",
        backgroundColor: "#C4C4C4",
        marginTop: "1.625rem"
    }

    const orStyle ={
        fontFamily: "'Rancho', cursive",
        fontSize: "2.5rem",
        margin: "0",
        color: "#C4C4C4"
    }

    const justStyle = {
        marginTop: "1rem",
        width: "80%",
        height: "10rem",
        fontSize: "6rem"
    }

    return(
        <div style={loginContainer}>
            <DropDown border width="90%" height="4rem" name="Day" >
                <Option>Day</Option>
                <Option>Test Two</Option>
            </DropDown>
            <DropDown border width="90%" height="4rem" name="Month">
                <Option>Month</Option>
            </DropDown>
            <DropDown border width="90%" height="4rem" name ="Year">
                <Option>Year</Option>
            </DropDown>
            <div style={dividerStyles}>
                <hr style={breakStyle}/>
                <p style={orStyle}>or</p>
                <hr style={breakStyle}/>
            </div>
            <ButtonText style={justStyle} color={Colors.orange} alter={Colors.green} text="Just List"/>
        </div>
    )
}

export default Confirm;