import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;

-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE_BG};
}

body, button, html, input, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
}
a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;