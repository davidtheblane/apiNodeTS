import { GlobalStyles} from './styles/GlobalStyles';
import React from 'react';
import {Header} from './components/Header';
import {Orders} from './components/Orders';
// usar React.fragment declarado???
function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </React.Fragment>
  );
}

export default App;
