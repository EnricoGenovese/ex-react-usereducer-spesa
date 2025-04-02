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
function App() {

  return (
    <>
      <h1>Lista dei prodotti</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name}: {p.price}€</li>
        ))}
      </ul>
    </>
  )
}

export default App
