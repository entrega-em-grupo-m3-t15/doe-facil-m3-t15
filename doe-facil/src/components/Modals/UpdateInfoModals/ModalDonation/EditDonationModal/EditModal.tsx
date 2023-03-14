import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { IRegisterDonation } from "../../../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../../../contexts/ModalsContext/ModalsContext";
import { schemaCreateDonation } from "../../../../../validators/UserLogged/schemaCreateDonation";
import { Input } from "../../../../Form/Input/Input";

export const EditModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterDonation>({
    resolver: yupResolver(schemaCreateDonation),
  });

  const { updateDonation, setIsClothes } = useContext(DashboardContext);
  const { setEspecialModalIsOpen } = useContext(ModalsContext);

  const submitForm: SubmitHandler<IRegisterDonation> = (formData) => {
    updateDonation(formData);
  };

  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Editar doação</h2>
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

          <button type="submit">Editar</button>
        </form>
      </div>
    </dialog>
  );
};
