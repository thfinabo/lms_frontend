// import { authRequest } from "../services/auth/auth-request";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminRegisterValidator } from "../validators/auth-validators";

const RegisterHook = () => {
  const { watch, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(adminRegisterValidator),
    mode: "all",
    defaultValues: {
        firstName: "",
        lastName:"",
        email:"",
        password:""
    },
  });

  const handleValueChange = (field, value) =>{
    setValue(field,value)
}

  const {firstName, lastName, email, password} = watch();
  return {
    handleSubmit,
    firstName,
    lastName,
    email,
    password,
    handleValueChange,
    errors:formState.errors
  };
};

export default RegisterHook;
