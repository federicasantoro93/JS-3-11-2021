const data = [
    {
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "title": "et porro tempora",
      "completed": true
    },
    {
      "title": "laboriosam mollitia et enim quasi adipisci quia providen  illum",
      "completed": false
    },
    {
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }
  ]

// Creo una funzione che restituisce, tramite il metodo querySelector(), il primo elemento all'interno del documento che corrisponde al selettore specificato o al gruppo di selettori.

const qS = (selector) => document.querySelector(selector);

//Dichiaro la funzione render
const render = (container, items) => {
    const elements = items.map((element) =>
    `<li>
    <input type="checkbox" name="${element.title}" value="${element.completed}">
                    <label for="${element.title}">${element.title}</label>
    <li>`
    );

    const content = elements.join(''); //Il join()metodo crea e restituisce una nuova stringa concatenando tutti gli elementi in un array 

    container.innerHTML = content //La proprietà innerHTML ottiene o imposta il markup HTML contenuto nell'elemento.
}
//L'oggetto Map contiene coppie chiave-valore e ricorda l'ordine di inserimento originale delle chiavi. Qualsiasi valore (sia oggetti che valori primitivi ) può essere utilizzato come chiave o valore.

// Aggiungo un evento al documento stesso per assicurarmi che il codice non venga eseguito finchè il Dom non sia stato inizializzato.

document.addEventListener('DOMContentLoaded', () =>{
   const list = qS('ul');
   
   render(list,data) //Invoco la funzione render
});
