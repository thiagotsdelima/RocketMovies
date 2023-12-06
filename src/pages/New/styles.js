import styled from 'styled-components';

export const Container = styled.div`
  
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
    
  .line {
  margin-right: 90px;
  margin-top: 180px;
  right: 0;
  border-left: 8px solid ${({ theme }) => theme.COLORS.PINK}; 
  height: 96px; 
  position: absolute;
  z-index: 1;
  border-radius: 8px;
   }
    
.tags {
  display: flex;
  align-self: center;
  height: 88px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  

  .item {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    padding: 20px 16px;
    max-width: 113px;
    margin-right: -35px;
    
  }
  .mandatory {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    max-width: 150px;
    border-radius: 10px;
    
  }
}

`;


export const Form = styled.form`
max-width: 1130px;
margin: 38px auto;
 > header {
  margin-top: 40px;
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  gap: 8px;
 
  svg {
    margin-top: 3px;
    font-size: 16px;
  }
 }
 section {
  margin-bottom: 40px;
  h3 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 24px;
  }
 }
 a {
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PINK}; 
  }

.list {
  display: flex;
  gap: 40px;
  list-style: none;
  margin-bottom: 40px;
  
}
.footer {
  display: flex;
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 0;
  .btn-save-changes {
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .btn-delete-movie {
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  }

`;

