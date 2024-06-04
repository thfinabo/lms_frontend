// import { authRequest } from "../services/auth/auth-request";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordValidator } from "./validators/auth-validators";

const ChangePasswordHook = () => {
  const { watch, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(changePasswordValidator),
    mode: "all",
    defaultValues: {
        email:"",
    },
  });

  const handleValueChange = (field, value) =>{
    setValue(field,value)
  }

  const { email } = watch();
  return {
    handleSubmit,
    email,
    handleValueChange,
    errors:formState.errors
  };
};

export default ChangePasswordHook;
