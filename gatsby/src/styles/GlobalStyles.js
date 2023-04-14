import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --offwhite: #FAFAFA;
    --grey: #979797;
    --black: black;
}

a{
    color: inherit;
}

html{
    background: var(--offwhite);
    scrollbar-width: thin;
    scrollbar-color: var(--purple) white;
}

.container{
    max-width: 1366px;
    box-sizing: border-box;
    padding: 0 60px;
    margin: 0 auto;
    position: relative;
}


`;
export default GlobalStyle;
