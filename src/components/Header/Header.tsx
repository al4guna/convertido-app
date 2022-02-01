import React from 'react';
import { useHeader } from './useHeader';
import { HeaderCSS } from "./styled";
import HeaderMobile from "../HeaderMobile";
import HeaderDesktop from "../HeaderDesktop";
import { sizeInt } from '../../source/device';

const Header = (): JSX.Element => {
    const { categories } = useHeader();
    const windowSize = window.innerWidth;
    const isDesktop = sizeInt.laptop > windowSize;

    return (
        <HeaderCSS>
            {isDesktop && <HeaderMobile categories={categories}/> }
            {!isDesktop && <HeaderDesktop categories={categories}/> }
        </HeaderCSS>
    )
}

export default Header;
