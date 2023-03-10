import { DonneInfo } from "./DoneeInfo/DoneeInfo";

export const UserDoneePage = () => {
  //Aqui eu devo pegar as doaçãoes do donee mas não sei se tem uma rota só para isso
  return (
    <div className="container">
      <div className="left">
        <DonneInfo />
      </div>
      <div className="right">
        <main>
          <ul>
            <li>Aqui deve ficar os cards</li>
          </ul>
        </main>
      </div>
    </div>
  );
};
