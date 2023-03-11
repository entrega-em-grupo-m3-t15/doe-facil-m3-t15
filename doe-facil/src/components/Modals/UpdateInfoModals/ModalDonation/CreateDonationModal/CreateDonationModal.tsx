import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { IRegisterDonation } from "../../../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../../../contexts/ModalsContext/ModalsContext";
import { schemaCreateDonation } from "../../../../../validators/UserLogged/schemaCreateDonation";
import { Input } from "../../../../Form/Input/Input";

export const CreateDonationModal = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { registerDonation, setIsClothes } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterDonation>({
    resolver: yupResolver(schemaCreateDonation),
  });

  const submitForm: SubmitHandler<IRegisterDonation> = (formData) => {
    registerDonation(formData);
  };

  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Criar doação</h2>
        </header>

        <form onSubmit={handleSubmit(submitForm)}>
          <Input
            type="text"
            label="Nome"
            register={register("name")}
            error={errors.name?.message}
          />

          <textarea cols={30} rows={10} {...register("description")}></textarea>
          <h2>Esta doação é</h2>
          <div>
            <button onClick={() => setIsClothes(true)}>Roupa</button>
            <button onClick={() => setIsClothes(false)}>Alimento</button>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </dialog>
  );
};
