import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenhaValue(event.target.value);
  };

  const ButtonCM = ({ children, onClick, ...rest }) => {
    return (
      <S.ButtonCM button="true" onClick={onClick} {...rest}>
        {children}
      </S.ButtonCM>
    );
  };

  return (
    <S.ContainerCM>
      <S.LogoCM img="true" src="./logo.jpeg" alt="Logo da empresa" />
      <S.h1CM spam="true">Seja bem Vindo(a)!</S.h1CM>
      <S.h2CM spam="true">Faça o login para acessar</S.h2CM>
      <S.h2CM spam="true">o seu cardápio digital</S.h2CM>

      <S.EmailCM
        input="true"
        type="text"
        placeholder="E-mail"
        value={emailValue}
        onChange={handleEmailChange}
      />

      <S.SenhaCM
        input="true"
        type="password"
        placeholder="Senha"
        value={senhaValue}
        onChange={handleSenhaChange}
      />

      <S.ESenhaCM href="https://www.colaboraread.com.br/login/auth">
        Esqueci minha senha
      </S.ESenhaCM>

      <ButtonCM>{"Entrar"}</ButtonCM>

      <S.CadastroCM p="true">
        Não tem uma conta?
        <Link to="/registro">Criar conta</Link>
      </S.CadastroCM>
    </S.ContainerCM>
  );
}
export default Login;
