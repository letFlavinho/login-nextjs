import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import background from "/home/flaviobulhoes/login/src/public/9c5d0aa9c92c1f5bd2fc5ca9a2c1e871.png";
import tp from "/home/flaviobulhoes/login/src/public/311983d86509bbc727210d7ec359875c.png";
import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    background: white;
    font-family: ${poppins.style.fontFamily};
  }
  
  input{
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    border: 1px solid gray;
    border-radius: 3px;
    width: 15rem;
    height: 1.5rem;
    
  }
  label{
    margin-top: 1rem;
  }
  #container-imagem {
    position: relative;
    height: 100vh;
    width: 50vw;
    float: left;
    
}

#tp-image{
  width: 17vw;
  height: 100%;
  margin: 2rem;
}
.img{
  display: inline-block;
  position: relative;
  width: 50%;

}

.in-front-text{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: black;
  inset: 2rem;
  
}

.login-right{
  float: right;
  align-items: center;
  width: 50vw;
}
.login-container{
  min-height: 100vh;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
label, input{
  display: block;

}
button{
  background-color: #3047A6;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  color: white;
  width: 10rem;
  padding: 0.6rem;
  font-weight: 700;
  font-size: 16px;
  margin-top: 2rem;
  
  
}

@media screen and (max-width: 900px) {
  .in-front-text{
    display: none;
  }
  #container-imagem{
    width: 70vw;
    position: absolute;
  }
  .login-container{
    position: relative;
    width: 50vw;
    background: white;
  
  }
}
`;
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="img">
        <Image
          src={background}
          alt="backgroundture of the author"
          id="container-imagem"
        />
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
      <div className="login-right">
        <div className="login-container">
          <Image id="tp-image" alt="tp" src={tp} />
          <form>
            <div className="login">
              <label>CPF</label>
              <input placeholder="Insira seu CPF" />
            </div>
            <div className="senha">
              <label>Senha</label>
              <input placeholder="Insira sua senha aqui" />
              <button>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
