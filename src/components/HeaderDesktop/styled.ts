import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderDesktopCSS = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

export const ListCSS = styled.ul`
    gap: 1rem;
    display: flex;
    font-size: 14px;
    align-items: center;
`

export const LinkCSS = styled(Link)`
    color: #192024;
    text-decoration: none; 
    &:hover {
        text-decoration: underline; 
    }
`
