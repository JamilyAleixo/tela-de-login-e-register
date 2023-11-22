import React, { useState } from "react";
import * as S from "./styles.js";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ButtonCM from '../../components/ButtonCM/ButtonCM.jsx';
import InputCM from '../../components/InputCM/InputCM.jsx';
import ContainerCM from '../../components/ContainerCM/ContainerCM.jsx';

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
  };

  const handleSignup = async () => {
    try {
      if (!email || !confirmacaoSenha || !senha || senha.length < 6) {
        setError("Preencha todos os campos");
        return;

      } else if (email !== confirmacaoSenha) {
        setError("Os e-mails não são iguais");
        return;
      }
      else if (!isValidEmail(email)) {
        setError("E-mail inválido");
        return;
      }

      const response = await axios.post("/Register", {
      nome,
      email,
      senha,
      descricao,
    });

    if (response.data.error) {
      setError(response.data.error);
      return;
    }

      const res = await signup(email, senha);

      if (res) {
        setError(res);
        return;
      }

      alert("Usuário cadastrado com sucesso!");
      navigate("/");

    } catch (error) {
      console.error("Erro no cadastro:", error);
      setError("Erro no cadastro. Tente novamente mais tarde.");
    }
  };

    return (
    <ContainerCM>
      <S.LogoCM img="true" src="/logo.png" alt="Logo da empresa" />
      <S.h1CM className="true">Seja bem Vindo(a)!</S.h1CM>
      <S.h2CM className="true">Registre-se para que todos</S.h2CM>
      <S.h2CM className="true">possam desfrutar das experiências juntos!</S.h2CM>

      <form onSubmit={handleSignup}>
        <label>
          <InputCM
            type="text"
            name="nome"
            placeholder="Nome Social"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          <InputCM
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <InputCM
            type="password"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <br />
        <label>
          <InputCM
            type="password"
            name="confirmacaoSenha"
            placeholder="Confirmar Senha"
            value={confirmacaoSenha}
            onChange={(e) => setConfirmacaoSenha(e.target.value)}
          />
          <S.labelError>{error}</S.labelError>
        </label>
        <br />
        <label>
          <S.DescricaoCM
            type="text"
            name="descricao"
            placeholder="Características Pessoais ( liste aqui o que você quer que as pessoas saibam de você)"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <br />
        <ButtonCM button type="submit">
          Cadastrar
        </ButtonCM>
      </form>

      <S.Return p="true">
        Já tem uma conta?
        <Link to="/login">Fazer Login</Link>
      </S.Return>
    </ContainerCM>
  );
};

export default Register;
