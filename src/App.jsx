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

// Milestone 3: Modificare il carrello
// Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
// Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
// Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
// Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
// Sotto alla lista del carrello, mostra il totale da pagare:
// Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
// Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.

function App() {

  const [addedProducts, setAddedProducts] = useState([])

  const addToCart = (product) => {
    const isInCart = addedProducts.some((p) => p.name === product.name)
    if (!isInCart) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }])
    } else {
      updateProductQuantity(product)
    }
  };


  const updateProductQuantity = (product) => {
    setAddedProducts((curr) => curr.map((p) => {
      if (p.name === product.name) {
        return { ...p, quantity: p.quantity + 1 }
      }
      return p;
    }))
  }

  const removeFromCart = (product) => {
    setAddedProducts(addedProducts.filter((p) => p.name !== product.name))
  }

  const priceArray = addedProducts.map((p) => parseFloat(p.price * p.quantity))
  const totalPrice = priceArray.reduce((acc, curr) => {
    return acc + parseFloat(curr)
  }, 0)

  return (
    <>
      <h2>Lista dei prodotti</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price}€)</p>
            <button onClick={() => addToCart(p)}> Aggiungi al carrello</button>
            <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
          </li>
        ))}
      </ul>
      <h2>Carrello</h2>
      {addedProducts.length >= 1 ? addedProducts.map((p, i) => (
        <li key={i}>
          <p>{p.name} ({p.price}€) Quantità: {p.quantity}</p>
        </li>
      ))
        : <p>Il carrello è vuoto</p>}
      <p>Totale: {totalPrice.toFixed(2)}€</p>
    </>
  )
}

export default App
