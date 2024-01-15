import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/chord_feature';

ReactDOM.render(<App />, document.getElementById('react-root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

