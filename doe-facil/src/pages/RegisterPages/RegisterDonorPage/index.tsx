import { Header } from "../../../components/Header/Header";
import { StylePageRegister } from "../RegisterDoneePages/style";
import wallpaperLogin from '../../../img/wallpaperLogin.jpg'
import { RegisterDonorForm } from "../../../components/Form/RegistersForm/RegisterDonorForm/RegisterDonorForm";

export const RegisterDonorPage = () => (

  <StylePageRegister>
    <Header/>
    <main >
      
      <div className="wallpaper">
        <img src={wallpaperLogin} alt="" />
      </div>
      <div className='box_form'>
      
      <RegisterDonorForm/>

      </div>

    </main>

  </StylePageRegister>
);