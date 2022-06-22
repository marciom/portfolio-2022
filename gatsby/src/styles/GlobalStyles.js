import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --purple: rgba(68, 73, 156, 1);
    --cream: rgba(246, 244, 239, 1);
    --grey: rgba(102, 99, 91, 1);
    --black: rgba(19, 17, 18, 1);
}

body{
    background-color: var(--cream);
}

`;
export default GlobalStyle;
