// HSK Review Application
// a flashcard system for reviewing HSK vocabulary

import React from 'react';
// styled-components
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Layout from './components/layout'
import ResponsiveTheme from './components/responsive-theme'
// FF847C
function App() {
  return (<AppWrapper>
    <ResponsiveTheme>
      <Layout/>
    </ResponsiveTheme>
    <GlobalStyle/>
  </AppWrapper>);
}
const AppWrapper = styled.div `
`;

const GlobalStyle = createGlobalStyle `

`

export default App;
