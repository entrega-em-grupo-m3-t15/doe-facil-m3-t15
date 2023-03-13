import { Header } from "../../components/Header/Header";
import homePageWallpaper1 from "../../img/homePage2.png"
import homePageWallpaper2 from "../../img/homePage.png"
import homePageWallpaper3 from "../../img/homePage1.png"
import logo from "../../img/logo.svg"
import { StyledHomePage } from "./styles";

export const HomePage = () => (
  <>
    <StyledHomePage>
      <div>
        <Header />
      </div>
      
      <img src={homePageWallpaper1} className="homePageWallpaper1" alt="Home Page Wallpaper" />
      <main className="mainContainer">
        <h1>Bem-vindo(a) ao Doe  Fácil</h1>

        <div>
          <img className="homePageWallpaper2" src={homePageWallpaper2} alt="Home Page Wallpaper" />

          <p>
            Com a sua doação  podemos ajudar aqueles que mais precisam, desde famílias de baixa renda até indivíduos sem-teto. Sua contribuição pode fazer toda a diferença na vida de alguém.
            Podemos tornar o mundo um lugar melhor para todos. Junte-se a nós e faça a sua parte para ajudar a tornar o mundo um lugar mais justo e igualitário. 
          </p>
        </div>
        
      </main>

      <img src={homePageWallpaper3} className="homePageWallpaper1" alt="Home Page Wallpaper" />

      <footer>
        <img src={logo} alt="" />

        <div>
          <p>CENTRAL DE ATENDIMENTO</p>
          <div className="line"></div>
          <p className="phoneNumber">(62) 3333-3333</p>
        </div>
      </footer>
    </StyledHomePage>
  </>
);
