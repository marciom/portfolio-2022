import { createGlobalStyle } from "styled-components";
import "@fontsource/exo/200.css";
import "@fontsource/crimson-pro/300.css";

const Typography = createGlobalStyle`

.serif {
    font-family: "Crimson Pro", serif;
    font-weight: 300;
}

html {
    font-family: "Exo", sans-serif;
    font-weight: 400;
}
`;

export default Typography;
