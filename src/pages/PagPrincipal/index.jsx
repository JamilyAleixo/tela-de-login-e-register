import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled.js";
import useAuth from "../../hooks/useAuth";
import ButtonCM from '../../components/ButtonCM/ButtonCM.jsx';
import ContainerCM from '../../components/ContainerCM/ContainerCM.jsx';


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <ContainerCM>
      <S.Title>Home</S.Title>
      <ButtonCM Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </ButtonCM>
    </ContainerCM>
  );
};

export default Home;