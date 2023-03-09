import { Input } from "../../Input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { schemaDoneeRegister } from "../../../../validators/schemasRegister/schemaDoneeRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { Button, StyleFormRegister } from "../../../../styles/components/form";

export interface iDoneeRegister extends FieldValues {
  name: string;
  email: string;
  contact: string;
  adress: string;
  userInCome: string;
  password: string;
  confirm_password: string;
}

export const RegisterDoneeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iDoneeRegister>({
    resolver: yupResolver(schemaDoneeRegister),
  });

  const { createDoneeRequest } = useContext(UserRequestsContext);

  const submitForm: SubmitHandler<iDoneeRegister> = (
    formData: iDoneeRegister
  ) => {
    createDoneeRequest(formData);
  };

  return (
    
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
            type="tel"
            register={register("contact")}
            error={errors.contact?.message}
          />
          <Input
            label="Endereço"
            type="text"
            register={register("adress")}
            error={errors.adress?.message}
          />
          
          <label>Renda familiar</label>
          <select {...register("userInCome")}>
            <option value="nothing">não ganho renda</option>
            <option value="min">200R$ a 400R$</option>
            <option value="mid">400R$ a 600R$</option>
            <option value="max">600R$ a 800R$</option>
          </select>
            <p>{errors.userInCome?.message}</p>
         
          <Input
            label="Senha"
            register={register("password")}
            type="password"
            error={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            register={register("confirm_password")}
            error={errors.confirm_password?.message}
          />
        </section>

        <Button type="submit">Cadastrar</Button>
      </StyleFormRegister>
    
  );
};
