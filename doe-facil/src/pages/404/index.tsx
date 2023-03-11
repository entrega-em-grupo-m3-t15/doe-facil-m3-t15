import { Link } from "react-router-dom";
import notFoundImage from "../../img/404.jpg";
import { StyledNotFoundPage } from "./style";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <img src={notFoundImage} alt="Página não encontrada icone" />

      <Link to={"/"}>Voltar</Link>
    </StyledNotFoundPage>
  );
};
