import { HashRouter as Router } from 'react-router-dom';

import { Navbar, Sidebar, Main, Footer } from './components/Layouts';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
