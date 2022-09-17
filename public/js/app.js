const pokeImg = document.querySelector('.poke-img');
const pokeIndex = document.querySelector('.poke-index');

// this technique requires copying the pokemon model to the client. obviously sub-optimal.
import pokemon from './pokemon.js';

// this file is shared between Index and Show (at the moment) and so some existence checks are req'd
const pokeList = pokeIndex && pokeIndex.querySelectorAll('li');

window.addEventListener('DOMContentLoaded', () => {
  console.log(`dom loaded`);
  if (pokeImg) {
    pokeImg.addEventListener('click', (e) => {
      console.log(`e.target`);
      pokeImg.classList.toggle('inverted');
    })
  }

  // const pokeList = pokeIndex.querySelectorAll('li');
  // pokeList.forEach((li, index) => {
  //   li.style.listStyle = 'none';
  //   // `url(${pokemon[index].img})`
  // })

  /*
.ladybug{ 	list-style:none; } 
.ladybug:before{ 	
content:''; 	
display:inline-block; 	
height:1em; 	
width:1em; 	
background-image:url(http://www.openclipart.org/people/lemmling/lemmling_Ladybug.svg); 	
background-size:contain; 	background-repeat:no-repeat; }
  */


  console.log(getComputedStyle(document.documentElement));
    // .getPropertyValue('--p1'));
})