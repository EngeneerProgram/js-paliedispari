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


let ask_name = prompt("Come ti chiami?");
document.querySelector(".nome").innerHTML=(ask_name);

document.getElementById("pari").onclick = function(){
    let number_user;
    let boolean = false;
    while(boolean == false){
        number_user = parseInt(prompt("Scegli un numero compreso tra 1 e 5"));
        if(number_user > 0 && number_user < 6){
            boolean = true;
            console.log(`Hai scelto il numero ${number_user}`);
            document.querySelector(".risultato_user").innerHTML=(number_user);
        }
    }

    let number_npg = Math.floor(Math.random() * 5) +1;
    console.log(`Il Computer ha scelto il numero ${number_npg}`);
    document.querySelector(".risultato_npg").innerHTML=(number_npg);

    function pari_dispari(number_user ,  number_npg){
        let somma = number_user + number_npg;
        document.querySelector(".somma").innerHTML=(somma);
        if(somma %2 == 0){
            console.log(`${somma} è un numero pari quindi hai vinto`);
            document.querySelector(".vincitore").innerHTML=("Hai vinto");
            
        }else{
            console.log(`${somma} è un numero dispari quindi hai perso`);
            document.querySelector(".vincitore").innerHTML=("Hai perso");
        }
    }
    pari_dispari(number_user, number_npg);
}
 
document.getElementById("dispari").onclick = function(){
    let number_user;
    let number_npg =Math.floor(Math.random()*5) +1;
    document.querySelector(".risultato_npg").innerHTML=(number_npg);
    let boolean = false;
    
    while(boolean == false){
        number_user = parseInt(prompt("Inserisci numero compreso tra 1 e 5"));
        if(number_user > 0  && number_user < 6){
            boolean = true;
            console.log(`Hai scelto il numero ${number_user}`);
           document.querySelector(".risultato_user").innerHTML=(number_user);
        }

    }
    
    
    console.log(`Il computer ha scelto il numero ${number_npg}`);

    function pari_dispari(number_user, number_npg){
        let somma = number_user + number_npg;
        document.querySelector(".somma").innerHTML=(somma);
        if(somma %2 != 0){
            console.log(`${somma} è un numero dispari quindi hai vinto`);
            document.querySelector(".vincitore").innerHTML=("Hai vinto");
        }else{
            console.log(`${somma} è un numero pari quindi ha vinto il computer`);
            document.querySelector(".vincitore").innerHTML=("Hai perso");
        }
    }
    pari_dispari(number_user, number_npg);
}


