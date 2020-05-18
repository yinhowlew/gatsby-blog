// import '../fonts/fonts-shared.css';   // need??
import './global.css';

import Typography from 'typography';
import FairyGates from 'typography-theme-fairy-gates';
 
FairyGates.overrideThemeStyles = () => ({
  a: {
    // color: 'var(--textLink)',
    textShadow: 'none',
    backgroundImage: 'none',
    // padding: '5px'
  },  
  "a:hover": {
    color: 'var(--textLink)',
    // fontWeight: "700"
    // textDecoration: 'underline' 
  },
  strong: {    // added this shit to make bold more prominent
    fontWeight: '900',
    textDecoration: 'underline'   
  },
  h1: {
    color: 'var(--textTitle)'
  },
  h2: {
    color: 'var(--textTitle)'
  },
  h3: {
    color: 'var(--textTitle)'
  },
  h4: {
    color: 'var(--textTitle)'
  },  
  hr: {
    background: 'var(--hr)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  // These two are for gatsby-remark-autolink-headers:
  'a.anchor': {
    boxShadow: 'none',
  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  'p code': {
    fontSize: '1rem',
  },
  'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
    fontSize: 'inherit',
  },
  'li code': {
    fontSize: '1rem',
  },
  blockquote: {
    color: 'var(--textTitle)',
    borderLeftColor: 'inherit',
    opacity: '0.8',
  },
  'blockquote.translation': {
    fontSize: '1em',
  },
});

// delete Wordpress2016.googleFonts;

const typography = new Typography(FairyGates);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;