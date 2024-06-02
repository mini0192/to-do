import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Head from './Head';
import Body from './Body';
import Foot from './Foot';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Body />
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
