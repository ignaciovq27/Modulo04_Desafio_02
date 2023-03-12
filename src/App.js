import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

//components
import Header from './components/Header';
import MyAlert from './components/MyAlert';
import MyLogin from './components/MyLogin';


function App() {

  //Estado para errores y alert
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [variant, setVariant] = useState("");

  return (
    <div className="App Container">
      <div className="style">
        <Header text="Desafío: Estado de los componentes y eventos" />
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
