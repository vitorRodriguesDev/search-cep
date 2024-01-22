import { CardBoxProps } from '../types'
 
interface RenderIfProps {
    data: {}
    children: React.ReactNode
}

export const RenderCard=({ data, children }: RenderIfProps & CardBoxProps)=> {
    return (
      <div>{data?.cep && children}</div>
    ) 
  }