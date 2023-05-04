import React, { useState } from 'react';
import {collection, addDoc} from 'firebase/firestore'
import {db} from './firebaseConection'
import './Cadastro.css'



function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [sexo, setSexo] = useState('');

  async function handleAdd(){


    // Verificar se as senhas são iguais
    if (senha !== repetirSenha) {
      alert('As senhas não coincidem');
      return;
    }

    // Salvar os dados no Firestore
    await addDoc(collection(db, 'usuarios'), {
      nome: nome,
      email: email,
      senha: senha,
      sexo: sexo
    })
    .then(() => {
      alert('DADOS REGISTRADOS COM SUCESSO')
      setNome('')
      setEmail('')
      setSenha('')
      setRepetirSenha('')
      setSexo('')
    
    })
    .catch((error) => {
      alert('ERRO' + error)
    })
  }

  

  return (
    <div className='login'>
      <div className='anuncio'>
        <h1>Faça seu cadastro.</h1>
        <p>Usuários cadastrados podem aproveitar até 80% off em nosso site ;)</p>
      </div>
    <div className='containerCadastro'>
    <label>Usuário:</label>
        <input 
        value={nome} 
        
        placeholder='Não use o nome real'
        onChange={(e) => setNome(e.target.value)} //isso faz com que armazene o dado digitado dentro da const nome
        />

        <label>Email:</label>
        <input 
        value={email} 
        type='text' 
        placeholder='E-mail'
        onChange={(e) => setEmail(e.target.value)} //isso faz com que armazene o dado digitado dentro da const email
        />
        <label>Senha:</label>
        <input 
        value={senha} 
        type='password' 
        placeholder='Senha'
        onChange={(e) => setSenha(e.target.value)} //isso faz com que armazene o dado digitado dentro da const senha
        />
        <label>Repetir Senha:</label>
        <input 
        value={repetirSenha} 
        type='password' 
        placeholder='Repita sua senha'
        onChange={(e) => setRepetirSenha(e.target.value)} //isso faz com que armazene o dado digitado dentro da const repetirSenha
        />
        <label>Sexo:</label>
        <select id="sexo" value={sexo} onChange={(event) => setSexo(event.target.value)}  > 
        <option value="">Selecione</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </select>
         <button className='botaoCadastro' onClick={handleAdd}>Cadastrar</button>
        </div>
        </div>
  )
}

export default Cadastro;
