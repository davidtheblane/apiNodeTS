import { GlobalStyles} from './styles/GlobalStyles';
import React from 'react';
import Header from './components/Header';
// usar React.fragment declarado???
function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Header/>
    </React.Fragment>
  );
}

export default App;
