import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaLoginUser } from "../../../validators/schemaLogin";
import { Header } from "../../Header/Header";
import { Input } from "../Input/Input";
import registerImg from "../../../img/registerImg.svg";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginUser),
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
            <Input label={"Email"} {...register("email")} />
            <Input label={"Senha"} {...register("password")} />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};
