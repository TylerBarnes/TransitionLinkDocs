import React from 'react'
import MenuItems from '../MenuItems'
import styled from 'styled-components'
import ArrowLink from '../ArrowLink'
import Box from '../Box'

const ContentMenu = ({ slug, title, type, links }) => {
  return (
    <Box title={title}>
      {type === 'menu'
        ? !!items && (
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
          )
        : !!links &&
          links.map(({ label, link }) => {
            return (
              <Item key={label}>
                <ArrowLink noBorder direction="right" href={link}>
                  {label}
                </ArrowLink>
              </Item>
            )
          })}
    </Box>
  )
}

export default ContentMenu

const Item = styled.div`
  margin-bottom: 10px;
`
