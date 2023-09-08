import styled, {css} from "styled-components";

interface Props{
  selected: number;
  valButton: number
  
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 20px;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }:hover{
    color: orange;
  }

  svg{
    cursor: pointer;
  }
`

export const Tabela = styled.table`
  width: auto;
  border-collapse: collapse;
  padding: 8px;
  
`

export const Thead = styled.thead`
  
`

export const Tr = styled.tr`
  &:hover {background-color:  #9c9da0;}
`

export const Th = styled.th`
  cursor: auto;
  padding: 12px 13px;
  text-align: left;
  background-color: #dddada;
  color: #000000;
  box-shadow: #e0dcdc 2px 2px 10px 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: auto;
  border-bottom: 1px solid #b3b1b1;
`



export const ThAction = styled.th`
  cursor: auto;
  padding: 12px 13px;
  background-color: #dddada;
  color: #000000;
  box-shadow: #e0dcdc 2px 2px 10px 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: auto;
  border-bottom: 1px solid #b3b1b1;
  justify-content: center;
`

export const Td = styled.td`
  padding: 12px 13px;
  border-bottom: 1px solid #d3d3d3;
  font-family: Arial, Helvetica, sans-serif;
 
`

export const TdActions = styled.td`
  padding: 12px 13px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  gap: 15px;
  svg{
    font-size: 25px;
  }:hover{
    color: #ffa600;
    cursor: pointer;
  }
`

export const Button = styled.button<Props>`
  cursor: pointer;
  border: none;
  background: transparent;
  font-weight: 900;
  ${props => props.selected === props.valButton && css`
      color: orange;
    `}
`