import React, { useState } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");
  const [confSenhaValue, setConfSenhaValue] = useState("");
  const [nome, setNomeValue] = useState ("");
  const [descricao, setDescricaoValue] = useState ("");


  const handleNomeChange = (event) => {
    setNomeValue(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenhaValue(event.target.value);
  };

  const handleConfSenhaChange = (event) => {
    setConfSenhaValue(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricaoValue(event.target.value);
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
      <S.LogoCM img="true" src="/logo.jpeg" alt="Logo da empresa" />
      <S.h1CM spam="true">Seja bem Vindo(a)!</S.h1CM>
      <S.h2CM spam="true">Crie sua conta para poder</S.h2CM>
      <S.h2CM spam="true">aproveitar todas as experiências</S.h2CM>

      <S.NEstabelecimento
        input="true"
        type="text"
        placeholder="Nome da Empresa"
        value={nome}
        onChange={handleNomeChange}
      />

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

        <S.CSenhaCM
        input="true"
        type="password"
        placeholder="Confirmar Senha"
        value={confSenhaValue}
        onChange={handleConfSenhaChange}
      />

        <S.Descricao
        textarea="true"  
        type="text"
        placeholder="Descrição do Estabelecimento"
        value={descricao}
        onChange={handleDescricaoChange}
         />

      <ButtonCM>{"Entrar"}</ButtonCM>

      <S.Return p="true">
        Já tem uma conta? <Link to="/login">Login</Link>
      </S.Return>
    </S.ContainerCM>
  );
}

export default Register;
