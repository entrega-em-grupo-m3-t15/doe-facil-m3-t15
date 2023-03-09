import { DoneeInfo } from "./DoneeInfo/DoneeInfo";

export const UserDoneePage = () => {
  return (
    <div className="container">
      <div className="left">
        <DoneeInfo />
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
