import React from "react";
import "./LoginPage.css";
import { useState } from "react"; // vamos importar o useState basicamente para armazenar os dados de Login isso é o Seu Email e sua Senha

// essa é a login page, basicamente o que vamos fazer aqui é adiconar o conteúdo
// de forma que haja um desvio de ligamento para a página de login.

const LoginPage = () => {
  const [email, setEmailData] = useState(""); // em ambos os casos o que temos são o Getter e o setter, um coleta os dados e outro os confirma
  const [password, setPassowordData] = useState(""); // tanto o passoword quanto o email

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("logged in", { email, password }); // "logged in" vai ser a mensagem destinada a aparecer quando o usuário realizar a ação, e essa chave define o valores de "email" e "password"
  };

  // basicamente após a aplicação deste circuito e suas ligações que estão dentro do return,
  // o que ocorre é a criação de um objeto de armazenamento que consiste na sua senha e no seu Email,
  // que estão agora estocados no site dentro do Objeto especificado.

  return (
    <div id="login-form">
      <h1 className="title"> System Login </h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* não são todos os forms que vão ter a mesma formatação por isso eles vão ser feitos separadamente*/}
        <div className="fields">
          <label htmlFor="email" className="fields">
            Your Best Email
          </label>
          <input // resumo desse input:
            type="email" // tipo email.
            name="email" // nome dele.
            id="email" // o id para codificação.
            value={email} // o valor dele que está na constante lá em cima.
            onChange={(event) => setEmailData(event.target.value)} // o método onChange serve para que seja realizada uma determinada ação após uma mudança.
          />
          {/* em resumo, essa pequena função superior seta o valor do campo com o que temos no state e o target define o valor dele */}
        </div>
        <div className="fields">
          <label htmlFor="password" className="fields">
            Input Password here!
          </label>
          <input
            type="password" // tipo senha
            name="password" // nome dele
            id="password" // o id para a codificação
            value={password} // o valor dele que está na constante no início do código
            onChange={(event) => setPassowordData(event.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit"> Enter </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// o que vamos ter que fazer para registar o momento do entrar é o seguinte:

// para registrar o evento, ele precisa ser mapeado, já que o React se trata de um Framework, pro navagador é como se
// estivessemos enviando um html comum, por isso a necessidade de mapeamento.
// pra isso vamos usar o handleSubmit

// 2° Dia de desenvolvimento dia 22/08/23 --> noções lógicas devem ser recuperadas para que possamos seguir com o desenvolvimento
// no momento que escrevo essa mensagem no dia 22/08/23 Às exatas 16:48 da tarde, já fizemos o armazenamento dos valores do login, basta agora...
// fazer com que os dados de senha e email coletados retornem em forma de token, por meio de um servidor

// a criação teve que ser interrompida por falta de softwares de servidor, vamos tentar o insomnia!

// mais tarde vamos adicionar o BackEnd, vamos fazer o desenvolvimento FrontEnd primeiro 23/08/23

// vamos seguir com a criação das Rotas para o site
