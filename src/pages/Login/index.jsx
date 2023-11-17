import React, { useState } from "react";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ButtonCM from '../components/ButtonCM';
import InputCM from '../components/InputCM';
import ContainerCM from '../components/ContainerCM';


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenhaValue(event.target.value);
  };

  const handleLogin = async () => {
    try {
      if (!emailValue || !senhaValue) {
        setError("Preencha todos os campos");
        return;
      }

      const response = await axios.post("http://localhost:3000/login", {
        email: emailValue,
        senha: senhaValue,
      });

      
      login(emailValue, senhaValue);
      navigate("/home");

      return response.data;

    } catch (error) {
      setError("Erro no login. Verifique suas credenciais.");
      console.error("Erro no login:", error);
    }
  };


  return (
    <ContainerCM>
      <S.LogoCM img="true" src="./logo.jpeg" alt="Logo da empresa" />
      <S.h1CM spam="true">Seja bem Vindo(a)!</S.h1CM>
      <S.h2CM spam="true">Faça o login para acessar</S.h2CM>
      <S.h2CM spam="true">o seu cardápio digital</S.h2CM>

      <InputCM
        input="true"
        type="text"
        placeholder="E-mail"
        value={emailValue}
        onChange= {(e) => {handleEmailChange(e);
          setError("")}}/>

      <InputCM
        input="true"
        type="password"
        placeholder="Senha"
        value={senhaValue}
        onChange= {(e) => {handleSenhaChange(e);
          setError("")}}/>
          
      <S.labelError>{error}</S.labelError>
      <S.ESenhaCM href="https://www.colaboraread.com.br/login/auth">
        Esqueci minha senha
      </S.ESenhaCM>

      <ButtonCM onClick={handleLogin}>{"Entrar"}</ButtonCM>

      <S.CadastroCM p="true">
        Não tem uma conta?
        <Link to="/registro">Criar conta</Link>
      </S.CadastroCM>
    </ContainerCM>
  );
}
export default Login;
