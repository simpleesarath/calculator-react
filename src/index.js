// Importing the 'React' and 'ReactDOM' libraries from the React package.
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the './index.css' file for styling.
import './index.css';

// Importing the './App' component from the './App' file.
import App from './App';

// Importing the 'reportWebVitals' function from the './reportWebVitals' file.
import reportWebVitals from './reportWebVitals';

// Creating the root element using the ReactDOM library.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the 'App' component to the root element.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Calling the 'reportWebVitals' function to start measuring performance in the application.
reportWebVitals();
