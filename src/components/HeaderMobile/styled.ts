import styled from 'styled-components';
import { Link } from "react-router-dom";
import { IListCSS } from './typings';

export const HeaderMobileCSS = styled.div`
    position: relative;
`

export const ButtonCSS = styled.button`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    background: #e6ebef;
    align-items: center;
    justify-content: center;
`;

export const ListCSS = styled.ul<IListCSS>`
    left: 0;
    right: 0;
    bottom: 0;
    top: 62px;
    padding: 1rem;
    z-index: 1000;
    overflow: hidden;
    position: absolute;
    background: #ffffff;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-property: transform, opacity;
    transition-delay: 100ms;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)") }; 
`

export const LinkCSS = styled(Link)`
    gap: 1.5rem;
    display: flex;
    color: #8796a1;
    font-size: 14px;
    padding: 0.4rem ;
    margin-bottom: 5px;
    border-radius: 8px;
    background: #e6ebef;
    align-items: center;
    text-decoration: none;
`
