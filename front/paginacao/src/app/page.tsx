'use client'

import { GerarLista } from '@/data/data';

export default function Home() {
  function Teste(){
    const lista = GerarLista()
    console.log(lista)
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={Teste}>Teste</button>
    </div>
  )
}
