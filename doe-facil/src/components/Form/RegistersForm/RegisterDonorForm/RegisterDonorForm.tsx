import { Header } from "../../../Header/Header";
import { Input } from "../../Input/Input";
import registerImg from "../../../../img/registerImg.svg";
import { useForm } from "react-hook-form/dist/useForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaDonorRegister } from "../../../../validators/schemasRegister/schemaDonorRegister";

export const RegisterDoneeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDonorRegister),
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
            <Input label={"Nome"} {...register("name")} type="text" />
            <Input label={"Email"} {...register("email")} type="mail" />
            <Input label={"Telefone"} {...register("contact")} type="tel" />
            <Input label={"Senha"} {...register("password")} type="password" />
            <Input
              label={"Confirmar senha"}
              {...register("confirm_password")}
            />

            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};
