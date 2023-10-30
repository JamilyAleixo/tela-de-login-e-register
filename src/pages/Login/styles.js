import styled from "styled-components";

export const ContainerCM = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0.3rem 1rem 1rem;
  font-family: Inter;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6.5rem;
    }  

    @media (min-width: 768px) and (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30rem;
    }  

    @media (min-width: 820px) and (max-width: 1180px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    }  
 
  @media (min-width: 820px) and (max-width: 1180px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
    }  

    @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
    }  
    
    @media (min-width: 800px) and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    } 

    @media (min-width: 800px) and (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    }  

`;

export const LogoCM = styled.img`
  margin: 2rem 1rem 0 0;
  width: 10rem;
  border-radius: 0.5rem;

  @media (min-width: 858px) and (max-width: 1180px) {
    width: 15%;
    }  
`;

export const h1CM = styled.h1`
  color: #ff6100;
  font-size: 1.2rem;
  margin: 0.6rem 1rem 0 0;
`;

export const h2CM = styled.h2`
  color:  rgba(840, 70, 0, 0.6);
  font-size: 0.7rem;
  padding: 0 6.5rem 0 0;
  margin: 0.3rem 0 0 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailCM = styled.input`
  width: 15rem;
  padding: 0.6rem;
  margin: 0.7rem 0 0 0;
  border: none;
  border-bottom: 0.1rem solid #ccc;
`;

export const SenhaCM = styled.input`
  width: 15rem;
  padding: 0.6rem;
  margin: 0.5rem 0 0.3rem 0;
  border: none;
  border-bottom: 0.1rem solid #ccc;
`;

export const ESenhaCM = styled.a`
  text-decoration: none;
  color: #ff6100;
  font-size: 0.7rem;
  padding: 0.4rem 0 0 9.2rem;
`;

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

export const h3CM = styled.h3`
  color: #ff6100;
  font-size: 0.7rem;
`;

export const CadastroCM = styled.p`
  color: #ff6100;
  font-size: 0.7rem;
  padding: 0.6rem 4.5rem 0 0;
  margin: 0.3rem 0 0 5rem;
  display: flex;
  gap: 0.3rem;
`;
