import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};
  
  border-radius: 10px;
  
  padding-right: 16px;
  
  > a {
    border: none;
    background: none;
    &.button-delete {
      color: ${({ theme }) => theme.COLORS.RED};
    }
    &.button-add {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }



  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  svg {
    display: flex;
    align-items: center; 
    font-size: 24px;
  }
`;