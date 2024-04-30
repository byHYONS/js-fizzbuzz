# ESERCIZIO: FizzBuzz

>[!NOTE]
>
> nome repo: js-fizzbuzz

### Consegna:
1. Scrivi un programma che stampi in console i numeri da `1 a 100`, ma che per i `multipli di 3 stampi “Fizz”` al posto del numero e per i `multipli di 5 stampi “Buzz”`. Per i numeri che sono sia `multipli di 3 che di 5 stampi “FizzBuzz”`.

2. Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
3. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare.
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”.
- BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
- BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

## Svolgimento:
- Per prima cosa eseguo una istruzione di iterazione con il `for loop`:
```
for (let i = 1; i <= 100; i++){
    console.log(i);
}
```
- Passo successivo sarà quello di eseguire una istruzione condizionale e far in modo che vengano rispettate le condizioni richieste dall'esercizio circa i `multipli di 3, 5, 15`:
```
for (let i = 1; i<=100; i++){
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
```
##### Bonus 1:
- Creo variabile `generaBox` e vado in lettura del contenitore dove andrò ad appendere i box generati tramite:
```
const nomeVar = document.queryselector('.class');
```

- Andrò poi a creare un elemento div con `createElement` e appenderò al suo interno il risultato in base alle variabili in cui scriverò la porzione di questo codice:
```
    const nomeVar = document.createElement('div');
    nomeVar.append('Fizz');
    generaBox.append(nomeVar);
```

##### Bonus 2:
- In base alle condizioni andrò ad aggiungere delle classi, già stilizzate nel css, all'elemento div creato con il metodo:
```
nomeVar.classList.add('.class')
```

###### FINE