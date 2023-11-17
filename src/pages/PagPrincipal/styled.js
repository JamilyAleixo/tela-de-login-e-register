import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 20px;
`;

export const Title = styled.h2``;

export const ButtonCM = styled.button`
  width: 16.5rem;
  height: 2.3rem;
  padding: 0.5rem;
  margin-top: 1rem;
  background: linear-gradient(
    to bottom,
    rgba(340, 70, 0, 0.6),
    rgba(340, 70, 0, 1)
  );
  color: #fff;
  border: none;
  border-radius: 0.6rem;
`;
