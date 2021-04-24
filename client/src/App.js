import React from 'react';
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail';
import Update from './views/Update';
import Form from './views/Form';
import { Router } from '@reach/router';
import'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/pets/:id" />
        <Update path="/pets/:id/edit" />
        <Form path="/new" />
      </Router>
    </div>
  );
}

export default App;
