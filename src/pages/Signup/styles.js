import styled from 'styled-components';
import backgroundImg from '../../assets/background.svg'

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Form = styled.form`
padding: 50px 136px;

> h1 {
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PINK};
}
> h2 {
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 500;
  font-size: 24px;
  margin: 48px 0;
  
}
> p {
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}
button {
  margin-bottom: 42px;
}
> a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.PINK};
}
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
`;