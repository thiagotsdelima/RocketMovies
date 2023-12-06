import styled from 'styled-components';

export const Container = styled.span`
font-family: 'Roboto', sans-serif;
font-weight: 400;
font-size: 12px;
padding: 5px 14px;
border-radius: 5px;
margin-right: 6px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
color: ${({ theme }) => theme.COLORS.GRAY_300};
`;