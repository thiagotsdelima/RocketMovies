import styled from 'styled-components';

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  .line {
  margin-right: 70px;
  margin-top: 180px;
  right: 0;
  border-left: 8px solid ${({ theme }) => theme.COLORS.PINK}; 
  height: 96px; 
  position: absolute;
  z-index: 1;
  border-radius: 8px;
  }

  > main {
    
  max-width: 1113px;
  margin: 0 auto;

  .svg-container {
    margin-top: 23px;
    margin-left: 230px;
    position: absolute;
    z-index: 1;
  }

  svg {
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 13px;
  }
  button {
    margin-top: 40px;
    color: ${({ theme }) => theme.COLORS.PINK};
    align-self: end;
  }

  section {
    
    margin-top: 10px;
    margin-bottom: 100px;
    text-align: justify;
  }
 
  p {
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: justify;
      margin-top: 40px;
      margin-bottom: 156px;
    }
}
`;


export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: -100px;
  img {
    
    width: 16px;
    height: 16px;
    border-radius:50%;
    
  }
    strong {
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      margin-left: 8px;
      font-weight: 400;
 }
    span {
      font-size: 16px;
      margin-left: 33px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
 }
 svg {
  position: absolute;
  margin: 0;
  padding: 0 578px 0 0;
  left: 0;
  top: 240px;
  width: 100%;
  z-index: -1;
 }
 
`;

export const TagsContainer = styled.div`
    display: flex;
    grid-template-columns: 1;
    align-items: center;
    margin-top: 40px;
`;

