import { Plano } from "../Card/styles";
import { Container, Label } from "./styles";

interface ICabeçalhoDestaque {
    plano: string
}

function CabeçalhoDestaque ({plano}: ICabeçalhoDestaque) {
 return (
    <Container>
        <span className='plano'>
            {plano}
        </span>
        <Label>
            Popular
        </Label>
    </Container>
 )   
}

export default CabeçalhoDestaque;