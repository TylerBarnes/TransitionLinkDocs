import React from 'react'
import styled from 'styled-components'
import Parser from 'html-react-parser'
import Box from './Box'

export default props => {
  return props.rows
    ? props.rows.map(({ t: title, p: paragraph }) => (
        <Box title={title} key={title} darkTitle>
          {!!paragraph && <DocParagraph>{Parser(paragraph)}</DocParagraph>}
        </Box>
      ))
    : null
}

const DocRow = styled.div``
const DocTitle = styled.h5``
const DocParagraph = styled.p``
