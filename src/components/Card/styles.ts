import styled from 'styled-components'

export const Container = styled.div`
    width: 22.18rem;
    height: 29.37rem;
    border-radius: 0.5rem;
    background-color: #FFF;
    padding: 1.87rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    :hover {
        
    }

    .painelBeneficios {
        margin-bottom: 2rem;
    }

`

export const Plano = styled.div`
    font-size: 1.12rem;
    font-weight: 600;
    color: #1e2338;
    margin-bottom: 1.25rem;
`
export const Mensalidade = styled.div`
    display: flex;
    margin-bottom: 0.62rem;

    .reais {
        font-size: 2.25rem;
        font-weight: 700;
        color: #1E2338
    }

    .centavos {
        font-size: 1.12rem;
        font-weight: 700;
        color: #1E2338  
    }

    .mensal {
        font-size: 1.12rem;
        font-weight: 400;
        color: #828799;
    }
`

export const Descrição = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    color: #828799;
    margin-bottom: 1.25rem;
`

export const Benefícios = styled.div`
    display: flex;
    margin-top: 1.25rem;
    gap: 1.5rem;

    p {
        font-size: 0.875rem;
        font-weight: 600;
        color: #828799;
    }
`