import './App.css';
import UserForm from './Componentes/UserForm/UserForm';
import React, { useState } from  'react';


function App() {
  const [iconTheme, setIconTheme] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle('dark-theme-variables');
    setIconTheme(!iconTheme);
  }

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <h1>
        Form with Hooks
      </h1>
      <span className='material-icons theme-toggler' onClick={changeTheme}>{iconTheme ? "light_mode" : "dark_mode"}</span>
      <UserForm />
    </div>
  );
}

export default App;
