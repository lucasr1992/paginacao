'use client'

import ListRev from '@/components/Rev/List'

export default function Home() {

  function ViewAct(id: number){
    console.log(id)
  }

  return (
    <div>
      <h1>Pagina 2</h1>
      <ListRev viewAction={(value) => ViewAct(value)}/>
    </div>
  )
}


