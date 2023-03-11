import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";
import { iUpdateUser } from "../../../../contexts/UserInfoContext/inteface";
import { UserContext } from "../../../../contexts/UserInfoContext/UserInfoContext";
import { schemaEditUserInfo } from "../../../../validators/UserLogged/schemaEditUserInfo";
import { Input } from "../../../Form/Input/Input";

export const ModalUpdateUser = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateUser>({
    resolver: yupResolver(schemaEditUserInfo),
  });

  const { updateUser } = useContext(UserContext);

  const submitForm: SubmitHandler<iUpdateUser> = (formData: iUpdateUser) => {
    updateUser(formData);
  };

  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Editar Perfil</h2>
        </header>

        <main>
          <form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Nome"
              register={register("name")}
              type="text"
              error={errors.name?.message}
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
          </form>
          <button type="submit">Salvar</button>
        </main>
      </div>
    </dialog>
  );
};
