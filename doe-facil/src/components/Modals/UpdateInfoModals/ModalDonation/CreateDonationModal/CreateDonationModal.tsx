import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { IFormRegisterDonation } from "../../../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../../../contexts/ModalsContext/ModalsContext";
import { schemaCreateDonation } from "../../../../../validators/UserLogged/schemaCreateDonation";
import { Input } from "../../../../Form/Input/Input";
import { StyledDialog } from "./styles";

export const CreateDonationModal = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { registerDonation } = useContext(DashboardContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterDonation>({
    resolver: yupResolver(schemaCreateDonation),
  });

  const submitForm: SubmitHandler<IFormRegisterDonation> = (formData) => {
    registerDonation(formData);
  };

  return (
    <StyledDialog>
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
          <select {...register("isClothes")}>
            <option value="roupas">Roupas</option>
            <option value="alimentos">Alimento</option>
          </select>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </StyledDialog>
  );
};
