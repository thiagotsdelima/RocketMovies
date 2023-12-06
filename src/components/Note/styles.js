import styled from 'styled-components';

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
border: none;
border-radius: 10px;
padding: 32px;
margin-bottom: 16px;

> h1 {
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
svg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 84px;
  height: 12px;
  margin-bottom: 15px;
}
p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  text-align: justify;
}
> footer {
  width: 100%;
  display: flex;
  margin-top: 24px;
}
`;
