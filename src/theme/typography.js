import Typography from '../utils/typography'
import breakpoint from './breakpoints'
import * as theme from '../theme'

const typeConfig = {
  bodyFontFamily: ['Rubik', 'sans-serif'],
  headerFontFamily: ['Roboto Mono', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 600,
  baseFontSize: '19px',
  baseLineHeight: 1.75,
  scaleRatio: 1.5,
  blockMarginBottom: 0.5,
  includeNormalize: false,
  breakpoints: {
    [`@media screen and (min-width:${breakpoint.small})`]: {
      // baseFontSize: '20px',
      scaleRatio: 1.8,
    },
    [`@media screen and (min-width:${breakpoint.large})`]: {
      // baseFontSize: '22px',
      scaleRatio: 2,
    },
  },
  overrideStyles: ({ rhythm }) => ({
    h1: {
      letterSpacing: '-3px',
    },
    'h2,h3,h4,h5,h6': {
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    'h4,h5,h6': {
      letterSpacing: '0',
    },
    p: {
      maxWidth: '90%',
      width: '670px',
      color: theme.color.darkBlue,
    },
    a: {
      fontFamily: 'Roboto Mono',
    },
    code: {
      fontSize: '.8rem',
    },
    'p + h1, p + h2, p + h3, p + h4, p + h5, p + h6, ul + h1, ul + h2, ul + h3, ul + h4, ul + h5, ul + h6, ol + h1, ol + h2, ol + h3, ol + h4, ol + h5, ol + h6': {
      marginTop: rhythm(2.5),
    },
    '.code-toolbar + h2, .code-toolbar + h1, .code-toolbar + h3, .code-toolbar + h4, .code-toolbar + h5, .code-toolbar + h6, pre + h2, pre + h1, pre + h3, pre + h4, pre + h5, pre + h6, pre + p': {
      marginTop: rhythm(2),
    },
    '.code-toolbar + p': {
      marginTop: rhythm(1.5),
    },
    'p + .code-toolbar': {
      marginTop: rhythm(1),
    },
    'p:last-child': {
      marginBottom: rhythm(2),
    },
    'ul + p, ol + p': {
      marginTop: rhythm(1.5),
    },
    '.super-title': {
      fontSize: rhythm(4),
      letterSpacing: rhythm(-0.2),
      borderBottom: '3px solid black',
      paddingBottom: rhythm(1),
      marginBottom: rhythm(2),
      display: 'inline-block',
    },
    'p a': {
      position: 'relative',
    },
    'p a:after': {
      content: "' '",
      position: 'absolute',
      display: 'inline-block',
      width: '100%',
      height: '5px',
      bottom: '-8px',
      left: 0,
      background: theme.color.salmon,
      zIndex: 0,
    },
  }),
}

const typography = new Typography(typeConfig)
const Rhythm = typography.rhythm
const typographyString = typography.toString()

export { Rhythm, typographyString }
