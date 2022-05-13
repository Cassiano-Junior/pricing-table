import { Benefícios, Container, Descrição, Mensalidade, Plano } from './styles'
import Button from '../Button'
import check from '../../assets/check.svg'
import CabeçalhoDestaque from '../CabeçalhoDestaque'

interface ICard {
  plano: string
  mensalidade: number
  descricao: string
  beneficios: string[]
  destaque?: boolean
}

function Card({ plano, mensalidade, descricao, beneficios = [], destaque }: ICard) {
  return (
    <Container>
      <div className="content">
          {destaque === true ? <CabeçalhoDestaque plano={plano} /> : <Plano children={plano} />}

        <Mensalidade>
          <div className="reais">
            R$ {mensalidade}
            <span className="centavos">,00</span>
            <span className="mensal"> /mês</span>
          </div>
        </Mensalidade>

        <Descrição>{descricao}</Descrição>

        <hr />

        <div className="painelBeneficios">
          {beneficios.map((beneficio) => {
            return (
              <Benefícios>
                <img src={check} alt="sinal de check" />
                <p>{beneficio}</p>
              </Benefícios>
            )
          })}
        </div>
      </div>

      <Button />
    </Container>
  )
}

export default Card
