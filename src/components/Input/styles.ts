import styled from "styled-components";
import { CiSearch } from "react-icons/ci";


export const ContainerInput = styled.div`
   background-color: #999;
   padding: 15px;
   display: flex;
   border-radius: 10px;
   box-shadow: 1px 2px 5px #FFFF;
`;

export const InputStyles = styled.input`
    background-color: transparent;
    border:0;
    outline: none;
    font-size: 20px;
    color: #000;
`;


export const Icon = styled(CiSearch)`
  color: #000;
  font-size: 25px;
`