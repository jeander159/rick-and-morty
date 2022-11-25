import './App.css'
// import Card from './components/js/Card.jsx'
import React, { useState } from 'react';
import Cards from './components/js/Cards.jsx'
import Nav from './components/js/Nav.jsx'
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
   
    let character1 = characters.filter(char => char.id === parseInt(character));
    if (character1.length > 0) {
      window.alert('Personaje duplicado')
      return null;
    }

    let idCharacter;
    idCharacter = (action==='random')?Math.floor(Math.random(character)*100):character;
    


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

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
          onSearch={onSearch}
          character={character}
          handleChange={handleChange}
        />
      </div><hr />
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <hr />
    </div>
  )
}

export default App
