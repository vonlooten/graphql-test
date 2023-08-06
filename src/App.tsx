import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import "./assets/index.css"
// Supports weights 100-700
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/600.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
            <Route path="/" Component={Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
