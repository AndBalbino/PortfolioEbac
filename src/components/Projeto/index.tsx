import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com Vue.js</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
