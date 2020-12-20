import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box;
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};        
    }
    a {
        color:${props => props.theme.bpColor};    }
    input:focus{
        outline:none;
    }
    TextareaAutosize:focus{
        outline:none;
    }
`;
