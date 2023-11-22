import { HashRouter as Router } from 'react-router-dom';

import { Navbar, Main } from './components/Layouts';
import { GlobalStyles } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Main />
      </Router>
    </>
  );
}

export default App;
