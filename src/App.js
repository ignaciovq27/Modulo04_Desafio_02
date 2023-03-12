import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//components
import Header from './components/Header';
import MyAlert from './components/MyAlert';
import MyLogin from './components/MyLogin';


function App() {

  //Estados para errores y alert
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [variant, setVariant] = useState("");

  return (
    <div className="App Container">
      <div className="style">
        <Header text="Desafío: Estado de los componentes y eventos" />
        <h4 style={{color: 'blue'}}>Datos de login:</h4>
        <h5 style={{color: 'blue'}}>Email = " 1 " </h5>
        <h5 style={{color: 'blue'}}>Password = " 1 "</h5>

      </div>
      <MyLogin
        setMessage={setMessage}
        setShowAlert={setShowAlert}
        setTitle={setTitle}
        setVariant={setVariant}
      />
      <MyAlert
        message={message}
        isShown={showAlert}
        title={title}
        variant={variant}
      />
    </div>
  );
}

export default App;
