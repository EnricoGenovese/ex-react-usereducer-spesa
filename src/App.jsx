import { useState } from 'react'
// 1. Parti dall’array products fornito:

const products = [
  { name: 'Mela', price: 0.5 },
  { name: 'Pane', price: 1.2 },
  { name: 'Latte', price: 1.0 },
  { name: 'Pasta', price: 0.7 },
];

// Crea un componente che mostra la lista dei prodotti.
// Per ogni prodotto, mostra:
// Nome
// Prezzo

// Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
// Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
// Al click del bottone, usa una funzione addToCart per:
// Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
// Se il prodotto è già nel carrello, ignora l’azione.
// Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
// Per ogni prodotto nel carrello, mostra:
// Nome
// Prezzo
// Quantità

// Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.
function App() {

  const [addedProducts, setAddedProducts] = useState([])

  const addToCart = (i) => {
    const product = products[i];
    const isInCart = addedProducts.some((p) => p.name === product.name)
    if (!isInCart) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }])
    } else { return }

  }

  return (
    <>
      <h2>Lista dei prodotti</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price}€)</p>
            <button onClick={() => addToCart(i)}> Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      <h2>Carrello</h2>
      {addedProducts.length >= 1 ? addedProducts.map((p, i) => (
        <li key={i}>
          <p>{p.name} ({p.price}€) {p.quantity}</p>
        </li>
      ))
        : <p>Il carrello è vuoto</p>}
    </>
  )
}

export default App
