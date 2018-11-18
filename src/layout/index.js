import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'emotion'
import * as theme from '../theme'

injectGlobal`
  ${theme.typographyString}
`
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <meta name="description" />
        </Helmet>
        {children}
      </div>
    )
  }
}
