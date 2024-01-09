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
        font-family:Arial, Helvetica, sans-serif;
        font-size:16px;
        transition:.25s;
        background-color:${(props) => props.theme.backgroundColor};
        color:${(props) => props.theme.textColor};
    }
`;
