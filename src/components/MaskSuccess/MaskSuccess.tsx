import React from 'react';
import {MaskCSS, ContainerCSS} from "./styled";
import { BsFillCheckCircleFill } from 'react-icons/bs';

const MaskSuccess = () => {
    return(
        <MaskCSS>
            <ContainerCSS>
                <p>Tu información fue enviada con éxito, estaremos en contacto contigo</p>
                <BsFillCheckCircleFill size={"2rem"} color={"green"}/>
            </ContainerCSS>
        </MaskCSS>
    )
}

export default MaskSuccess;
