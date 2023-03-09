import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form/dist/useForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonorRegister } from "../../../../validators/schemasRegister/schemaDonorRegister";
import { useContext } from "react";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { FieldValues, SubmitHandler } from "react-hook-form";

export interface iDonorRegister extends FieldValues {
  name: string;
  email: string;
  contact: string;
  adress: string;
  password: string;
  confirm_password: string;
}

export const RegisterDoneeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iDonorRegister>({
    resolver: yupResolver(schemaDonorRegister),
  });

  const { createDonorRequest } = useContext(UserRequestsContext);

  return (
    <>
      <form onSubmit={handleSubmit(createDonorRequest)}>
        <Input
          label="Nome"
          register={register("name")}
          type="text"
          error={errors.name?.message}
        />
        <Input
          label="Email"
          register={register("email")}
          type="mail"
          error={errors.email?.message}
        />
        <Input
          label="Telefone"
          register={register("contact")}
          type="tel"
          error={errors.contact?.message}
        />
        <Input
          label="Endereço"
          register={register("adress")}
          type="text"
          error={errors.adress?.message}
        />
        <Input
          label="Senha"
          register={register("password")}
          type="password"
          error={errors.password?.message}
        />
        <Input
          type="password"
          label="Confirmar senha"
          register={register("confirm_password")}
          error={errors.confirm_password?.message}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
};
