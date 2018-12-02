import React from 'react'
import MenuItems from '../MenuItems'
import styled from 'styled-components'
import ArrowLink from '../ArrowLink'
import Box from '../Box'

const ContentMenu = ({ slug }) => {
  return (
    <Box title="Table of contents">
      <MenuItems slug={slug}>
        {items =>
          items.map(({ title, url, wordpress_id }) => {
            return (
              <Item key={wordpress_id}>
                <ArrowLink noBorder direction="right" to={url}>
                  {title}
                </ArrowLink>
              </Item>
            )
          })
        }
      </MenuItems>
    </Box>
  )
}

export default ContentMenu

const Item = styled.div`
  margin-bottom: 10px;
`
