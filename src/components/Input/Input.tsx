import { ContainerInput, InputStyles, Icon} from "./styles"
import { InputSearchProps } from '../../types'
import { ButtonSearch } from ".."

export const Input = ({ ...rest }: InputSearchProps) => {
  return (
   <ContainerInput>
      <InputStyles {...rest} />
      <ButtonSearch >
        <Icon />
      </ButtonSearch>
   </ContainerInput>
  )
}
