import { Header } from "../../../Header/Header";
import registerImg from "../../../../img/registerImg.svg";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { schemaDoneeRegister } from "../../../../validators/schemasRegister/schemaDoneeRegister";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegisterDoneeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDoneeRegister),
  });

  return (
    <>
      <Header />

      <div className="container">
        <div className="left">
          <img src={registerImg} alt="Imagem ilustrativa" />
        </div>

        <div className="right">
          <form>
            <Input label={"Nome"} {...register("name")} />
            <Input label={"Email"} {...register("email")} />
            <Input label={"Senha"} {...register("adress")} />
            <Input label={"Telefone"} type={"tel"} {...register("contact")} />
            <select>
              <option value="nothing">não ganho renda</option>
              <option value="min">200R$ a 400R$</option>
              <option value="mid">400R$ a 600R$</option>
              <option value="max">600R$ a 800R$</option>
            </select>
            <Input label={"Senha"} {...register("password")} />
            <Input label="Confirmar senha" {...register("confirm_password")} />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};
