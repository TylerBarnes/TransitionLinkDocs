import React from 'react'
import SidebarLayout from '../../../layout/SidebarLayout'
import * as theme from '../../../theme'
import Link from 'gatsby-plugin-transition-link/AniLink'
import ArrowLink from '../../../components/ArrowLink'
import Card, { CardTag } from '../../../components/Card'
import { ExampleGrid } from '../index'
import DocTable from '../../../components/DocTable'

export const CoverIndex = props => (
  <SidebarLayout>
    <ArrowLink direction="left" light bg={theme.color.purple} to="/tutorials">
      Back to tutorials
    </ArrowLink>
    <h1>AniLink Cover</h1>

    <p>
      Vestibulum in laoreet mi. Integer vel enim convallis, vestibulum eros ut,
      congue arcu. Sed cursus auctor diam a iaculis. Aenean placerat congue
      nibh, sit amet dapibus metus suscipit commodo.{' '}
    </p>

    <Examples b={props.b} />

    <h2>Using Cover</h2>
    <p>
      Morbi eget accumsan urna. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia Curae;
    </p>

    <h3>Props</h3>
    <DocTable
      rows={[
        {
          t: 'direction',
          p:
            'Sets the cover direction.<br />Possible values include "left", "right", "up", and "down"',
        },
        {
          t: 'bg',
          p: 'A CSS value for the "background" property of the cover element',
        },
        { t: 'duration', p: 'The animation duration in seconds.' },
      ]}
    />
    <h2>How it's made</h2>
    <p>As with all other AniLink transitions, cover is built with gsap.</p>
  </SidebarLayout>
)

export default () => <CoverIndex b />

export const Examples = props => {
  return (
    <>
      <h2>Examples</h2>
      <ExampleGrid>
        <Link
          cover
          to={`/tutorials/cover/${props.b ? 'b' : ''}`}
          bg={theme.color.purple}
          direction="left"
          duration={1}
        >
          <Card>
            <CardTag>AniLink Cover</CardTag>
            Purple left
          </Card>
        </Link>
        <Link
          cover
          to={`/tutorials/cover/${props.b ? 'b' : ''}`}
          bg={theme.color.brutalBlue}
          direction="right"
          duration={1}
        >
          <Card>
            <CardTag>AniLink Cover</CardTag>
            Right Blue
          </Card>
        </Link>
        <Link
          cover
          to={`/tutorials/cover/${props.b ? 'b' : ''}`}
          bg={theme.color.lightGreen}
          direction="up"
          duration={1}
        >
          <Card>
            <CardTag>AniLink Cover</CardTag>
            Up green
          </Card>
        </Link>
        <Link
          cover
          to={`/tutorials/cover/${props.b ? 'b' : ''}`}
          bg={theme.color.black}
          direction="down"
          duration={1}
        >
          <Card>
            <CardTag>AniLink Cover</CardTag>
            Down black
          </Card>
        </Link>
      </ExampleGrid>
    </>
  )
}
