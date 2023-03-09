import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import MyAlert from './components/MyAlert';
import Header from './components/Header';
import MyLogin from './components/MyLogin';


function App() {

  return (
    <div className="App Container">
      <div className="style">
        <Header text="Desafío: Estado de los componentes y eventos" />
      </div>
      <MyLogin />
      <MyAlert variant="primary"/>
    </div>
  );
}

export default App;
