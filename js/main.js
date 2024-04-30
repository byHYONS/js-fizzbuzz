// reset
'use strict'


// Passo successivo sarà quello di eseguire una istruzione condizionale e far in modo che vengano rispettate le condizioni richieste dall'esercizio circa i `multipli di 3, 5, 15`:
for (let i = 1; i<=100; i++){
// Per prima cosa eseguo una istruzione di iterazione con il `for loop`:
  if (i % 3 === 0 && i % 5 !== 0){
    console.log('fizz');
  } else if (i % 5 === 0 && i % 3 !== 0){
      console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
  }  else {
    console.log(i);
  }
}
