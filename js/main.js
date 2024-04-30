// reset
'use strict'

// Per prima cosa eseguo una istruzione di iterazione con il for loop;
// Passo successivo sarà quello di eseguire una istruzione condizionale e far in modo che vengano rispettate le condizioni richieste dall'esercizio circa i multipli di 3, 5, 15;
// dichiaro var per leggere il div sul quale costuire i box;
// creo un contenitore dentro al quale riporterò il valore assegnato dalla condizione;
// aggiungo le classi, stilizzate su css, sul DOM.

const generaBox = document.querySelector('.boxes');
console.log({generaBox});

for (let i = 1; i<=100; i++){
  if (i % 3 === 0 && i % 5 !== 0){
    console.log('fizz');
    const boxFizz = document.createElement('div');
    boxFizz.classList.add('box', 'box-yellow')
    boxFizz.append('Fizz');
    generaBox.append(boxFizz); 

  } else if (i % 5 === 0 && i % 3 !== 0){
      console.log('Buzz');
      const boxBuzz = document.createElement('div');
      boxBuzz.classList.add('box', 'box-green')
      boxBuzz.append('Buzz');
      generaBox.append(boxBuzz);

  } else if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
      const boxFizzBuzz = document.createElement('div');
      boxFizzBuzz.classList.add('box', 'box-coral')
      boxFizzBuzz.append('FizzBuzz');
      generaBox.append(boxFizzBuzz);

  }  else {
      console.log(i);
      const boxNumber = document.createElement('div');
      boxNumber.classList.add('box')
      boxNumber.append(i);
      generaBox.append(boxNumber);
  }
}

// FINE
