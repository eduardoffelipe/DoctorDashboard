import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  :root{
    font-size:60%;
  }
  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.secondary};
    font: 400 1.2em Roboto, sans-serif;
  }
`
