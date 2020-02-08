import React from 'react';

//redux
import {Provider} from 'react-redux'
import store from "./redux/store";

// styled-components
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import Layout from './components/layout'
import ResponsiveTheme from './components/responsive-theme'
// FF847C
function App() {
  return (<AppWrapper>
    <Provider store={store}>
      <ResponsiveTheme>
        <Layout/>
      </ResponsiveTheme>
      <GlobalStyle/>
    </Provider>
  </AppWrapper>);
}
const AppWrapper = styled.div `
`;

const GlobalStyle = createGlobalStyle `

`

export default App;
