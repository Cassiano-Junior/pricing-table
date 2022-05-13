import Card from '../Card'
import { Container } from './styles'

function Cards() {
  const props1 = {
    plano: 'Free',
    mensalidade: 0,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architect aliquid minu',
    beneficios: ['Lorem, ipsum dolor sit amet ', 'Lorem, ipsum dolor sit amet '],
  }
  const props2 = {
    plano: 'Básico',
    destaque: true,
    mensalidade: 29,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architect aliquid minu',
    beneficios: ['Lorem, ipsum dolor sit amet ','Lorem, ipsum dolor sit amet ','Lorem, ipsum dolor sit amet '],
  }
  const props3 = {
    plano: 'Profissional',
    mensalidade: 59,
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architect aliquid minu',
    beneficios: ['Lorem, ipsum dolor sit amet ', 'Lorem, ipsum dolor sit amet ', 'Lorem, ipsum dolor sit amet ', 'Lorem, ipsum dolor sit amet '],
  }

  return (
    <Container>
      <Card {...props1} />
      <Card {...props2}/>
      <Card {...props3}/>
    </Container>
  )
}

export default Cards
