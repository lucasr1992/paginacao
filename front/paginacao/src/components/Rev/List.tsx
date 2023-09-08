'use client'
import React, { TdHTMLAttributes, useState } from 'react';
import { BsEyeFill } from 'react-icons/bs'
import { Container } from './Styled';

'como fazer o Componente ListRev ao clicar e BsEyeFill enviar o valor de value para a função ViewAct no componente pai'
interface ListProps extends TdHTMLAttributes<HTMLTableElement> {
  viewAction?:  (id: number) => void;
}

const ListRev: React.FC<ListProps> = (Props) => {
  const [value, setValue] = useState(6);

  function handleViewClick(val: number){
    if (Props.viewAction) {
      Props.viewAction(val);
    }
  };

  return (
    <Container>
      <BsEyeFill onClick={() => handleViewClick(value)}/>
    </Container>
  )
}
export default ListRev;
