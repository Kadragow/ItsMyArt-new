import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.primaryLight};
        color: ${({ theme }) => theme.fontColor};
    }

    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
