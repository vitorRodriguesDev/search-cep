import { CardBoxProps } from "../../types"
import { Cep, Complementos, ContainerCard } from "./styles"
import { RenderCard } from "../../lib/RenderCard"

export const CardBox = ({data}: CardBoxProps) => {

  return (
    <RenderCard data={data} >
      <ContainerCard>
        <>
          <Cep>Cep: {data?.cep}</Cep>
          <Complementos>{data?.logradouro}</Complementos>
          <Complementos>Bairro: {data?.bairro}</Complementos>
          <Complementos>localidade: {data?.localidade}</Complementos>
          <Complementos>DDD: {data?.ddd}</Complementos>
        </>
      </ContainerCard>
    </RenderCard>
  )
 
}

