import wallpaperLogin from '../../img/wallpaperLogin.jpg'
import { Header } from "../../components/Header/Header";
import { Button, Input, StyleFormLogin } from "../../styles/components/form"
import { StylePageLogin } from "./style";

export const LoginPage = () => {

  /* <h1> você está na LoginPage</h1>; */

  return(

    <StylePageLogin>
      <Header/>
      <main >
        
        <div className="wallpaper">
          <img src={wallpaperLogin} alt="" />
        </div>
        <div className='box_form'>
        
          <StyleFormLogin>
            <h1>Login</h1>
            <div>
              <label htmlFor="">Nome</label>
              <Input placeholder="Digite seu nome"/>
              <label htmlFor="">Senha</label>
              <Input placeholder="Digite sua senha"/>
            </div>
              <Button>Entrar</Button>
          </StyleFormLogin>

        </div>

      </main>

    </StylePageLogin>
  )
};
