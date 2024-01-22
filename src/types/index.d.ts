import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

// Types Components
export type InputSearchProps = InputHTMLAttributes<HTMLInputElement>

export type ButtonSearchProps = ButtonHTMLAttributes<HTMLButtonElement>


export type CardBoxProps = {
   data: {
    cep: string,
    logradouro: string,
    complemento?: string,
    bairro: string, 
    localidade: string,
    uf: string,
    ddd: string
   }
}
