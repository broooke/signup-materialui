import React from 'react';
import { HashRouter as Router, Route  } from 'react-router-dom'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Route path="/" component={HomeScreen} exact />
      </Router>
    </React.Fragment>
  );
}

export default App;
