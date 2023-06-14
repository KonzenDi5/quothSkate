
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './login.css'
import skatelogin from './images/skate.png'

// Configurar a inicialização do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJhglR6HX3aNvbcQAcqtAdg3gtZ_ZP284",
  authDomain: "quothskateshop-e1db0.firebaseapp.com",
  projectId: "quothskateshop-e1db0",
  storageBucket: "quothskateshop-e1db0.appspot.com",
  messagingSenderId: "642803005871",
  appId: "1:642803005871:web:d1ef6452bbe398ff1e575a",
  measurementId: "G-K4M4XF631T"
};



firebase.initializeApp(firebaseConfig);

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Sucesso no login, você pode redirecionar o usuário para outra página aqui
        console.log('Login realizado com sucesso!');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='containerlogin'>
        <img className='skatelogin' alt='skate' src={skatelogin}/>
      <div className='text'>
        <h2 className='text'>Faça o login,</h2>
        <h2 className='text'>Para entrar na pista.</h2>
      </div>
    
    <div className='login2'>
      <h2>Login</h2>
      
      <form className='inputs' onSubmit={handleLogin}>
        <div>
          <label className='email' htmlFor="email">Email:</label>
          <input
          placeholder='E-mail'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='inputSenha'>
          <label className='password' htmlFor="password">Senha:</label>
          <input
            placeholder='Senha'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className='btnLogin' type="submit">ENTRAR</button>
        {error && <p>{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
