import { ButtonSearchProps } from "../../types"
import { ButtonSearchStyles } from "./styles"

export const ButtonSearch = ({children, ...data}: ButtonSearchProps) => {
  return (
    <ButtonSearchStyles {...data}>
      {children}
    </ButtonSearchStyles>
  )
}
