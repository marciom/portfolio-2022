import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --purple: rgba(68, 73, 156, 1);
    --cream: rgba(246, 244, 239, 1);
    --grey: rgba(102, 99, 91, 1);
    --black: rgba(19, 17, 18, 1);
}

a{
    color: inherit;
}

html{
    background: var(--cream);
    scrollbar-width: thin;
    scrollbar-color: var(--purple) white;
}


header, main, footer {
    padding: 0 7.5vw;
}

`;
export default GlobalStyle;
