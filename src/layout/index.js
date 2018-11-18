import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import * as theme from '../theme'

const GlobalStyle = createGlobalStyle`
  ${theme.typographyString}
`

const styledTheme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={styledTheme}>
        <>
          <Helmet>
            <meta name="description" />
          </Helmet>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    )
  }
}
