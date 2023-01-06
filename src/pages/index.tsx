import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import pic from "/home/flaviobulhoes/login/src/public/9c5d0aa9c92c1f5bd2fc5ca9a2c1e871.png";
import tp from "/home/flaviobulhoes/login/src/public/311983d86509bbc727210d7ec359875c.png";
import theme, { darkThemeColors } from "./theme";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    background: white;
    font-family: ${poppins.style.fontFamily};


  }
  #container-imagem {
    position: relative;
    height: 100vh;
    width: 50vw;
}
.login-container{
  background: gray;
  width: 25vw;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
#tp-image{
  width: 20vw;
  height: 100%;
}
.img{
  display: inline-block;
  position: relative;
  width: 50%;

}
.in-front-text{
  position: absolute;
  top: 3rem;
  bottom: 3rem;
  margin: 5rem;
  color: white;
}
`;
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="img">
        <Image src={pic} alt="Picture of the author" id="container-imagem" />
        <div className="in-front-text">
          <h1>Seja bem-vindo ao Portal de Vagas da TP.</h1>
          <h2>
            Agora só faltam algumas informações para que você faça parte de uma
            das melhores empresas para se trabalhar do Brasil.
          </h2>
          <p>
            Por favor, insira o seu CPF e senha ao lado e clique em entrar para
            enviar os seus documentos.
          </p>
        </div>
      </div>
      <div className="login-container">
        <Image id="tp-image" alt="tp" src={tp} />
        <div className="login">
          <label>Login</label>
          <input placeholder="CPF"></input>
        </div>
        <div className="senha">
          <label>Senha</label>
          <input placeholder="Senha"></input>
        </div>
      </div>
    </>
  );
}
