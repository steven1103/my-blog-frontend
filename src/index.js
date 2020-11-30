import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import reportWebVitals from './reportWebVitals';
import Client from './Apollo/Client';
import {ApolloProvider} from "@apollo/react-hooks"
ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
