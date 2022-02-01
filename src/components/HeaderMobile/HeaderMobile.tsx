import React, { useMemo } from 'react';
import { GrMenu } from 'react-icons/gr';
import { GiCommercialAirplane } from 'react-icons/gi';

import { IHeaderMobile } from "./typings";
import { HeaderMobileCSS, ButtonCSS, ListCSS, LinkCSS } from './styled';

import { useHeaderMobile } from "./useHeaderMobile";

const HeaderMobile = (props: IHeaderMobile): JSX.Element => {
    const { categories } = props;

    const {
        isOpen,
        handleShowMenu
    } = useHeaderMobile();

    const items = useMemo(() => {
        return (
            categories.map((cat) => {
                return (
                    <li key={cat.id}>
                        <LinkCSS
                            to={`/?urlKey=${cat.urlKey}`}
                        >
                            <GiCommercialAirplane size={"1.3rem"} />
                            {cat.name}
                        </LinkCSS>
                    </li>
                )
            })
        )
    }, [categories]);

    return(
        <>
            <HeaderMobileCSS>
                <ButtonCSS onClick={handleShowMenu}>
                    <GrMenu size={"1.5rem"} fill={"#5a6872"}/>
                </ButtonCSS>
            </HeaderMobileCSS>
            <ListCSS isOpen={isOpen}>
                {items}
            </ListCSS>
        </>
    )
}

export default HeaderMobile;
