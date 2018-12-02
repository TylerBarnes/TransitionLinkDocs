import styled from 'styled-components'

export default styled.section`
  margin: 60px 0 100px;
  @supports (display: grid) {
    @media screen and (min-width: 450px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 30px;
    }
    @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      width: 100%;
      min-height: 180px;
    }
  }
`
