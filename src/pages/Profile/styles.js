import styled from 'styled-components';

export const Container = styled.div`
width: 100%;

> header {
  grid-area: header;
  height: 144px;
  width: 100%;
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  display: flex;
 
  padding: 0 144px;
  gap: 8px;
  
  a {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 64px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
}
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

> div:nth-child(4) {
  margin-top: 24px;
}
button {
  margin-bottom: 100px;
  font-weight: 500;
}
`;

export const Avatar = styled.div`
position: relative;
margin: -120px auto 32px;
width: 186px;
height: 186px;

> img {
  width: 186px;
  height: 186px;
  border-radius: 50%;
}
> label {
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 7px;
  right: 7px;
  cursor: pointer;

  input {
    display: none;
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

}
`;