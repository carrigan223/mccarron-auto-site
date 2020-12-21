import React from 'react';
import { Global, css } from '@emotion/react'; //emotion/core was renamed emotion/react
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Global
      //below is the global styles wrapping all the pages adjust here for top level changes
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        /* More info: https://bit.ly/2PsCnzk */
        * + * {
          margin-top: 1rem;
        }
        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 18px;
          line-height: 1.4;
          /* remove margin for the main div that Gatsby mounts into */
          //the above is commented out due to the effects on header layout for responsiveness
          > div {
            margin-top: 0;
          }
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Racing Sans One', -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

          color: #222;
          line-height: 1.1;
          + * {
            margin-top: 0.5rem;
          }
        }
        strong {
          color: #222;
        }
        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
