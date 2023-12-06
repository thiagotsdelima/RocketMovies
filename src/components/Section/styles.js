import styled from 'styled-components';

export const Container = styled.section`

  > h2 {
   
    padding-bottom: 16px;
   
    color: ${({ theme }) => theme.COLORS.WHITE_BG};
    font-size: 36px;
    line-height: 47px;
    font-weight: 500;
  }
`;

