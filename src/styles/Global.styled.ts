import {createGlobalStyle} from "styled-components";
import {thema} from "./Theme.ts";


export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${thema.colors.descriptionColor};
        line-height: 1.2;
        min-width: 360px;
        a {
            text-decoration: none;
            color: ${thema.colors.linkColor};
            cursor: pointer;
              
            

            &:hover {
                transform: translateY(-5px);
                
            }
        }

        ul {
            list-style: none;
        }

        button {
            background-color: unset;
            border: none;
        }

        header {
            background: ${thema.colors.secondaryBg};
        }

        section {
            background: ${thema.colors.primaryBg};
            padding-bottom: 150px;
            @media ${thema.media.mobile} {
                padding-bottom: 80px;
            }
        }
    }
        
`