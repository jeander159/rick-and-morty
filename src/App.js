import './App.css'
// import Card from './components/js/Card.jsx'
import React, { useState } from 'react';
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom';
import Cards from './components/js/Cards.jsx'
import Nav from './components/js/Nav.jsx'
import About from './components/js/About'
import Detail from './components/js/Detail'
import Form from './components/js/Form'
// import characters, { Rick } from './data.js'
// import characters from './data.js'

function App() {
  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };
  const [characters, setCharacters] = useState([]);
  const onSearch = (action) => {
    // setCharacters([...characters, example])
    let idCharacter = (action==='random')?Math.floor(Math.random(character)*100):character;
   
    let character1 = characters.filter(char => char.id === parseInt(idCharacter));
    if (character1.length > 0) {
      window.alert('Personaje duplicado: '+character1[0].name)
      return null;
    }


    fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`)
      .then((response) => response.json())
      .then((data) => {

        if (data.name) {
          // setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters, data]);

          setCharacter('')
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });

    

  }

  const [character, setCharacter] = useState()

  const handleChange = (e) => {
    // console.log(e.target.value)
    setCharacter(e.target.value)
  }

  const onClose = (id) => {
    // e.preventDefault();
    // console.log(id)

    setCharacters(characters.filter((char) => char.id !== id))
  }

  // console.log(useLocation())

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'jeander@gmail.com';
const password = '123456';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
React.useEffect(() => {
  !access && navigate('/');
}, [access]);


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {(access) &&
        <Nav
          onSearch={onSearch}
          character={character}
          handleChange={handleChange}
        />}
      </div><hr />
      {/* <div> */}
        {/* <Cards
          characters={characters}
          onClose={onClose}
        /> */}
      {/* </div> */}
      <hr />

      
      <Routes>

        <Route path='/' element={
          <Form
            login={login}
          />
        }/>
        <Route path='/home' element={
          <Cards
            characters={characters}
            onClose={onClose}
          />
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
