import * as yup from "yup";

export const schemaDonorRegister = yup
  .object({
    name: yup.string().required("preencha com seu nome "),
    email: yup.string().email().required("preencha com um email válido "),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),

    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha")
      .required("preencha o campo"),

    bio: yup.string().required("Adicione algo para continuar"),
    contact: yup
      .string()
      .matches(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Insira um numero válido")
      .required("O número de telefone é obrigatório"),
    userInCome: yup
      .string()
      .oneOf(
        ["no momento nada", "200R$ a 400R$", "400R$ a 600R$", "600R$ a 800R$"],
        "Selecione uma opção válida"
      )
      .required("Selecione uma opção"),
  })
  .required();
