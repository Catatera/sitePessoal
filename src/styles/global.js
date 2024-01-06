import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0px;
    }
    html{
        scroll-behavior:smooth;
    }
    body{
        min-height:100vh;
        background-color:#222;
        font-family:sans-serif;
        color:#ffff;
        font-size:16px;
    }
`;
