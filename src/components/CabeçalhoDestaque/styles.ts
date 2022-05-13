import styled from 'styled-components'

export const Container = styled.div`
    background-color: var(--yellow);
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
    width: 120.3%;
    margin-left: -30px;
    margin-top: -30px;
    border-radius: 6px 6px 0 0;
    align-items: center;
    padding: 1.87rem;
    padding-bottom: 1.25rem;

    .plano {
        color: var(--blue);
        font-size: 1.12rem;
        font-weight: 600;
    }
`

export const Label = styled.span`
    background-color: var(--blue);
    color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 2.5rem;
    font-size: 0.75rem;
    font-weight: 600;
`


