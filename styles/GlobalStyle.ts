import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	html {
		font-family: Inter, cursive;
	}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: lightgray;
  }
	p {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
	}
`

export default GlobalStyle
