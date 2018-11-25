import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'
import SidebarLayout from '../../../layout/SidebarLayout'

const CoverIndex = () => {
  return (
    <SidebarLayout>
      <Link cover to="/tutorials">
        Back to tutorials
      </Link>
      <h1>AniLink Cover</h1>
      <h2>Examples</h2>
      <h2>Tutorial</h2>
    </SidebarLayout>
  )
}

export default CoverIndex
