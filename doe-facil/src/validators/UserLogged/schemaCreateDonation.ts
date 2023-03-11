import * as yup from "yup";

export const schemaCreateDonation = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  isClothes: yup
    .boolean()
    .required("Você precisa escolher se é roupa ou alimento"),
});
