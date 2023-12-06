import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  > menu {
    
    padding: 40px 100px 40px;
  }
  .line {
  margin-right: 84px;
  margin-top: 238px;
  right: 0;
  border-left: 8px solid ${({ theme }) => theme.COLORS.PINK}; 
  height: 96px; 
  position: absolute;
  z-index: 1;
  border-radius: 8px;
  }

`;

export const Content = styled.div`
display: flex;
justify-content: end;

 Button {
    margin-right: 90px;
    margin-top: 50px;
    padding-left: 30px;
    width: 200px;
    height: 48px;
    border-radius: 5rpx;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
}

> Section {
  
  position: absolute;
  margin: 0;
  padding: 0;
  left: 100px;
  top: 166px;
  
 
}
> svg {
    position: absolute;
    margin-right: 250px;
    margin-top: 66px;
    z-index: 1;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
  }

`;

export const Menu = styled.div`
    grid-area: Menu;
    section {
      padding: 40px 100px 40px;
    }
`;