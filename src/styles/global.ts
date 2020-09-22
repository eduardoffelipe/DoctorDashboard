import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
  :root{
    --color-background: #F5F4FA;
    --color-text-primary: #3F3F4B;
    --color-text-primay-light:#C3C2C6;
    --color-primary: #86D39F;
    --color-secondary: #574496;

    font-size:60%;
  }
  body{
    background: var(--color-background);
    color: var(--color-primary);
  }
`
