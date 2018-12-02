import styled from 'styled-components'

const PaginationLinks = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;

  > *:only-child {
    margin-left: auto;
    margin-right: 0;
  }
`

export default PaginationLinks
