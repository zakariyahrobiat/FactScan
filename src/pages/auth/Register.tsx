import CustomInput from "../../components/inputs/CustomInput"
import BackgroundLayout from "../../Layout/BackgroundLayout"
const Register = () => {
  return (
    <BackgroundLayout>
      <CustomInput label="name" name="name" id="name"/>
        <CustomInput  label="Email" name="email" id="email" type="email"/>
        <CustomInput label="password" name="password" id="password" type="password"/>
        <button>Sign Up</button>
    </BackgroundLayout>
  )
}

export default Register