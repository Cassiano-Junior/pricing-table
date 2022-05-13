import styled from 'styled-components';

export const ButtonStyle = styled.button.attrs({type:"submit"})`
    width: 18.5rem;
    height: 3rem;
    color: var(--blue);
    border-color: var(--blue);
    background-color: transparent;
    font-size: 1.12rem;
    font-weight: 600;
    border-radius: 0.6rem;
    outline: none;
    padding: 0.75rem 6.8rem;
    transition: all 0.3s;

    :hover {
        cursor: pointer;
        background-color: var(--blue);
        color: #FFFFFF;
    }
`