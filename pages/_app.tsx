import type { AppProps } from "next/app"
import { ReactElement } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import { theme } from "../styles/theme"

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
