import { createGlobalStyle } from "styled-components";
import backgroundDarkImg from "./themes/backgroundDark.jpg"
import backgroundLightImg from "./themes/backgroundLight.jpg"

export default createGlobalStyle`
    *{
        margin:0px;
    }
    html{
        scroll-behavior:smooth;
    }
    body{
        min-height:100vh;
        font-family:"Roboto", sans-serif;
        font-size:18px;
        transition:.25s;
        background-image:url(${(props)=>props.theme.activeTheme==="dark"? backgroundDarkImg : backgroundLightImg});
        color:${(props) => props.theme.textColor};
    }
`;
