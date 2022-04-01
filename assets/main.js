//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// 1) chiediamo all'utente di inserire la parola
//let parola = prompt("Inserisci parola");


//creiamo la nostra funzione
// function verifica(parola){
//     console.log("Una parola palindroma è quella parola che anche se letta in senso opposto restituisce sempre lo stesso risultato");
//     let parola_divisa = parola.split("");
    
//     let parola_invertita = parola_divisa.reverse();
    
//     let parolaInvertita= parola_invertita.join("");
    
//     if(parolaInvertita == parola){
//         console.log(`${parola} è una parola palindroma`);
//     }else{
//         console.log(`${parola} non è una parola palindroma`);
        
//     }
    

// }

// //invochiamo la nostra funzione
// verifica (parola);


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let number_user = parseInt(prompt("Inserisci un numero compreso tra 1 e 5: "));
if(number_user < 0 || number_user > 5){
    alert("errore, sei pregato di inserire un numero compreso tra 0 e 5");

}else{
    console.log(`Il numero che hai inserito è ${number_user}`);
}

