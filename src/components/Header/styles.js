import styled from 'styled-components';


export const Container = styled.header`
grid-area: header;
height: 115px;
width: 100%;
border-bottom-width: 2px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
display: flex;
justify-content: space-between;
padding: 0 80px;

> h1 {
  color: ${({ theme }) => theme.COLORS.PINK};
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 32px;
}
> input {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE_BG};
  font-weight: 400;
  margin-top: 30px;
  width: 630px;
  border-radius: 10px;
  height: 50px;
  border: 0;
  padding: 12px;
}

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
> img {
  width: 56px;
  height: 56px;
  border-radius:50%;
}

> div {
  margin-right: 9px;
  display:flex;
  flex-direction: column;

  a {
    text-align: end;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }
  strong {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};

  }
}
`;

