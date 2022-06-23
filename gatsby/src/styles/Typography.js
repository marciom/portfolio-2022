import { createGlobalStyle } from "styled-components";
import "@fontsource/exo";
import "@fontsource/crimson-pro";

const Typography = createGlobalStyle`

.serif {
    font-family: "Crimson Pro", serif;
    font-weight: 300;
}

html {
    font-family: "Exo", sans-serif;
    font-weight: 300;
}
`;

export default Typography;
