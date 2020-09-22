import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UsersListProvider} from './components/UsersListProvider/users-list-provide.component';


ReactDOM.render(
  <React.StrictMode>
    <UsersListProvider>
      <App />
    </UsersListProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);


