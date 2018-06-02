import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { opacity } from 'style-utils'

const theme = {
  fonts: {
    main: `'Source Sans Pro', roboto, sans-serif`,
    titles: `'Passion One', cursive`,
  },
  colors: {
    text: 'rgba(0, 0, 0, .5)',
    background: '#fff',
    primary: '#52006b',
    accent: '#00e9b3',
    success: '#4caf50',
    warning: '#ffc107',
    error: '#f44336',
  },
  opacity: {
    titles: 0.8,
    text: 0.55,
  },
  border: {
    width: '.125em',
    radius: '.25em',
  },
  columns: {
    count: 12,
    gap: '.5em',
  },
  lineHeight: 1.5,
}

injectGlobal`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: ${theme.fonts.main};
    color ${opacity(theme.colors.text,theme.opacity.text)};
  }

  input, textarea, select, button {
    font: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.titles}
  }
`

const Theme = (props) => (
  <ThemeProvider theme={theme} {...props} />
)

export default Theme