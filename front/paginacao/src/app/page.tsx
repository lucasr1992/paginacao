'use client'
import { useEffect, useState } from 'react';
import ListDefault from '@/components/List/List';
import { GerarLista } from '@/data/data';
import AgruparObj from '@/hooks/AgruparArray';


export default function Home() {
  const [dataList, setDataList] = useState<any[]>([])
  const [selectList, setSelectList] = useState(true)
  const [viewList, setViewList] = useState(true)
  const [editList, setEditList] = useState(true)
  const [statusList, setStatusList] = useState(true)
  const [arraySelect, setArraySelect] = useState<number[]>([])


  useEffect(() => {    
    setDataList(GerarLista())
  }, [])

  function TransformarArrayJSON(){
    console.log(JSON.stringify(Listas))
  }

  function Imprimir(){
    console.log(arraySelect)
  }

  function EditAct(val: number){
    console.log("Edit Val: ", val)
  }

  function ViewAct(val: number){
    console.log("View Val: ", val)
  }

  function StatusAct(val: number){
    console.log("Status Val: ", val)
  }
 

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={Imprimir}>Lista</button>
      <ListDefault viewAction={(value) => ViewAct(value)} editAction={(value) => EditAct(value)} statusAction={(value) => StatusAct(value)} onSelectChante={(value) => {setArraySelect(value), console.log(value)} } view={viewList} edit={editList} status={statusList} itens={10} select={selectList} options={dataList} propUm={'ID'} propDois={'Nome'} propTres={'Idade'} />
    </div>
  )
}

const Listas = [
  {id: 1, nome: 'Charlie', idade: 40},
  {id: 2, nome: 'George', idade: 35},
  {id: 3, nome: 'George', idade: 35},
  {id: 4, nome: 'Fiona', idade: 60},
  {id: 5, nome: 'David', idade: 60},
  {id: 6, nome: 'Bob', idade: 40},
  {id: 7, nome: 'George', idade: 25},
  {id: 8, nome: 'George', idade: 25},
  {id: 9, nome: 'Charlie', idade: 35}
]