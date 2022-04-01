//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// 1) chiediamo all'utente di inserire la parola
let parola = prompt("Inserisci parola");


//creiamo la nostra funzione
 function verifica(parola){
   console.log("Una parola palindroma è quella parola che anche se letta in senso opposto restituisce sempre lo stesso risultato");
   let parola_divisa = parola.split("");
    
     let parola_invertita = parola_divisa.reverse();
    
    let parolaInvertita= parola_invertita.join("");
    
    if(parolaInvertita == parola){
       console.log(`${parola} è una parola palindroma`);
         }else{
        console.log(`${parola} non è una parola palindroma`);
        
    }
    

 }

 //invochiamo la nostra funzione
 verifica (parola);


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let number_user;
let boolean = false;

while(boolean == false){
    number_user = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
    if(number_user > 0  && number_user < 6){
        boolean = true;
        console.log(`Il giocatore ha scelto il numero: ${number_user}`);
    }
}



let number_npg = Math.floor(Math.random() * 5) +1;
console.log(`Il pc ha scelto il numero :  ${number_npg}`);

function pari_dispari(number_user, number_npg){
    if(number_user %2 == 0){
        console.log("Il giocatore ha scelto un numero pari");
    }else{
        console.log("Il giocatore ha scelto un numero dispari");
    }

    if(number_npg %2 == 0){
        console.log("Il sistema ha scelto un numero pari");

    }else{
        console.log("Il sistema ha scelto un numero dispari");
    }
    let somma = number_user + number_npg;
    console.log(somma);
    if(somma%2==0){
        console.log("La somma dei numeri è un numero pari");
    }else{
        console.log("La somma dei numeri è un numero dispari");
    }


    if(number_user %2 == 0 && somma %2 == 0){
        console.log("HAI VINTO");
    }else if(number_user %2 !=0 && somma %2 != 0){
        console.log("HAI VINTO");
    }else if(number_user == number_npg){
        console.log("patta");
    }else{
        console.log("Ha vinto il computer");
    }
}

pari_dispari(number_user,number_npg);