import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidator } from "./validators/auth-validators";

const LoginHook = () => {
  const { watch, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(loginValidator),
    mode: "all",
    defaultValues: {
        email:"",
        password:""
    },
  });

  const handleValueChange = (field, value) =>{
    setValue(field,value)
  }

  const {email, password} = watch();
  return {
    handleSubmit,
    email,
    password,
    handleValueChange,
    errors:formState.errors
  };
};

export default LoginHook;
