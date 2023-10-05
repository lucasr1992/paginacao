'use client'
import React, { TdHTMLAttributes, useEffect, useState } from 'react';
import { BsEyeFill } from 'react-icons/bs'
import { AiFillEye, AiTwotoneEdit } from 'react-icons/ai'
import { RiExchangeFill } from 'react-icons/ri'
import { GrTest } from 'react-icons/gr'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import AgruparObj from '@/hooks/AgruparArray';
import { Tabela, Thead, Tr, Th, Td, ThAction, TdActions, Button, Container, ButtonList } from './Styled';

interface OptionProps {
  valUm: string
  valDois?: string
  valTres?: string
  valQuatro?: string
  valCinco?: string
  valSeis?: string
  valSete?: string
  valOito?: string
  valNove?: string
}

interface ListArray {
  Array: Array<OptionProps>
}


interface ListProps extends TdHTMLAttributes<HTMLTableElement> {
  propUm: string;
  propDois?: string;
  propTres?: string;
  propQuatro?: string;
  propCinco?: string;
  propSeis?: string;
  propSete?: string;
  propOito?: string;
  propNove?: string;
  options: Array<OptionProps>;
  select: boolean;
  itens:number;
  view: boolean;
  edit: boolean;
  status: boolean;
  onSelectChante: (valueSelect: Array<number>) => void;
  viewAction?:  (id: number) => void;
  editAction?:  (id: number) => void;
  statusAction?:  (id: number) => void;
}

const ListDefault: React.FC<ListProps> = (Props) => {
  const initialData = AgruparObj(Props.options, 10);
  const [listShow, setListShow] = useState<ListArray[]>([])
  const [arraySelect, setArraySelect] = useState<number[]>([])
  const [buttonSelect, setButtonSelect] = useState<number>(0)

  const teste = 'AB'

  useEffect(() => {
    if(initialData[0] !== undefined){
      setListShow(initialData[0])
    }
  }, [Props.options])

  function SelectBoxSet(key: number, event: React.ChangeEvent<HTMLInputElement>){
    const isChecked = event.target.checked;
    const newArray: any = ColectValue(arraySelect, key, isChecked)
    setArraySelect(newArray) 
    Props.onSelectChante(newArray)
  }

  function CleanArraySelect(){
    const newArray: any = []
    setArraySelect(newArray) 
    Props.onSelectChante(newArray)
  }

  function ColectValue(array: Array<number>, value:number, status:boolean){
    if(array.includes(value)){
      const arrayFiltrado: number[] = array.filter((valor: any) => valor !== value);
      return arrayFiltrado
    }else{
      const arrayAdd = array
      arrayAdd.push(value)
      return arrayAdd
    }
  } 

  function PagDown(){
    if(buttonSelect !== 0){
      var menos = buttonSelect - 1
      setListShow(initialData[menos])
      setButtonSelect(menos)
      CleanArraySelect()
      
    }
  }

  function PagUp(){
    if(buttonSelect < initialData.length - 1){
      var mais = buttonSelect + 1
      setListShow(initialData[mais])
      setButtonSelect(mais)
      CleanArraySelect()
    }    
  }

  function handleViewClick(val: number){
    if (Props.viewAction) {
      Props.viewAction(val);
    }
  };
  
  function handleEditClick(val: number){
    if (Props.editAction) {
      Props.editAction(val);
    }
  };

  function handleStatusClick(val: number){
    if (Props.statusAction) {
      Props.statusAction(val);
    }
  };
   

  return (
    <Container>
      <ButtonList>
        <BiSolidLeftArrow onClick={PagDown}/>
          {initialData.map((obj, index)=> (
              <Button valButton={index} selected={buttonSelect} onClick={() => {setListShow(initialData[index]), setButtonSelect(index), CleanArraySelect()}}  key={index}>{index}</Button>
            ))
          }     
       <BiSolidRightArrow onClick={PagUp}/>
      </ButtonList>
      <Tabela>
        <Thead>
          <tr>
            {Props.select && <Th>Select</Th>}
            {Props.propUm && <Th>{Props.propUm}</Th>}
            {Props.propDois && <Th>{Props.propDois}</Th>}
            {Props.propTres && <Th>{Props.propTres}</Th>}
            {Props.propQuatro && <Th>{Props.propQuatro}</Th>}
            {Props.propCinco && <Th>{Props.propCinco}</Th>}
            {Props.propSeis && <Th>{Props.propSeis}</Th>}
            {Props.propSete && <Th>{Props.propSete}</Th>}
            {Props.propOito && <Th>{Props.propOito}</Th>}
            {Props.propNove && <Th>{Props.propNove}</Th>}
            {Props.view || Props.edit || Props.status ? <ThAction>Actions</ThAction> : null}
          </tr>
        </Thead>
        <tbody>
          {listShow.map((obj, index) => (
            <Tr key={Object.values(obj)[0]}>
              {Props.select && <Td><input onChange={(e) => SelectBoxSet(Object.values(obj)[0], e)} type='checkbox'/></Td>}
              {Props.propUm && <Td>{Object.values(obj)[0]}</Td>}
              {Props.propDois && <Td>{Object.values(obj)[1]}</Td>}
              {Props.propTres && <Td>{Object.values(obj)[2]}</Td>}
              {Props.propQuatro && <Td>{Object.values(obj)[3]}</Td>}
              {Props.propCinco && <Td>{Object.values(obj)[4]}</Td>}
              {Props.propSeis && <Td>{Object.values(obj)[5]}</Td>}
              {Props.propSete && <Td>{Object.values(obj)[6]}</Td>}
              {Props.propOito && <Td>{Object.values(obj)[7]}</Td>}
              {Props.propNove && <Td>{Object.values(obj)[8]}</Td>}
              <TdActions>
                {Props.view ? <BsEyeFill onClick={() => handleViewClick(Object.values(obj)[0])}/> : null}
                {Props.edit ? <AiTwotoneEdit onClick={() => handleEditClick(Object.values(obj)[0])}/> : null}
                {Props.status ? <RiExchangeFill onClick={() => handleStatusClick(Object.values(obj)[0])}/> : null}
                
              </TdActions>
              
            </Tr>
          ))
          }
        </tbody>
      </Tabela>
    </Container>
  )
}
export default ListDefault;


