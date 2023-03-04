import andreProfileImage from "../../img/profileImage/andre-perfil.jpeg";
import IrlannaProfileImage from "../../img/profileImage/irlanna-perfil.jpeg";
import patrickProfileImage from "../../img/profileImage/patrick-perfil.jpeg";
import urielProfileImage from "../../img/profileImage/uriel-perfil.jpeg";

export const AboutUsPage = () => {
  return (
    <div>
      <h2>Sobre nós</h2>

      <main>
        <p>
          Nosso projeto é uma plataforma online que tem como objetivo ajudar
          pessoas em situações de vulnerabilidade a receber doações de forma
          mais efetiva. A ideia é conectar pessoas que querem ajudar com aquelas
          que precisam de ajuda de uma maneira personalizada. Com um sistema
          fácil de usar, as pessoas que querem doar podem criar uma conta e ver
          as doações disponíveis, enquanto as pessoas que precisam de ajuda
          podem se cadastrar para receber as doações. Além disso, criamos um
          filtro para garantir que somente pessoas que realmente precisam sejam
          beneficiadas pelas doações. Nós estamos usando tecnologias modernas
          para construir uma plataforma segura e confiável que pode ajudar
          muitas pessoas.
        </p>
      </main>

      <footer>
        <div>
          <img
            src={andreProfileImage}
            alt="perfil de um desenvoledor do projeto"
          />
          <img
            src={IrlannaProfileImage}
            alt="perfil de um desenvoledor do projeto"
          />
          <img
            src={patrickProfileImage}
            alt="perfil de um desenvoledor do projeto"
          />
          <img
            src={urielProfileImage}
            alt="perfil de um desenvoledor do projeto"
          />
        </div>
      </footer>
    </div>
  );
};
