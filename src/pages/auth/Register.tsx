import CustomInput from "../../components/inputs/CustomInput"
import BackgroundLayout from "../../Layout/BackgroundLayout"
import image from "../../assets/images/barcode-scanner.jpg"
const Register = () => {
  return (
    <BackgroundLayout>
      <div className="h-screen overflow-hidden p-5 flex justify-center items-center">
      <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2 bg-white shadow-lg p-10 h-full w-full">
        <div className=" h-full flex justify-center items-center  ">
          <img src={image} alt="" srcSet="" className="w-full h-full object-cover rounded-r-2xl" />
        </div>
      <form action="" className="mr-20 my-10">
      <CustomInput label="name" name="name" id="name"/>
        <CustomInput  label="Email" name="email" id="email" type="email"/>
        <CustomInput label="password" name="password" id="password" type="password"/>
        <button>Sign Up</button>
        </form>
        </div>
        </div>
    </BackgroundLayout>
  )
}

export default Register