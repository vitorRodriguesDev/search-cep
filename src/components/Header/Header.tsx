import { AppConfig } from '../../config/AppConfig'
import { Logo, NavBar } from './styles'

export const Header = () => {
  return (
    <NavBar>
        <Logo>{AppConfig.name}</Logo>
    </NavBar>
  )
}
