import { Header } from "../../../components/Header/Header";
import { StyleFormLogin, Input, Button, StyleFormRegister } from "../../../styles/components/form";
import { StylePageLogin } from "../../LoginPage/style";
import wallpaperLogin from '../../../img/wallpaperLogin.jpg'
import { RegisterDoneeForm } from "../../../components/Form/RegistersForm/RegisterDoneeForm/RegisterDoneeForm";
import { StylePageRegister } from "./style";

export const RegisterDoneePage = () => (

  
  <StylePageRegister>
    <Header/>
    <main >
      
      <div className="wallpaper">
        <img src={wallpaperLogin} alt="" />
      </div>
      <div className='box_form'>
      
        <RegisterDoneeForm/>

      </div>

    </main>

  </StylePageRegister>

);
