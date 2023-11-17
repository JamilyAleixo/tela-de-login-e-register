import React, { useState } from "react";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ButtonCM from '../components/ButtonCM';
import InputCM from '../components/InputCM';
import ContainerCM from '../components/ContainerCM';

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

      const response = await axios.post("http://localhost:3000/login", {
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
      <S.LogoCM img="true" src="/logo.jpeg" alt="Logo da empresa" />
      <S.h1CM className="true">Seja bem Vindo(a)!</S.h1CM>
      <S.h2CM className="true">Crie sua conta para poder</S.h2CM>
      <S.h2CM className="true">aproveitar todas as experiências</S.h2CM>

      <form onSubmit={handleSignup}>
        <label>
          <InputCM
            type="text"
            name="nome"
            placeholder="Nome da Empresa"
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
            placeholder="Descrição do Estabelecimento"
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
        <Link to="/login">Criar conta</Link>
      </S.Return>
    </ContainerCM>
  );
};

export default Register;
