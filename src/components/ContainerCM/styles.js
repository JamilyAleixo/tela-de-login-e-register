import styled from "styled-components";

export const Container = styled.div`
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