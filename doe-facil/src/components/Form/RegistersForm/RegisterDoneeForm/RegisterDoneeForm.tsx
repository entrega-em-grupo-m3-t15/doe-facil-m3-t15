import { Header } from "../../../Header/Header";
import registerImg from "../../../../img/registerImg.svg";
import { Input } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { schemaDoneeRegister } from "../../../../validators/schemasRegister/schemaDoneeRegister";

export const RegisterDoneeForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm(schemaDoneeRegister);

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
            <Input label={"Senha"} {...register("password")} />
            <Input
              label={"Confirmar senha"}
              {...register("confirm_password")}
            />
            <Input label={"Telefone"} type={"tel"} {...register("contact")} />
            <Input label={"Renda percapta"} {...register("userInCome")} />

            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};
