import styled from 'styled-components';

export const MaskCSS = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: #00000082;
`

export const ContainerCSS = styled.div`
    gap: 2rem;
    top: 50%;
    left: 50%;
    width: 70vw;
    display: flex;
    height: 320px;
    max-width: 300px;
    background: white;
    padding: 1rem 2rem; 
    position: absolute;
    border-radius: 8px;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px 0 rgb(19 26 31 / 12%), 0 4px 6px 0 rgb(19 26 31 / 22%);
`
