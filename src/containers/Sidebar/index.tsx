import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Botao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Anderson Balbino</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        AndBalbino
      </Paragrafo>
      <Paragrafo tipo="principal" fontSize={12}>
        Desenvolvedor FullStack Python
      </Paragrafo>
      <Botao onClick={props.trocaTema}>Trocar tema</Botao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
