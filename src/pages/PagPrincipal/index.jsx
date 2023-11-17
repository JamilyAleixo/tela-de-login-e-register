import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>Home</S.Title>
      <S.ButtonCM Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </S.ButtonCM>
    </S.Container>
  );
};

export default Home;