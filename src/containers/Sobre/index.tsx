import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
      quis accusantium aspernatur modi doloremque debitis eos facilis
      repudiandae veniam maxime explicabo vero repellat optio, hic, sapiente
      molestias consectetur id. Ipsum.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=AndBalbino&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AndBalbino&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
