import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Página não encontrada</h3>

      <Link to={"/"}>Voltar</Link>
    </>
  );
};
