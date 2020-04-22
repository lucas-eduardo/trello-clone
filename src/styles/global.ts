import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, border-style, #root {
    height: 100%;
  }

  body {
    font: 1.4rem 'Roboto', sans-serif;
    background: rgb(75, 191, 107);
    color: #172b4d;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
`;