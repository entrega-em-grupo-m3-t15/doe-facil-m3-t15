import wallpaperLogin from '../../img/wallpaperLogin.jpg'
import { Header } from "../../components/Header/Header";
import { Button, Input, StyleFormLogin } from "../../styles/components/form"
import { StylePageLogin } from "./style";
import { LoginForm } from '../../components/Form/LoginForm';

export const LoginPage = () => {

  return(

    <StylePageLogin>
      <Header/>
      <main >
        
        <div className="wallpaper">
          <img src={wallpaperLogin} alt="" />
        </div>
        <div className='box_form'>
        
        <LoginForm/>

        </div>

      </main>

    </StylePageLogin>
  )
};
