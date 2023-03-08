import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { schemaLoginUser } from "../../../validators/schemaLogin";
import { Input } from "../Input/Input";
import { useContext } from "react";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { Button, StyleFormLogin } from "../../../styles/components/form";

interface iloginUser extends FieldValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iloginUser>({
    resolver: yupResolver(schemaLoginUser),
  });

  const { loginUserRequest } = useContext(UserRequestsContext);

  const submitForm: SubmitHandler<iloginUser> = (formData: iloginUser) => {
    loginUserRequest(formData);
  };

  return (
    <>
      <StyleFormLogin onSubmit={handleSubmit(submitForm)}>
        <h1>Login</h1>
        <div>
          <Input
            label="Email"
            register={register("email")}
            type="mail"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            register={register("password")}
            type="password"
            error={errors.password?.message}
          />

        </div>

        <Button type="submit">Cadastrar</Button>
      </StyleFormLogin>
    </>
  );
};
