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


verifica (parola);