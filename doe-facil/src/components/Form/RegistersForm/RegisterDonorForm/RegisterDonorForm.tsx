import { Input } from "../../Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonorRegister } from "../../../../validators/schemasRegister/schemaDonorRegister";
import { useContext } from "react";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, StyleFormRegister } from "../../../../styles/components/form";

export interface iDonorRegister extends FieldValues {
  name: string;
  email: string;
  contact: string;
  adress: string;
  password: string;
  confirm_password: string;
}

export const RegisterDonorForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iDonorRegister>({
    resolver: yupResolver(schemaDonorRegister),
  });

  const { createDonorRequest } = useContext(UserRequestsContext);

  const submitForm: SubmitHandler<iDonorRegister> = (
    formData: iDonorRegister
  ) => createDonorRequest(formData);

  return (
    <>
      <StyleFormRegister onSubmit={handleSubmit(submitForm)}>
        <h1>Crie sua conta</h1>
        <section className="box_inputs">
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
        </section>

        <Button type="submit">Cadastrar</Button>
      </StyleFormRegister>
    </>
  );
};
