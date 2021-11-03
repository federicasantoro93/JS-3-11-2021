//WIDGET
const data = [
    {
        name: "Rick Sanchez",
        phone: "+39 364 4836584",
        email: "rick@rickandmorty.com"
    },
   ];

// Definiamo la struttura del primo elemento
// Poi cambiamo i valori per ottenere gli altri elementi
/*
All'interno del body inserisco un main.
All'interno del main inserisco un header e un form.
All'interno dell'header inserisco un tag h1 Widget dei contatti in Js.
All'interno del form inserisco un'input.
Sopra l'input inserisco una label e l'associo tramite gli attributi name(input) e for(label).
Per rendere l'input più parlante inseriamo il placeholder "es: pippo"
Per spegnere i suggerimenti in un campo di testo usiamo l'attributo autocomplete="off"
L'ultimo elemento del form sarà il button "Cerca".
Esistono tre tipi di button: button, reset, submit.
type="submit" è il valore di default.
Quando remo il button di tipo submit le informazioni vengono inviate da qualche parte.
Il button di tipo reset pulisce la form, cancellando il/i campi.
Sia submit che reset lavorano nel contesto del form che li contiene.
Il button di tipo button non ha un comportamento predefinito, serve ad avere un pulsante customizzabile tramite js.
Per disegnare la lista utilizziamo l'elemento ul.
Per ogni elemeto dentro il nostro data.js abbiamo un li.



<ul>
    <li>
        <h3>Rick Sanchez</h3>
        <p><strong>Phone:</strong><a href="tel:+39 3644836584>+39 3644836584</a></p>
        <p><strong>Email:</strong><a href="mailto:rick@rickandmorty.com">rick@rickandmorty.com</a></p>
    </li>
</ul>

Renderemo questo blocco dinamico inserendo piuttosto che il testo delle variabili.
Stilizziamo gli elemtenti.
Creo un nuovo file index.js e lo aggiungo nell'html dopo data.js.
Aggiungo un evento al documento stesso per assicurarmi che il nostro codice non verrà eseguito finchè il Dom non sia stato inizializzato.

document.addEventlistener('DONContentLoaded'), () =>{
    const form = document.querySelector('form');
    const input = document.querySelector('form input');
    const list = document.querySelector('ul');
});

Determino le variabili che mi servono: form input ul.
Se volessimo ottimizzare...

const q = (selector) => document.querySelector(selector);

document.addEventlistener('DONContentLoaded'), () =>{
    const form = q('form');
    const input = q('form input');
    const list = q('ul');
});

Se domani volessimo cambiare codice (ottenendo lo stesso risultato) cambiando solo la prima riga di codice
cambiamo tutte le variabili.

*/

/**
 *  Wraps the document.querySelector metodh
 

//Commento?

const q = (selector) => document.querySelector(selector);

document.addEventlistener('DONContentLoaded'), () =>{
    const form = q('form');
    const input = q('form input');
    const list = q('ul');

const elements = data.map((element,index) => {
    //return element.name + ", " + element.phone + ", " + element.email;
    return `<li>
    <h3>${element.name}</h3>
    <p><strong>Phone:</strong><a href="tel:${element.phone}">${element.phone}</a></p>
     <p><strong>Phone:</strong><a href="emailto:${element.email}">${element.email}</a></p>
     </li>`; 
});
    const content = elemets.join('');
    
    list.innerHTML = content; ???

    //console.log(elements);
    //console.log(content);


});
 
Di default array.map() crea un nuovo array, copiando l'array d'origine e poi modificandolo in base alle istruzioni
 Nell'autput avremo un array di 5 elementi 
 Una template string 
//METODO JOIN
.join() crea una stringa partendo da un'array concatenando tutti gli elementi tra di loro.
Posso castumizzare la stringa inserendo fra parentesi per esempio uno spazio vuoto (" ")

Se volessimo ottimizzare...

const elements = data.map((element) => 
    `<li>
    <h3>${element.name}</h3>
    <p><strong>Phone:</strong><a href="tel:${element.phone}">${element.phone}</a></p>
    <p><strong>Phone:</strong><a href="emailto:${element.email}">${element.email}</a></p>
    </li>`; 
});

Togliamo le graffe perchè...
Togliamo il return...


*/