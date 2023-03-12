import * as yup from "yup";

export const schemaEditUserInfo = yup
  .object({
    name: yup.string().required("preencha com seu nome "),
    adress: yup.string().required("Adicione algo para continuar"),
    contact: yup.string().required("O número de telefone é obrigatório"),
    userInCome: yup.string().required("Selecione uma opção"),
  })
  .required();
